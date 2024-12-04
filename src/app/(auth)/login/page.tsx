'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { loginSchema, loginType } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function LoginPage() {
  const form = useForm<loginType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: loginType) => {
    console.log(data);
  };

  return (
    <main className="grow flex w-full flex-col justify-center items-center bg-transparent">
      <Card>
        <CardHeader>
          <CardTitle>Inicia Sesión</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Email"
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
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Contraseña"
                        autoComplete="current-password"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Link href="/forgot-password">
            <Label>¿Olvidaste tu contraseña?</Label>
          </Link>

          <Button onClick={() => form.handleSubmit(onSubmit)}>
            Iniciar Sesión
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
