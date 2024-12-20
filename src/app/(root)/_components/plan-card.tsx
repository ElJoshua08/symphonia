import { BorderBeam } from '@/components/ui/border-beam';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Plan } from '@/lib/interfaces';
import { CheckIcon, XIcon } from 'lucide-react';

export const PlanCard = ({ plan }: { plan: Plan }) => {
  return (
    <Card className="w-full sm:max-w-md shadow-lg hover:shadow-primary/40 transition-all shadow-primary/0 flex flex-col items-stretch justify-start relative group overflow-clip">
      <CardHeader className="space-y-6">
        <CardTitle className="text-lg text-foreground/60">
          {plan.name}
        </CardTitle>

        <h1 className="text-6xl font-bold">
          {typeof plan.price.base === 'string'
            ? plan.price.base
            : plan.price.base.toLocaleString('es-ES', {
                style: 'currency',
                currency: 'EUR',
                maximumFractionDigits: 0,
              })}
          <span className="text-base text-foreground/60">
            {plan.price.units}
          </span>
        </h1>
        <Separator />
        <CardDescription className="text-lg leading-tight !mt-2">
          {plan.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-start items-center grow">
        <ScrollArea className="h-72 pr-4">
          <ul className="flex flex-col gap-y-4 max-h-64">
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
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full hover:bg-primary hover:text-primary-foreground  "
        >
          {plan.buy || 'Empieza ahora'}
        </Button>
      </CardFooter>
      <BorderBeam
        delay={Math.random() * 2 + 5}
        duration={Math.random() * 6 + 3}
      />
    </Card>
  );
};
