import './globals.css';
import { Roboto } from 'next/font/google';
import React from 'react';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-roboto' });

export const metadata = {
  title: 'Module 6 · Pham Quoc Vinh (23521794)',
  description: 'Bài tập Next.js Module 6 cá nhân hóa cho Pham Quoc Vinh',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.className} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
