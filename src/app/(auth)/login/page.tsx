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
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function LoginPage() {
  const form = useForm<loginType>({
    resolver: zodResolver(loginSchema),
    values: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: loginType) => {
    console.log(data);
  };

  return (
    <main className="grow flex w-full flex-row justify-normal items-stretch">
      {/* Decoration and phrase */}
      <section className="w-full bg-primary hidden lg:flex justify-center items-start flex-col px-16  relative overflow-y-clip">
        <div className="flex justify-center items-center z-10 bg-primary">
          <h1 className="text-secondary text-7xl text-center text-balance mt-10 font-header">
            En cualquier lugar, con cualquier persona
          </h1>
        </div>
        <div className="absolute top-0 right-0 h-[calc(100%+50px)] w-52 rotate-3 bg-primary shadow-lg shadow-black dark:shadow-primary translate-x-1/4 -translate-y-8 hidden lg:block -z-10" />
      </section>
      <section className="flex flex-col justify-center items-center w-full relative overflow-y-clip">
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
                          placeholder="symphonia@startinnova.com"
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
          <CardFooter className="flex flex-row gap-x-8 items-end justify-between mt-4">
            <Link href="/forgot-password">
              <Label variant="link">¿Olvidaste tu contraseña?</Label>
            </Link>

            <Button onClick={() => form.handleSubmit(onSubmit)()}>
              Iniciar Sesión
            </Button>
          </CardFooter>
        </Card>

        <Link
          href="/register"
          className="mt-5"
        >
          <Label variant="link">¿Aun no tienes una cuenta?</Label>
        </Link>
      </section>
    </main>
  );
}
