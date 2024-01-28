import Image from "next/image";
import Link from 'next/link';

import "../src/root.scss";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Link href="/">
                    <svg id="icon_s" data-name="icon_s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 501.3 436.13">
                        <path d="m29.77,432.43L1.74,395.11c-2.87-3.82-2.1-9.25,1.72-12.13C197.87,236.75,318.9,136.57,344.84,7.02c.89-4.42,4.97-7.46,9.46-6.96l47.3,5.24c4.61.51,8,4.55,7.69,9.18-1.53,23-6.82,90.49-20.17,166.48-7.8,44.4-16.95,83.77-27.42,118.01-1.66,5.44,2.29,11.01,7.98,11.18,3.98.11,7.97.12,11.94,0,31.23-.88,55.22-30.26,68.12-46.04.93-1.14,1.81-2.22,2.65-3.24,3.23-3.91,9.09-4.23,12.72-.7l33.58,32.66c3.22,3.13,3.51,8.21.67,11.69-.02.02-.04.05-.06.07-16.58,20.29-55.4,67.82-115.88,69.52-14.61.42-29.18-.42-43.34-2.09-3.62-.43-7.11,1.46-8.75,4.71-11.87,23.49-24.86,42.46-38.93,56.82-2.06,2.1-5.05,2.99-7.92,2.4l-42.59-8.79c-2.79-.58-5.12-2.49-6.23-5.11l-39.79-94.05c-2.26-5.34-9.02-6.99-13.5-3.3-39.83,32.87-86.01,68.48-140.45,109.44-3.83,2.88-9.27,2.11-12.14-1.72Zm220.49-150.17c9.1,3.72,21.71,8.47,36.49,13,4.53,1.39,9.32-1.14,10.78-5.65,6.51-20.16,12.57-42.66,18.12-67.29,1.96-8.68-8.88-14.31-14.87-7.73-3.1,3.41-6.27,6.82-9.5,10.24-13.5,14.28-27.98,28.54-43.63,43.07-4.63,4.3-3.23,11.96,2.62,14.35Z" />
                    </svg>
                </Link>
                <ul>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/works">Works</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;