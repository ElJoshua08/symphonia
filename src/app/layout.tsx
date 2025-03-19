import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import LocalFont from 'next/font/local';
import './globals.css';

const headerFont = LocalFont({
  src: [
    {
      path: '/public/fonts/FeelingPassionate.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-header',
});

const bodyFont = Quicksand({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Symphonia',
  description: '',
  icons: {
    icon: '/logo.png',
  },
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
      <body
        className={`${headerFont.className} ${bodyFont.className} antialiased`}
      >
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
