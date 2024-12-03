import { Plan } from './interfaces';

export const plans = [
  {
    name: 'Hobby',
    description:
      'Un plan ideal para aquellos que se están iniciando o quieren conocernos',
    price: {
      base: 'Gratis',
    },
    features: [
      {
        included: true,
        description: 'Acceso a todas nuestras partituras',
      },
      {
        included: true,
        description: 'Espacio para 10 partituras personalizadas',
      },
      {
        included: true,
        description: 'Acceso al bot asistente de IA para dudas básicas',
      },
      {
        included: false,
        description: 'Acceso prioritario a nuestro soporte técnico',
      },
      {
        included: false,
        description: 'Colaboración en tiempo real con otros usuarios',
      },
      {
        included: false,
        description: 'Generación automática de partituras con IA',
      },
    ],
  },
  {
    name: 'Pro',
    description:
      'Si necesitas un uso avanzado de nuestra app, este plan es para ti',
    price: {
      base: 10,
      units: ['/mes'],
    },
    buy: 'Empieza con tu plan Pro',
    features: [
      {
        included: true,
        description: 'Acceso a todas nuestras partituras',
      },
      {
        included: true,
        description: 'Acceso prioritario a nuestro soporte técnico',
      },
      {
        included: true,
        description: 'Espacio ilimitado para partituras personalizadas',
      },
      {
        included: true,
        description: 'Colaboración en tiempo real con hasta 5 usuarios',
      },
      {
        included: true,
        description: 'Exportación de partituras en formato PDF y MIDI',
      },
      {
        included: true,
        description: 'Generación automática de partituras con IA',
      },
      {
        included: true,
        description: 'Bot de IA avanzado para recomendaciones musicales',
      },
      {
        included: false,
        description: 'Soporte técnico 24/7',
      },
    ],
  },
  {
    name: 'Banda',
    description:
      'Un plan ideal para esas pequeñas bandas que quieren potenciar su productividad',
    price: {
      base: 15,
      units: ['/miembro', '/mes'],
    },
    features: [
      {
        included: true,
        description: 'Acceso a todas nuestras partituras',
      },
      {
        included: true,
        description: 'Acceso prioritario a nuestro soporte técnico',
      },
      {
        included: true,
        description:
          'Colaboración en tiempo real con todos los miembros de la banda',
      },
      {
        included: true,
        description:
          'Espacio ilimitado para partituras y configuraciones personalizadas',
      },
      {
        included: true,
        description: 'Historial de cambios en las partituras colaborativas',
      },
      {
        included: true,
        description: 'Generación automática de partituras con IA',
      },
      {
        included: true,
        description:
          'Bot de IA avanzado para creación de playlists personalizadas',
      },
      {
        included: true,
        description:
          'Sincronización automática entre partituras y ejercicios de los miembros',
      },
      {
        included: true,
        description: 'Soporte técnico 24/7',
      },
    ],
    buy: 'Crece con nosotros',
  },
] as Plan[];
