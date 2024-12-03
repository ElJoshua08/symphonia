import type { Metadata } from 'next';
import { Pacifico, Quicksand } from 'next/font/google';
import './globals.css';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-quicksand',
});

export const metadata: Metadata = {
  title: 'Symphonia',
  description: 'Descripcion a poner',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pacifico.variable} ${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
