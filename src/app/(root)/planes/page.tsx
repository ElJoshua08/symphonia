import { plans } from '@/lib/contants';
import { PlanCard } from '../_components/plan-card';

export default function PlanesPage() {

  return (
    <main className="grow flex flex-col items-center justify-start py-16 px-8 gap-y-12">
      <h1 className="text-6xl font-bold">Lo que podemos ofrecerte</h1>

      <div className="flex flex-row gap-x-8">
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
