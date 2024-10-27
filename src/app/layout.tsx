import { Roboto_Mono } from 'next/font/google';
import { Metadata } from '@/types/types';
import './globals.css';


const roboto = Roboto_Mono({
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
        className={`${roboto.variable} bg-slate-800 text-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}
