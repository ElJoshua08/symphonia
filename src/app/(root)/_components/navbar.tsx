'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
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
    <nav className="sticky z-50 top-0 flex flex-row justify-between items-center w-full p-4 after:left-0 after:absolute after:content-[''] after:w-full after:h-full after:-z-10 after:backdrop-blur-xl after:[mask-image:linear-gradient(to_bottom,black_10%,transparent_70%)]">
      {/* Logo */}
      <header className='flex flex-row items-center justify-center'>
        <Image width={96} height={96} src="/logo.png" alt="Logo de Symphonia" className='size-12 object-contain' />
        <h1 className='text-2xl text-primary font-pacifico'>Symphonia</h1>
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
              <span className={`w-full h-1 rounded-full bg-primary absolute left-0 bottom-0 transition-transform duration-100 ${isActive ? "scale-100" : "scale-0"}`} />
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
