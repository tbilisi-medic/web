import type { Metadata } from 'next';
import { Noto_Sans_Georgian } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import './globals.css';

const notoSansGeorgian = Noto_Sans_Georgian({
  variable: '--font-sans',
  subsets: ['georgian', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'თბილისი მედიკ',
  description: '',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${notoSansGeorgian.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
