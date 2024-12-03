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
      <div className="absolute blur-[120px] size-[250px] rounded-full bg-primary/50 top-[200px] left-[230px]" />
      <div className="absolute h-full w-full bg-[radial-gradient(#b9caed_1px,transparent_1px)] dark:bg-[radial-gradient(#121e36_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <Navbar />

      {/* Content */}
      {children}

      <footer className="flex flex-row p-4 justify-between items-center w-full">
        <ThemeToggle />
      </footer>
    </main>
  );
}
