import "@/lib/reset.css"
import "./globals.scss"

import { body_font, display_font } from '@/lib/fonts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: {
    default: 'szne',
    template: '%s | szne',
  },
}

const Layout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="jp">
      <body className={`${body_font.variable} ${display_font.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default Layout;