import { MainLayout } from '@/components/MainLayout'

import '@/libs/reset.css'
import './globals.scss'

import { body_font, display_font } from '@/libs/fonts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const siteName= 'szne';
const description = 'szne\'s portfolio';
const url = 'https://szn.jp';

export const metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    creator: '@szneh',
  },
  alternates: {
    canonical: url,
  },
}

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang='jp'>
      <body className={`${body_font.variable} ${display_font.variable}`}>
        <Header />
        <MainLayout>
          <main>{children}</main>
        </MainLayout>
        <Footer />
      </body>
    </html>
  )
}

export default Layout
