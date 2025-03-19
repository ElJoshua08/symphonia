'use client';

import { FlipWords } from '@/components/ui/flip-words';

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
    <section className="flex flex-row justify-between items-center w-full h-full overflow-clip">
      {/* Slogan & Text */}
      <div className="flex flex-col items-start justify-start gap-y-4">
        <h1 className="text-7xl font-bold text-left text-foreground font-header">
          Con Symphonia a tu lado, potencia tu{' '}
          <FlipWords
            words={words}
            spanClassName="text-primary"
          />
        </h1>
        <p className="text-3xl text-foreground/90 max-w-[75ch] text-balance mt-4">
          Descubre cómo Symphonia te ayuda a desbloquear todo tu potencial
          musical. Organiza, crea y colabora en tiempo real para llevar tus
          ideas al siguiente nivel, todo con el poder de la tecnología
          inteligente
        </p>
      </div>

      {/* Ilustration abt something */}
      <div>

      </div>

    </section>
  );
};
