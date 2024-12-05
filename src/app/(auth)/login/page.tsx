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
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputPassword } from '@/components/ui/input-password';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
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
    mode: 'onTouched',
  });

  const onSubmit = (data: loginType) => {
    console.log(data);
  };

  return (
    <main className="grow flex w-full flex-col justify-center items-center bg-transparent">
      <Card>
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
                        placeholder="eljokas@ejemplo.com"
                        autoComplete="email"
                      />
                    </FormControl>
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
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-row gap-x-8 items-end justify-between">
          <Link href="/forgot-password">
            <Label variant="link">¿Olvidaste tu contraseña?</Label>
          </Link>

          <Button onClick={() => form.handleSubmit(onSubmit)}>
            Iniciar Sesión
          </Button>
        </CardFooter>
      </Card>

      <Link href="/register" className='mt-5'>
        <Label variant="link">¿Aun no tienes una cuenta?</Label>
      </Link>
    </main>
  );
}
