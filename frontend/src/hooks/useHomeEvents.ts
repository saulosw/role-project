import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface EventData {
  id: string;
  title: string;
  description: string;
  category: string;
  event_date: string;
  duration_hours: number;
  location: string;
  organizer_id: string;
  organizer_name?: string;
  organizer_email?: string;
  attendee_count?: number;
  created_at?: string;
  updated_at?: string;
}

interface EventsByCategoryResponse {
  success: boolean;
  eventsByCategory: Record<string, EventData[]>;
}

export const useHomeEvents = () => {
  const navigate = useNavigate();
  const [eventsByCategory, setEventsByCategory] = useState<Record<string, EventData[]>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEventsByCategory = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        'http://localhost:3000/event/getEventsByCategory?limit=5'
      );
      const result: EventsByCategoryResponse = await response.json();

      if (response.ok && result.success) {
        setEventsByCategory(result.eventsByCategory);
        setError(null);
      } else {
        setError('Erro ao carregar eventos');
      }
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
      setError('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEventsByCategory();

    const handleFocus = () => {
      fetchEventsByCategory();
    };

    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  const handleEventClick = (eventId: string) => {
    navigate(`/event/${eventId}`);
  };

  return {
    eventsByCategory,
    isLoading,
    error,
    handleEventClick,
  };
};
