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
  const [isParticipating, setIsParticipating] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const checkParticipation = async () => {
    if (!eventId) return;

    const userId = localStorage.getItem('userId');
    if (!userId) return;

    try {
      const response = await fetch(`http://localhost:3000/event/checkParticipation/${eventId}`, {
        headers: {
          'x-user-id': userId
        }
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setIsParticipating(result.isParticipating);
      }
    } catch (error) {
      console.error('Erro ao verificar participação:', error);
    }
  };

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
        const event = result.event;
        if (event.organizer) {
          event.organizer_name = event.organizer.name;
          event.organizer_email = event.organizer.email;
        }
        setEventData(event);
        setError(null);

        const userId = localStorage.getItem('userId');
        if (userId && event.organizer_id === userId) {
          setIsOwner(true);
        }

        await checkParticipation();
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

  const joinEvent = async () => {
    if (!eventId) return;

    const userId = localStorage.getItem('userId');
    if (!userId) {
      navigate('/login');
      return;
    }

    try {
      setIsJoining(true);

      const response = await fetch(`http://localhost:3000/event/joinEvent/${eventId}`, {
        method: 'POST',
        headers: {
          'x-user-id': userId
        }
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setIsParticipating(true);
        setEventData(prev => prev ? { ...prev, attendee_count: result.participantCount } : null);
      } else {
        setError(result.message || 'Erro ao participar do evento');
      }
    } catch (error) {
      console.error('Erro ao participar do evento:', error);
      setError('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    } finally {
      setIsJoining(false);
    }
  };

  const leaveEvent = async () => {
    if (!eventId) return;

    const userId = localStorage.getItem('userId');
    if (!userId) {
      navigate('/login');
      return;
    }

    try {
      setIsJoining(true);

      const response = await fetch(`http://localhost:3000/event/leaveEvent/${eventId}`, {
        method: 'DELETE',
        headers: {
          'x-user-id': userId
        }
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setIsParticipating(false);
        setEventData(prev => prev ? { ...prev, attendee_count: result.participantCount } : null);
      } else {
        setError(result.message || 'Erro ao sair do evento');
      }
    } catch (error) {
      console.error('Erro ao sair do evento:', error);
      setError('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    } finally {
      setIsJoining(false);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, [eventId]);

  return {
    eventData,
    isLoading,
    error,
    eventId,
    navigate,
    isParticipating,
    isJoining,
    joinEvent,
    leaveEvent,
    isOwner,
  };
};
