import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import LocalFont from 'next/font/local';
import './globals.css';

const fontHeader = LocalFont({
  src: [
    {
      path: '../fonts/FeelingPassionate.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-header',
});

const fontBody = Quicksand({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Symphonia',
  description: 'Conecta con la musica, conecta con el talento.',
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
        className={`${fontHeader.variable} ${fontBody.className}`}
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
