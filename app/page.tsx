import Link from 'next/link'
import Image from 'next/image';
import imageSize from "image-size";
import HelloWorld from '@/libs/getWorks'

import './globals.scss'
import styles from "./page.module.scss";

export default async function Index() {
  const works = await HelloWorld
  return (
    <>
      <section className={styles.logo}>
        <svg id="logo" data-name="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1855.94 426.66">
          <path d="m16.11,398.06c33.43-45.45,85.95-154.98,126.84-215.78,15.69-23.32,104.32-152.97,148.24-160.91,43.92-7.94,124.57,23.24,124.57,23.24,0,0-39.42,25.59-43.56,34.98-4.13,9.39.28,112.78-41.09,163s-194.98,158.47-194.98,158.47l56.92-38.99s46,.22,63,0c100.74-1.29,205.64-93.64,207-95,31-31,116-118,142.68-143.74,46.93-45.29,139-120,175-100s37,54,29,72c-27.95,62.89-116,79-116,79,0,0,55-3,77,12s54,147-49,192c-43.46,18.99-105.13,36-113.56,0s210.73-108.17,250.34-135.1c25-17,37-25,69-55,30.48-28.57,114-137,157-101s13.57,84-12.21,116-144.79,196-144.79,196c0,0,205-251,236-287s97.67-91.18,145-58c87,61-81.23,209.06-106,271-8,20-12,70,30,71,20.02.48,65-19,113-49,41.96-22.57,55-30,101-53,59.23-29.61,173.74-60.04,224-95,92-64,68.02-178.38-42-177-240,3-208.5,358.49,40,361,99,1,172-45,172-45" />
        </svg>
        <div className={styles.scroll_down}></div>
      </section>
      <section className={styles.about}>
        <h2>About me</h2>
        <img src='/img/icon.png' alt='icon'></img>
        <div>
          <div className={styles.name}>
            <h3>szne</h3>
            <a href='https://github.com/szne' target="_blank" rel="noopener noreferrer">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            </a>
            <a href='https://zenn.dev/szn' target="_blank" rel="noopener noreferrer">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>zenn</title><path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z" /></svg>
            </a>
            <a href='https://x.com/szneh' target="_blank" rel="noopener noreferrer">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
            </a>
          </div>
          <p>いろいろなことを少しずつやっています。</p>
          <p>I'm dabbling in various things and exploring a range of skills bit by bit.</p>
          <Link className='linkarrow' href='about'>もっと知りたい / Explore further</Link>
        </div>
      </section>
      <section className={styles.works}>
        <h2>Works</h2>
        <div>
          {works.slice(0, 3).map((post) => {
            const imagePath = post.frontmatter.image?.startsWith("/") ? post.frontmatter.image : ('/works/' + post.frontmatter.image);

            return (
              <article key={post.slug}>
                <p>{post.frontmatter.date}</p>
                <Link href={`/blog/${post.slug}`}>
                  {post.frontmatter.title}
                </Link>
                <p>
                  {post.frontmatter.description}
                </p>
                <Image
                  alt={post.frontmatter.title + "のサムネイル"}
                  src={imagePath}
                  height={imageSize('public' + imagePath).height}
                  width={imageSize('public' + imagePath).width}
                />
              </article>
            );
          })}
        </div>
      </section>
      <section className={styles.contacts}>
        <h2>Contact</h2>
        <p>なにか伝えたいことがありましたらXのDMまでお願いします。</p>
      </section>
    </>
  );
}

