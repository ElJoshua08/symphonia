import { ThemeToggle } from '@/components/theme-toggle';
import { Navbar } from './_components/navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col justify-start items-center w-full h-dvh">
      {/*  Decoration */}
      <Navbar />

      {/* Content */}
      {children}

      <ThemeToggle className="fixed bottom-4 left-4" />
    </main>
  );
}
