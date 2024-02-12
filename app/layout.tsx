import { MainLayout } from '@/components/MainLayout'

import '@/libs/reset.css'
import './globals.scss'

import { body_font, display_font } from '@/libs/fonts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: {
    default: 'szne',
    template: '%s | szne',
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
