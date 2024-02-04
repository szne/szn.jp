import fs from 'fs'; // Node.jsのファイルシステムモジュールをインポート
import path from 'path'; // Node.jsのパス処理モジュールをインポート
import matter from 'gray-matter'; // Markdownファイルのfrontmatterを抽出するモジュール
import Link from 'next/link'; // Next.jsのクライアントサイドナビゲーションを提供するモジュール
import Image from 'next/image';
import imageSize from "image-size";

// frontmatterの型定義
interface Frontmatter {
  title: string
  date: string
  description: string
  image: string
}

// ブログ記事の型定義
interface Post {
  slug: string;
  frontmatter: Frontmatter;
}

// 非同期関数としてのBlogsコンポーネント
async function Blogs() {
  // contentディレクトリ内のマークダウンファイル一覧を取得
  const postsDirectory: string = path.join(process.cwd(), 'public/content'); // ファイルパスを生成
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

        // slugとfrontmatter(title, date, description)を取得
        return {
          slug: fileName.replace('.md', ''),
          frontmatter: data as Frontmatter, // 抽出したfrontmatterをFrontmatter型にキャスト
        };
      })
  ).then((posts) => 
    // 最新日付順に並び替え
    posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
  );



  // JSX要素を返す
  return (
    posts
    // <div>
    //   {posts.map((post) => {
    //     const imagePath = post.frontmatter.image?.startsWith("/") ? post.frontmatter.image : ('/content/' + post.frontmatter.image);
  
    //     return (
    //       <article key={post.slug}>
    //         <p>{post.frontmatter.date}</p>
    //         <Link href={`/blog/${post.slug}`}>
    //           {post.frontmatter.title}
    //         </Link>
    //         <p>
    //           {post.frontmatter.description}
    //         </p>
    //         <Image
    //           alt={post.frontmatter.title + "のサムネイル"}
    //           src={imagePath}
    //           height={imageSize('public' + imagePath).height}
    //           width={imageSize('public' + imagePath).width}
    //         />
    //       </article>
    //     );
    //   })}
    // </div>
  );
}

export default Blogs;
