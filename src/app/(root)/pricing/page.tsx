import { plans } from '@/lib/contants';
import { PlanCard } from '../_components/plan-card';

export default function PlanesPage() {
  return (
    <main className="grow flex flex-col items-center justify-start py-14 px-8 gap-y-20">
      <div className='relative'>
        <h1 className="text-2xl md:text-6xl font-bold text-center text-balance font-header text-foreground">
          Elige el plan que más se ajuste a ti
        </h1>
      </div>

      <div className="flex flex-row gap-x-8 flex-wrap gap-y-8 items-start justify-center">
        {plans.map((plan) => (
          <PlanCard
            key={plan.name}
            plan={plan}
          />
        ))}
      </div>
    </main>
  );
}
