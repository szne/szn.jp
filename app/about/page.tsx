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
        <p>
          まだまだ経験が浅く、学ぶことが多いと感じていますが、その分、謙虚さと向上心を持って取り組んでいます。デザインや開発の世界は広く、日々新しい技術やアイデアが生まれています。その中で、自分のスキルを磨きながら、常に新しいことに挑戦することが私の目標です。
        </p>
        <hr />
        <p>
          Hello, I'm szne. I have some experience in design, front-end development, and video
          creation. I specialize in creating simple logo designs using Illustrator.
        </p>
        <p>
          I still have a lot to learn and feel that my experience is somewhat limited. However, I
          approach my work with humility and a desire to improve. The fields of design and
          development are vast, with new technologies and ideas emerging daily. My goal is to
          continually refine my skills and embrace new challenges as they arise.
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
            <a href='https://x.com/szneh' target='_blank' rel='noopener noreferrer'>
              X: @szneh
            </a>
          </li>
          <li>
            <a href='https://bsky.app/profile/szn.jp' target='_blank' rel='noopener noreferrer'>
              Bluesky: @szn.jp
            </a>
          </li>
          <li>Mail: hi@szn.jp (あまり見ないです)</li>
        </ul>
        <h2>Tips</h2>
        <p>
          名前について：短いドメインにあこがれて取得した"szn.jp"が由来です。特に読み方は考えていませんが、自分はよく「すずね」と呼んでいます。全部小文字なので、たまに名前を打っていてすこし嫌な感じがします。
        </p>
      </div>
    </section>
  )
}
