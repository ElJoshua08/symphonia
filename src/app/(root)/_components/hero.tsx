'use client';

import { FlipWords } from '@/components/ui/flip-words';
import Image from 'next/image';

export const Hero = () => {
  const words = [
    'creatividad',
    'talento',
    'pasión',
    'ideas',
    'visión',
    'proyectos',
    'potencial',
    'expresión',
    'composición',
    'estilo',
    'innovación',
  ];

  return (
    <section className="flex h-full w-full flex-col md:flex-row items-center justify-between overflow-clip">
      {/* Slogan & Text */}
      <div className="flex flex-col items-start justify-center md:justify-start gap-y-4">
        <h1 className="px-4 text-center font-header text-4xl font-bold leading-normal text-foreground md:text-left md:text-7xl">
          Con Symphonia a tu lado, <br className="" /> potencia tu{' '}
          <FlipWords words={words} spanClassName="text-primary" />
        </h1>
        <p className="mt-4 max-w-[75ch] text-balance text-3xl text-foreground/90">
          Descubre cómo Symphonia te ayuda a desbloquear todo tu potencial
          musical. Organiza, crea y colabora en tiempo real para llevar tus
          ideas al siguiente nivel, todo con el poder de la tecnología
          inteligente
        </p>
      </div>

      {/* Ilustration abt something */}
      <div>
        <Image
          src="/images/sheets.png"
          alt="Sheets Ilustration"
          width={1000}
          height={1000}
          className="relative"
        />
      </div>
    </section>
  );
};
