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
import { registerSchema, registerType } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm, UseFormReturn } from 'react-hook-form';

export default function RegisterPage() {
  const form = useForm<registerType>({
    resolver: zodResolver(registerSchema),
    values: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: registerType) => {
    console.log(data);
  };

  return (
    <main className="flex w-full grow flex-row items-stretch justify-normal">
      {form.formState.isSubmitSuccessful && (
        <SuccessCard
          name={form.getValues().name}
          email={form.getValues().email}
        />
      )}

      <section className="relative flex w-full flex-col items-center justify-center overflow-y-clip">
        <Card className="z-50">
          <CardHeader>
            <CardTitle className="text-xl">Registrate en Symphonia</CardTitle>
          </CardHeader>
          <CardContent>
            <RegisterForm form={form} />
          </CardContent>
          <CardFooter className="mt-4 flex flex-row items-end justify-between gap-x-8">
            <Button
              onClick={() => form.handleSubmit(onSubmit)()}
              className="w-full"
            >
              Registrarse
            </Button>
          </CardFooter>
        </Card>

        <Link href="/register" className="mt-5">
          <Label variant="link">¿Ya tienes una cuenta?</Label>
        </Link>
      </section>

      {/* Decoration and phrase */}
      <section className="relative hidden w-full flex-col items-start justify-center overflow-y-clip bg-primary px-16 lg:flex">
        <div className="absolute left-0 top-0 -z-10 hidden h-[calc(100%+50px)] w-52 -translate-x-1/4 -translate-y-8 -rotate-3 bg-primary shadow-lg shadow-black dark:shadow-primary lg:block" />
        <div className="z-10 flex items-center justify-center bg-primary">
          <h1 className="mt-10 text-balance text-center font-header text-7xl text-secondary">
            En cualquier lugar, En cualquier momento.
          </h1>
        </div>
      </section>
    </main>
  );
}

const RegisterForm = ({ form }: { form: UseFormReturn<registerType> }) => {
  return (
    <Form {...form}>
      <form className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Startinnova"
                  autoComplete="name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <div className="flex flex-row gap-x-4">
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

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirma tu contraseña</FormLabel>
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
        </div>
      </form>
    </Form>
  );
};

const SuccessCard = ({ name, email }: { name: string; email: string }) => {
  return (
    <>
      {/* Overlay */}
      <div className="absolute left-0 top-0 -z-10 hidden h-full w-full bg-black/50" />
      <Card className="z-50">
        <CardHeader>
          <CardTitle className="text-xl">
            Hola {name}, Bienvenido a Symphonia!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Para completar tu registro, por favor haz click en el enlace que ha
            sido enviado a tu email. ({email})
          </p>
        </CardContent>
      </Card>
    </>
  );
};
