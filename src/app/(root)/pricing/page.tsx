"use client"

import { plans } from '@/lib/contants';
import { PlanCard } from '../_components/plan-card';

export default function PlanesPage() {
  return (
    <main className="flex grow flex-col items-center justify-start gap-y-12 px-8 py-14 md:gap-y-20">
      <div className="relative">
        <h1 className="text-balance text-center font-header text-5xl font-bold text-foreground md:text-6xl">
          Elige el plan que más se ajuste a ti
        </h1>
      </div>

      <div className="flex flex-row flex-wrap items-start justify-center gap-x-16 gap-y-8">
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </main>
  );
}
