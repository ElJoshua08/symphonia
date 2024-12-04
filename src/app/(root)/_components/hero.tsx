'use client';

import { useState } from 'react';

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

  const [word, setWord] = useState(words[0]);

  return (
    <div className="flex flex-row justify-between items-center w-full">
      {/* Slogan y Text */}
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-6xl font-bold text-left text-foreground/80">
          Con Symphonia a tu lado,
          potencia tu <span className="font-pacifico text-primary">{word}</span>
        </h1>
        <p className="text-2xl text-foreground/60 max-w-[90ch] text-balance mt-4">
          Descubre cómo Symphonia te ayuda a desbloquear todo tu potencial
          musical. Organiza, crea y colabora en tiempo real para llevar tus
          ideas al siguiente nivel, todo con el poder de la tecnología
          inteligente
        </p>
      </div>
    </div>
  );
};
