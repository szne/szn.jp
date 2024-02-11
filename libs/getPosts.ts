import fs from 'fs'; // Node.jsのファイルシステムモジュールをインポート
import path from 'path'; // Node.jsのパス処理モジュールをインポート
import matter from 'gray-matter'; // Markdownファイルのfrontmatterを抽出するモジュール

// frontmatterの型定義
interface Frontmatter {
    title: string
    date: string
    tags: string[]
    description: string
    image: string
}

// ブログ記事の型定義
interface Post {
    slug: string;
    frontmatter: Frontmatter;
}

async function getWorks() {
    // contentディレクトリ内のマークダウンファイル一覧を取得
    const postsDirectory: string = path.join(process.cwd(), 'public/works'); // ファイルパスを生成
    const fileNames: string[] = fs.readdirSync(postsDirectory); // ディレクトリ内のファイル名の一覧を取得

    // 各ファイルの中身を取得
    const posts: Post[] = await Promise.all(
        // 各ファイル情報を取得
        fileNames
            .filter((fileName) => fileName.endsWith('.md')) // ファイルのみを対象にする
            .map(async (fileName: string) => {
                const filePath: string = path.join(postsDirectory, fileName); // ファイルの絶対パスを生成
                const fileContents: string = fs.readFileSync(filePath, 'utf8'); // ファイルの中身をUTF-8で読み込む
                const { data } = matter(fileContents); // Markdownファイルのfrontmatterを抽出

                // tagをスペースで分割して配列に変換
                const tagArray = data.tags ? data.tags.split(" ") : [];

                // slugとfrontmatter(title, date, description)を取得
                return {
                    slug: fileName.replace('.md', ''),
                    frontmatter: {
                        title: data.title,
                        date: data.date,
                        tags: tagArray,
                        description: data.description,
                        image: data.image
                    } as Frontmatter, // 抽出したfrontmatterをFrontmatter型にキャスト
                };
            })
    ).then((posts) =>
        // 最新日付順に並び替え
        posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
    );
    return (
        posts
    )
}

export default getWorks()
