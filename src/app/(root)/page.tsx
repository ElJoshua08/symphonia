import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Problem } from "./_components/problem";
import { Solution } from "./_components/solution";

export default function Home() {
  return (
    <main className="grow flex w-full flex-col justify-start items-center bg-transparent py-36 px-8">

      <Hero />

      <Problem />

      <Solution />

      <Footer />
    </main>
  );
}
