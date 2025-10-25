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

interface EventsResponse {
  success: boolean;
  events: EventData[];
  total: number;
  hasMore: boolean;
}

export const useExploreEvents = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState<EventData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);

  const limit = 50;

  const fetchEvents = async (currentOffset: number = 0, append: boolean = false) => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `http://localhost:3000/event/getAllEvents?limit=${limit}&offset=${currentOffset}`
      );
      const result: EventsResponse = await response.json();

      if (response.ok && result.success) {
        if (append) {
          setEvents((prevEvents) => [...prevEvents, ...result.events]);
        } else {
          setEvents(result.events);
        }
        setHasMore(result.hasMore);
        setTotal(result.total);
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

  const loadMore = () => {
    const newOffset = offset + limit;
    setOffset(newOffset);
    fetchEvents(newOffset, true);
  };

  useEffect(() => {
    fetchEvents();

    const handleFocus = () => {
      fetchEvents(0, false);
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
    events,
    isLoading,
    error,
    hasMore,
    loadMore,
    handleEventClick,
    total,
  };
};
