import Image from "next/image";
import Link from 'next/link';

import "../src/root.scss";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Link href="/">
                    <Image
                        src="/img/icon_s.svg"
                        alt="Icon"
                        width={30}
                        height={30}
                        className={styles.icon_s}
                    /></Link>
                <ul>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/works">Works</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;