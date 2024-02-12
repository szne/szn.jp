import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href='/'>
          <svg
            id='icon_s'
            data-name='icon_s'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 501.3 436.13'
          >
            <path d='m18.13,400.48c33.43-45.45,85.95-154.98,126.84-215.78,15.69-23.32,104.32-152.97,148.24-160.91,43.92-7.94,124.57,23.24,124.57,23.24,0,0-39.42,25.59-43.56,34.98-4.13,9.39.28,112.78-41.09,163-41.37,50.22-194.98,158.47-194.98,158.47l56.92-38.99s69.7.22,86.7,0' />
          </svg>
        </Link>
        <ul>
          <li>
            <Link href='/about' scroll={false}>About</Link>
          </li>
          <li>
            <Link href='/works' scroll={false}>Works</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
