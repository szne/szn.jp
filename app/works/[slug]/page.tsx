import fs from 'fs' // Node.jsのファイルシステムモジュールをインポート
import path from 'path' // Node.jsのパス処理モジュールをインポート
import matter from 'gray-matter' // Markdownファイルのfrontmatterを抽出するモジュール
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import Image from 'next/image'
import imageSize from 'image-size'

import styles from './page.module.scss'
import contentstyle from '@/components/content.module.scss'

// URLパラメータの型定義
interface Params {
  slug: string
}

// 非同期関数としてのBlogPostコンポーネント
export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}): Promise<JSX.Element> {
  // URLのパラメータから該当するファイル名を取得 (今回は hello-world)
  const { slug } = params
  const filePath = path.join(process.cwd(), 'public/works', `${slug}.md`) // ファイルの絶対パスを生成

  // ファイルの中身を取得
  const fileContents = fs.readFileSync(filePath, 'utf8') // ファイルの中身をUTF-8で読み込む
  const { data, content } = matter(fileContents) // Markdownファイルのfrontmatterと本文を抽出

  const title = data.title // 記事のタイトル
  const date = data.date
  const tags = data.tags ? data.tags.split(' ') : []
  const image = data.image
  const imagePath = image?.startsWith('/') ? image : '/works/' + image
  // JSX要素を返す
  return (
    <>
      <div className={styles.titlewrap}>
        <img
          alt={title + 'のサムネイル'}
          src={imagePath}
          height={
            imageSize(process.env.NODE_ENV === 'development' ? 'public' + imagePath : imagePath).height
          }
          width={imageSize(process.env.NODE_ENV === 'development' ? 'public' + imagePath : imagePath).width}
          className={styles.titleimage}
        />
        <div className={styles.titleinfowrap}>
          <h1>{title}</h1>
          <div>
            <p>
              <span>{date}</span>
            </p>
            <p>
              {tags.map((tags: string) => {
                return <span key={tags}>{tags} </span>
              })}
            </p>
          </div>
        </div>
      </div>
      <article className={contentstyle.content}>
        <Markdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          components={{
            h1: 'h2',
            h2: 'h3',
            h3: 'h4',
            a(props) {
              const { href, children } = props
              return href?.startsWith('/') ? (
                <Link href={href}>{children}</Link>
              ) : (
                <a href={href} rel='noreferrer' target='_blank'>
                  {children}
                </a>
              )
            },
            img(props) {
              const { src, alt, width, height } = props
              if (!src) return <span>src が指定されていません。</span>

              const image = src?.startsWith('/') ? src : '/works/' + src

              return (
                <>
                  <img
                    alt={alt ?? 'alt なし'}
                    src={image}
                    height={height ? Number(height) : imageSize(process.env.NODE_ENV === 'development' ? 'public' + imagePath : imagePath).height}
                    width={width ? Number(width) : imageSize(process.env.NODE_ENV === 'development' ? 'public' + imagePath : imagePath).width}
                  />
                  {alt && <span className={contentstyle.imagealt}>{alt}</span>}
                </>
              )
            },
          }}
        >
          {content}
        </Markdown>
      </article>
    </>
  )
}
