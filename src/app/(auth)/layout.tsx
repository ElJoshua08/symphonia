import { ThemeToggle } from '@/components/theme-toggle';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col justify-start items-center w-full h-dvh">
      {/*  Decoration */}
      <div className="fixed blur-[120px] size-[250px] rounded-full bg-primary/50 top-[200px] left-[230px]" />
      <div className="fixed blur-[120px] size-[250px] rounded-full bg-primary/50 bottom-[200px] right-[230px]" />
      <div className="fixed h-full w-full bg-[radial-gradient(#b9caed_1px,transparent_1px)] dark:bg-[radial-gradient(#121e36_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      {/* Content */}
      {children}

      <ThemeToggle className="fixed bottom-4 left-4" />
    </main>
  );
}
