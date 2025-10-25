import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEventSchema, type CreateEventFormData } from '../schemas/event.schema';

export const useCreateEventForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, watch } = useForm<CreateEventFormData>({
    resolver: zodResolver(createEventSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      description: '',
      category: '',
      date: '',
      durationHours: '',
      location: '',
    },
  });

  const onSubmit = async (data: CreateEventFormData) => {
    setIsLoading(true);
    setError(null);

    const userId = localStorage.getItem('userId');

    if (!userId) {
      setError('Você precisa estar logado para criar um evento.');
      setIsLoading(false);
      navigate('/login');
      return;
    }

    try {
      const eventData = {
        title: data.name,
        description: data.description,
        category: data.category,
        event_date: data.date,
        durationHours: data.durationHours,
        location: data.location,
      };

      const response = await fetch('http://localhost:3000/event/newEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': userId,
        },
        body: JSON.stringify(eventData),
      });

      const result = await response.json();

      if (response.ok) {
        navigate(`/event/${result.event.id}`);
      } else {
        setError(result.message || 'Erro ao criar o evento. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao criar evento:', error);
      setError('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isLoading,
    error,
    watch,
  };
};
