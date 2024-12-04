'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const items = [
    { name: 'Inicio', href: '/' },
    { name: 'Planes', href: '/planes' },
    { name: 'Sobre nosotros', href: '/sobre-nostros' },
  ];

  return (
    <nav className="flex flex-row justify-between items-center w-full p-4">
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">LOGO</h1>

      {/* Menu */}
      <ul className="flex flex-row gap-4">
        {items.map((item) => {
          const isActive = item.href === pathname;

          return (
            <li key={item.name}>
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
