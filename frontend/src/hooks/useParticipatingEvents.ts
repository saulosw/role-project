import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Event {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  event_date: string;
  duration_hours: number;
  current_participants: number;
  image_url?: string;
}

interface UseParticipatingEventsReturn {
  events: Event[];
  isLoading: boolean;
  error: string | null;
  navigate: ReturnType<typeof useNavigate>;
}

export const useParticipatingEvents = (): UseParticipatingEventsReturn => {
  const navigate = useNavigate();
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchParticipatingEvents = async () => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      navigate('/login');
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:3000/user/participating-events', {
        headers: {
          'x-user-id': userId,
        },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setEvents(result.events || []);
        setError(null);
      } else {
        setError(result.message || 'Erro ao carregar eventos');
      }
    } catch (error) {
      setError('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchParticipatingEvents();
  }, []);

  return { events, isLoading, error, navigate };
};
