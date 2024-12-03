import { Plan } from '@/lib/interfaces';
import { PlanCard } from '../_components/plan-card';

export default function PlanesPage() {
  const plans = [
    {
      name: 'Hobby',
      description:
        'Un plan ideal para aquellos que se estan iniciando, o quieren conocernos',
      price: {
        base: 'Gratis',
      },
      features: [
        {
          included: true,
          description: 'Acceso a todas nuestras partituras',
        },
        {
          included: false,
          description: 'Acceso prioritario a nuestro soporte tecnico',
        },
      ],
    },
    {
      name: 'Pro',
      description:
        'Si necesitas un uso avanzado de nuestra app este plan es para ti',
      price: {
        base: 10,
        units: ['/mes'],
      },
    },
    {
      name: 'Banda',
      description:
        'Un plan ideal para esas pequeñas bandas que quieren potenciar su productividad',
      price: {
        base: 15,
        units: ['/miembro', '/mes'],
      },
    },
  ] as Plan[];

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
