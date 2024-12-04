import { buttonVariants } from '@/components/ui/button';
import { Hero } from './_components/hero';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="grow flex w-full flex-col justify-start items-center bg-transparent py-36 px-8">
      <Hero />

      <Link
        className={buttonVariants({ variant: 'default', size: 'lg', className: "mt-20" })}
        href="/login"
      >
        Aprende más
      </Link>
    </main>
  );
}
