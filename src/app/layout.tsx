import type { Metadata } from 'next';
import { Pacifico, Quicksand } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

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

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${pacifico.className} ${quicksand.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
