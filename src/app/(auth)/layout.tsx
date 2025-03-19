import { ThemeToggle } from '@/components/theme-toggle';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col justify-start items-center w-full h-dvh">
      {/* Content */}
      {children}

      <ThemeToggle className="fixed bottom-4 right-4" />
    </main>
  );
}
