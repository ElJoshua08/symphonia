'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

interface NavItem {
  name: string;
  href: string;
}

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const items: NavItem[] = [
    { name: 'Inicio', href: '/' },
    { name: 'Planes', href: '/pricing' },
    { name: 'Sobre nosotros', href: '/about-us' },
  ] as const;

  return (
    <nav className="z-50 md:sticky top-0 flex flex-row justify-between items-center w-full px-6 py-5 bg-background/50 backdrop-blur-lg overflow-hidden shrink-0">
      {/* Logo */}
      <header className="flex flex-row items-center justify-center font-header">
        <h1 className="text-2xl text-primary font-pacifico">Symphonia</h1>
      </header>

      {/* Menu */}
      <ul className="flex-row gap-4 hidden lg:flex">
        {items.map((item) => {
          const isActive = item.href === pathname;

          return (
            <li
              key={item.name}
              className="relative"
            >
              <a
                href={item.href}
                className={buttonVariants({
                  variant: isActive ? 'secondary' : 'ghost',
                  className: 'cursor-pointer',
                })}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>

      <NavbarDrawer
        items={items}
        className="lg:hidden"
      />

      {/* CTA Button */}
      <Button
        onClick={() => router.push('/login')}
        className="hidden lg:flex"
      >
        Empieza ya
      </Button>
    </nav>
  );
};

const NavbarDrawer = ({
  items,
  className,
}: {
  items: NavItem[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
      direction='top'
    >
      <DrawerTrigger className={className}>
        <HamburgerMenuIcon />
      </DrawerTrigger>
      <DrawerContent className="flex flex-col gap-y-4 top-0">
        {items.map((item) => {
          return (
            <li
              key={item.name}
              className="flex flex-row items-center justify-between gap-x-4 p-4"
            >
              <a
                href={item.href}
                className="text-xl font-header"
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </DrawerContent>
    </Drawer>
  );
};
