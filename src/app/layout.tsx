import type { Metadata } from 'next';
import './globals.css';

import { fontPrimary, fontSecondary } from '@utils/fonts';

export const metadata: Metadata = {
  title: 'Quang Tran Portfolio',
  description: 'Quang Tran - Frontend developer - ReactJS/NextJS - Typescript',
  icons: [
    {
      url: '/images/favicon.svg',
      href: '/images/favicon.svg',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPrimary.variable} ${fontSecondary.variable} font-primary bg-gray-50 flex items-center justify-center`}>
        {children}
      </body>
    </html>
  );
}
