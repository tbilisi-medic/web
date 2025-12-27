import type { Metadata } from 'next';
import { Noto_Sans_Georgian } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/layout';

const notoSansGeorgian = Noto_Sans_Georgian({
  variable: '--font-sans',
  subsets: ['georgian', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'თბილისი მედიკ',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body className={`${notoSansGeorgian.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
