import styles from './page.module.scss'
import content from '@/components/content.module.scss'
import Image from 'next/image'

export const metadata = {
  title: 'About',
}

export default async function Page() {
  return (
    <section className={styles.about}>
      <h1>About me</h1>
      <div className={styles.icon}>
        <Image src='/img/header_with_pic.png' alt='icon' width={3000} height={1000}></Image>
      </div>
      <div className={content.content}>
        <h2>About szne</h2>
        <p>
          はじめまして、szneと申します。デザイン、フロントエンド開発、映像作成を少しだけ経験しています。Illustratorを使って簡単なロゴデザインを作成するのが得意です。
        </p>
        <hr />
        <p>
          Hello, I'm szne. I have some experience in design, front-end development, and video
          creation. I specialize in creating simple logo designs using Illustrator.
        </p>
        <h2>Links and contacts</h2>
        <ul>
          <li>
            <a href='https://github.com/szne' target='_blank' rel='noopener noreferrer'>
              Github: szne
            </a>
          </li>
          <li>
            <a href='https://zenn.dev/szn' target='_blank' rel='noopener noreferrer'>
              Zenn: @szn
            </a>
          </li>
          <li>
            <a href='https://x.com/szn_jp' target='_blank' rel='noopener noreferrer'>
              X: @szn_jp
            </a>
          </li>
          <li>
            <a href='https://bsky.app/profile/szn.jp' target='_blank' rel='noopener noreferrer'>
              Bluesky: @szn.jp
            </a>
          </li>
          <li>Mail: hi@szn.jp (見ないです)</li>
        </ul>
        <h2>Tips</h2>
        <p>
          名前について：短いドメインに憧れて取得した"szn.jp"が由来です。特に読み方は考えていませんが、自分はよく「すずね」と呼んでいます。全部小文字なので、名前を打っていてたまに嫌な感じがします。
        </p>
      </div>
    </section>
  )
}
