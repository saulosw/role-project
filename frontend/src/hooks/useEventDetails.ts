import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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

export const useEventDetails = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEventData = async () => {
      if (!eventId) {
        setError('ID do evento não encontrado');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);

        const response = await fetch(`http://localhost:3000/event/getEvent/${eventId}`);
        const result = await response.json();

        if (response.ok && result.success) {
          setEventData(result.event);
          setError(null);
        } else {
          setError(result.message || 'Evento não encontrado');
        }
      } catch (error) {
        console.error('Erro ao buscar dados do evento:', error);
        setError('Erro ao conectar com o servidor. Tente novamente mais tarde.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchEventData();
  }, [eventId]);

  return {
    eventData,
    isLoading,
    error,
    eventId,
    navigate,
  };
};
