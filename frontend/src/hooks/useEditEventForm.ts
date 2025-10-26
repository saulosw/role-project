import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEventSchema, type CreateEventFormData } from '../schemas/event.schema';

interface Event {
  id: string;
  title: string;
  description: string;
  category: string;
  event_date: string;
  duration_hours: string;
  location: string;
}

export const useEditEventForm = (eventId: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<CreateEventFormData>({
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

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:3000/event/getEvent/${eventId}`);
        const result = await response.json();

        if (response.ok) {
          const event: Event = result.event;
          reset({
            name: event.title,
            description: event.description,
            category: event.category,
            date: event.event_date.split('T')[0],
            durationHours: event.duration_hours,
            location: event.location,
          });
        } else {
          setError('Erro ao carregar evento');
        }
      } catch (error) {
        setError('Erro ao conectar com o servidor');
      } finally {
        setIsFetching(false);
      }
    };

    fetchEvent();
  }, [eventId, reset]);

  const onSubmit = async (data: CreateEventFormData) => {
    setIsLoading(true);
    setError(null);

    const userId = localStorage.getItem('userId');

    if (!userId) {
      setError('Você precisa estar logado para editar um evento.');
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

      const response = await fetch(`http://localhost:3000/event/updateEvent/${eventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': userId,
        },
        body: JSON.stringify(eventData),
      });

      const result = await response.json();

      if (response.ok) {
        navigate(`/event/${eventId}`);
      } else {
        setError(result.message || 'Erro ao editar o evento. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao editar evento:', error);
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
    isFetching,
    error,
    watch,
  };
};
