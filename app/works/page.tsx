import Link from 'next/link'
import Image from 'next/image';
import imageSize from "image-size";

import getWorks from '@/libs/getWorks'

import styles from "./page.module.scss";

export const metadata = {
    title: 'My works',
};

export default async function Page() {
    const works = await getWorks
    return (
        <section className={styles.works}>
            <h1>Works</h1>
            <div className={styles.worklist}>
                {works.map((post) => {
                    const imagePath = post.frontmatter.image?.startsWith("/") ? post.frontmatter.image : ('/works/' + post.frontmatter.image);
                    return (
                        <article key={post.slug}>
                            <Link href={`/works/${post.slug}`}>
                                <div className={styles.imgwrap}>
                                    <Image
                                        alt={post.frontmatter.title + "のサムネイル"}
                                        src={imagePath}
                                        height={imageSize('public' + imagePath).height}
                                        width={imageSize('public' + imagePath).width}
                                    />
                                </div>
                                <div className={styles.postinfo}>
                                    <p>{post.frontmatter.title}</p>
                                    <span>{post.frontmatter.date}</span>
                                </div>
                            </Link>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};