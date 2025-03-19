export default function SobreNostrosPage() {
  return (
    <main className="grow flex flex-col justify-start items-center w-full mt-24 px-96">
      <section className="flex flex-col items-start gap-y-10">
        <h1 className="text-5xl md:text-7xl font-bold font-header text-primary text-center">
          ¿Que es Symphonia?
        </h1>
        <p className="text-xl text-balance leading-relaxed text-start max-w-[65ch]">
          Symphonia, es un proyecto creado por alumnos del instituto IES Miguel
          Herrero Pereda, para el concurso &quot;StartInnova&quot;, Este trata
          sobre una aplicación tanto web como mobile para el aprendizaje y
          enseñanza de la musica.
        </p>
      </section>
    </main>
  );
}
