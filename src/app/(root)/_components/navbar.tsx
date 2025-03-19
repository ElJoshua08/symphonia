'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const items = [
    { name: 'Inicio', href: '/' },
    { name: 'Planes', href: '/pricing' },
    { name: 'Sobre nosotros', href: '/sobre-nostros' },
  ];

  return (
    <nav className="z-50 md:sticky top-0 flex flex-row justify-between items-center w-full px-6 py-4 bg-background/50 backdrop-blur-lg overflow-hidden shrink-0">
      {/* Logo */}
      <header className="flex flex-row items-center justify-center font-header">
        <h1 className="text-2xl text-primary font-pacifico">Symphonia</h1>
      </header>

      {/* Menu */}
      <ul className="flex flex-row gap-4">
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

      {/* CTA Button */}
      <Button onClick={() => router.push('/login')}>Empieza ya</Button>
    </nav>
  );
};
