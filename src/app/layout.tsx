import { Inter, Roboto_Mono } from 'next/font/google';
import { Metadata } from '@/types/types';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'To Do App',
    template: '%s To do',
  },
  description: 'Simple to do app for managing your day to day tasks',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${roboto_mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
