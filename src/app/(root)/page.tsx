import { Footer } from './_components/footer';
import { Hero } from './_components/hero';
import { Problem } from './_components/problem';
import { Solution } from './_components/solution';
import { WhyAreWeDifferent } from './_components/why-are-we-different';

export default function Home() {
  return (
    <main className="flex w-full grow flex-col items-center justify-start bg-transparent px-8 py-36">
      <Hero />

      <WhyAreWeDifferent />

      <Problem />

      <Solution />

      <Footer />
    </main>
  );
}
