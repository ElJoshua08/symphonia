import { ThemeToggle } from '@/components/theme-toggle';
import { Navbar } from './_components/navbar';
import FlickeringGrid from '@/components/ui/flickering-grid';

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
      <FlickeringGrid
        className="fixed top-0 left-0 w-full h-full -z-10"
        color="#47198e"
        squareSize={12}
        gridGap={2}
        maxOpacity={0.18}
        flickerChance={0.15}
      />

      <Navbar />

      {/* Content */}
      {children}

      <ThemeToggle className="fixed bottom-4 left-4" />
    </main>
  );
}
