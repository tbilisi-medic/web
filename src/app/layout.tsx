import type { Metadata } from 'next';
import { Noto_Sans_Georgian } from 'next/font/google';
import './globals.css';

const notoSansGeorgian = Noto_Sans_Georgian({
  variable: '--font-sans',
  subsets: ['georgian', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'tbilisi-medic',
  description: 'tbilisi-medic',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body className={`${notoSansGeorgian.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
