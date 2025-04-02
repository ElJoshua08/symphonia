'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputPassword } from '@/components/ui/input-password';
import { Label } from '@/components/ui/label';
import { loginSchema, loginType } from '@/lib/schemas';
import { login } from '@/services/auth.service';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function LoginPage() {
  const router = useRouter();

  const form = useForm<loginType>({
    resolver: zodResolver(loginSchema),
    values: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  async function onSubmit({ email, password }: loginType) {
    const { error } = await login(email, password);

    if (error) {
      toast.error(error);
      return;
    }

    router.push('/app');
  }

  return (
    <main className="flex w-full grow flex-row items-stretch justify-normal">
      {/* Decoration and phrase */}
      <section className="relative hidden w-full flex-col items-start justify-center overflow-y-clip bg-primary px-16 lg:flex">
        <div className="z-10 flex items-center justify-center bg-primary">
          <h1 className="mt-10 text-balance text-center font-header text-7xl text-secondary">
            En cualquier lugar, con cualquier persona
          </h1>
        </div>
        <div className="absolute right-0 top-0 -z-10 hidden h-[calc(100%+50px)] w-52 -translate-y-8 translate-x-1/4 rotate-3 bg-primary shadow-lg shadow-black dark:shadow-primary lg:block" />
      </section>
      <section className="relative flex w-full flex-col items-center justify-center overflow-y-clip">
        <Card className="z-50">
          <CardHeader>
            <CardTitle className="text-xl">Inicia Sesión</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="space-y-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="symphonia@startinnova.es"
                          autoComplete="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <FormControl>
                        <InputPassword
                          {...field}
                          placeholder="Min. 8 caracteres"
                          autoComplete="current-password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
          <CardFooter className="mt-4 flex flex-row items-end justify-between gap-x-8">
            <Link href="/forgot-password">
              <Label variant="link">¿Olvidaste tu contraseña?</Label>
            </Link>

            <Button
              loadOnClick
              onClick={() => form.handleSubmit(onSubmit)()}
            >
              Iniciar Sesión
            </Button>
          </CardFooter>
        </Card>

        <Link href="/register" className="mt-5">
          <Label variant="link">¿Aun no tienes una cuenta?</Label>
        </Link>
      </section>
    </main>
  );
}
