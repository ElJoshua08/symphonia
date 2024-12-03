import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Plan } from '@/lib/interfaces';
import { CheckIcon, XIcon } from 'lucide-react';

export const PlanCard = ({ plan }: { plan: Plan }) => {
  return (
    <Card className="max-w-md shadow-lg hover:scale-[104%] hover:shadow-primary/40 transition-all shadow-primary/0">
      <CardHeader className="space-y-6">
        <CardTitle className="text-lg text-foreground/60">
          {plan.name}
        </CardTitle>

        <h1 className="text-6xl font-bold">
          {plan.price.base}
          <span className="text-base text-foreground/60">{plan.price.units}</span>
        </h1>
        <Separator />
        <CardDescription className='text-lg leading-tight !mt-2'>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-y-4">
          {plan.features &&
            plan.features.map((feature) => (
              <li
                key={feature.description}
                className="flex flex-row gap-x-2 items-center justify-start"
              >
                {feature.included ? (
                  <span className="rounded-full bg-primary size-6 flex items-center justify-center shrink-0">
                    <CheckIcon
                      size={16}
                      strokeWidth={4}
                      className="text-white"
                    />
                  </span>
                ) : (
                  <span className="rounded-full bg-gray-300 dark:bg-gray-800 size-6 flex items-center justify-center shrink-0">
                    <XIcon
                      size={16}
                      strokeWidth={4}
                      className="text-white"
                    />
                  </span>
                )}
                <span className="text-foreground/80">
                  {feature.description}
                </span>
              </li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
};
