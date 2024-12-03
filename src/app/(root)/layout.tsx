import { ThemeToggle } from '@/components/theme-toggle';
import { Navbar } from './_components/navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col justify-start items-center w-full h-dvh">
      <Navbar />

      {/* Content */}
      {children}

      <footer className="flex flex-row p-4 justify-between items-center w-full">
        <ThemeToggle />
      </footer>
    </main>
  );
}
