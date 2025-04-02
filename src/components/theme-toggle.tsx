'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export const ThemeToggle = ({ className }: { className?: string }) => {
  const { setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className={className}
      onClick={() => setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))}
    >
      <Sun className="block h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:hidden dark:-rotate-90 dark:scale-0" />
      <Moon className="hidden h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:block dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
