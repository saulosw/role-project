import { z } from 'zod';

export const createEventSchema = z.object({
  name: z
    .string()
    .min(1, 'Nome do evento é obrigatório')
    .min(3, 'Nome deve ter no mínimo 3 caracteres')
    .max(27, 'Nome deve ter no máximo 27 caracteres'),

  description: z
    .string()
    .min(1, 'Descrição é obrigatória')
    .min(10, 'Descrição deve ter no mínimo 10 caracteres')
    .max(500, 'Descrição deve ter no máximo 500 caracteres'),

  category: z
    .string()
    .min(1, 'Categoria é obrigatória'),

  date: z
    .string()
    .min(1, 'Data é obrigatória')
    .refine((dateStr) => {
      const selectedDate = new Date(dateStr);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, 'A data do evento não pode ser no passado')
    .refine((dateStr) => {
      const selectedDate = new Date(dateStr);
      const maxDate = new Date();
      maxDate.setFullYear(maxDate.getFullYear() + 5);
      return selectedDate <= maxDate;
    }, 'A data do evento não pode ser superior a 5 anos no futuro'),

  durationHours: z
    .string()
    .min(1, 'Duração é obrigatória')
    .refine((val) => {
      const num = parseFloat(val);
      return !isNaN(num) && num > 0 && num <= 168;
    }, 'Duração deve ser entre 0.5 e 168 horas (1 semana)'),

  location: z
    .string()
    .min(1, 'Localização é obrigatória')
    .min(5, 'Localização deve ter no mínimo 5 caracteres'),
});

export type CreateEventFormData = z.infer<typeof createEventSchema>;
