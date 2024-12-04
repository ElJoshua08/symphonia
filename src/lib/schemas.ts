import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({
      required_error: 'Este campo es requerido',
    })
    .email({
      message: 'Asegurate de poner un email válido',
    }),
  password: z
    .string({
      required_error: 'Este campo es requerido',
    })
    .min(8, {
      message: 'La contraseña debe tener al menos 8 caracteres',
    }),
  remember: z.boolean().optional(),
});

export type loginType = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z
      .string({
        required_error: 'Este campo es requerido',
      })
      .min(3, {
        message: 'El nombre debe tener al menos 3 caracteres',
      }),
    email: z
      .string({
        required_error: 'Este campo es requerido',
      })
      .email({
        message: 'Asegurate de poner un email válido',
      }),
    password: z
      .string({
        required_error: 'Este campo es requerido',
      })
      .min(8, {
        message: 'La contraseña debe tener al menos 8 caracteres',
      }),
    confirmPassword: z
      .string({
        required_error: 'Este campo es requerido',
      })
      .min(8, {
        message: 'La contraseña debe tener al menos 8 caracteres',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

export type registerType = z.infer<typeof registerSchema>;
