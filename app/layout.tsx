import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import "../src/reset.css";
import "./globals.scss";

import Header from '../components/Header';
import Footer from '../components/Footer';

const noto = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'szne',
    template: '%s | szne',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={noto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
