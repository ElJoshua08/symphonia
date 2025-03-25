export const WhyAreWeDifferent = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-y-clip bg-primary px-16 lg:flex">
      <div className="absolute left-0 top-0 -z-10 hidden h-[calc(100%+50px)] w-52 -translate-x-1/4 -translate-y-8 -rotate-3 bg-primary shadow-lg shadow-black dark:shadow-primary lg:block" />
      <div className="z-10 flex items-center justify-center bg-primary">
        <h1 className="mt-10 text-balance text-center font-header text-7xl text-secondary">
          Por qué somos diferentes
        </h1>
      </div>
    </section>
  );
}