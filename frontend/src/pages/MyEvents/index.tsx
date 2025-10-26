import { Alert, CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useState } from 'react';
import { MdArrowBack, MdLocationOn, MdCalendarToday, MdAccessTime, MdPeople, MdEventNote, MdEdit, MdDelete } from 'react-icons/md';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useMyEvents } from '../../hooks/useMyEvents';
import { getCategoryStyle } from '../../utils/categoryIcons';
import * as S from './styles';

function MyEventsPage() {
  const { events, isLoading, error, navigate } = useMyEvents();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = (e: React.MouseEvent, eventId: string) => {
    e.stopPropagation();
    setEventToDelete(eventId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!eventToDelete) return;

    setIsDeleting(true);
    const userId = localStorage.getItem('userId');

    try {
      const response = await fetch(`http://localhost:3000/event/deleteEvent/${eventToDelete}`, {
        method: 'DELETE',
        headers: {
          'x-user-id': userId || '',
        },
      });

      if (response.ok) {
        setDeleteDialogOpen(false);
        window.location.reload();
      } else {
        const result = await response.json();
        alert(result.message || 'Erro ao deletar evento');
      }
    } catch (error) {
      alert('Erro ao conectar com o servidor');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEditClick = (e: React.MouseEvent, eventId: string) => {
    e.stopPropagation();
    navigate(`/editar/${eventId}`);
  };

  if (isLoading) {
    return (
      <S.PageContainer>
        <Header />
        <S.LoadingContainer>
          <CircularProgress size={60} sx={{ color: '#ff6b35' }} />
          <S.LoadingText>Carregando seus eventos...</S.LoadingText>
        </S.LoadingContainer>
        <Footer />
      </S.PageContainer>
    );
  }

  if (error) {
    return (
      <S.PageContainer>
        <Header />
        <S.ErrorContainer>
          <Alert severity="error" sx={{ marginBottom: '1.5rem' }}>
            {error}
          </Alert>
          <S.BackButton startIcon={<MdArrowBack />} onClick={() => navigate('/profile')}>
            Voltar ao Perfil
          </S.BackButton>
        </S.ErrorContainer>
        <Footer />
      </S.PageContainer>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <S.PageContainer>
      <Header />
      <S.Content>
        <S.PageHeader>
          <S.BackButton startIcon={<MdArrowBack />} onClick={() => navigate('/profile')}>
            Voltar ao Perfil
          </S.BackButton>
          <S.PageTitle>Meus Eventos</S.PageTitle>
          <S.PageSubtitle>
            Eventos que você criou ({events.length})
          </S.PageSubtitle>
        </S.PageHeader>

        {events.length === 0 ? (
          <S.EmptyContainer>
            <S.EmptyIcon>
              <MdEventNote />
            </S.EmptyIcon>
            <S.EmptyTitle>Nenhum evento criado ainda</S.EmptyTitle>
            <S.EmptyText>
              Você ainda não criou nenhum evento. Que tal criar o primeiro?
            </S.EmptyText>
            <S.CreateEventButton onClick={() => navigate('/criar')}>
              Criar Evento
            </S.CreateEventButton>
          </S.EmptyContainer>
        ) : (
          <S.EventsGrid>
            {events.map((event) => {
              const categoryStyle = getCategoryStyle(event.category);
              return (
              <S.EventCard key={event.id} onClick={() => navigate(`/event/${event.id}`)}>
                <S.EventImage gradient={categoryStyle.gradient}>
                  <span style={{ fontSize: '3rem' }}>{categoryStyle.icon}</span>
                </S.EventImage>
                <S.EventContent>
                  <S.EventTitle>{event.title}</S.EventTitle>
                  <S.EventDescription>{event.description}</S.EventDescription>
                  <S.EventInfo>
                    <S.EventInfoRow>
                      <S.EventInfoIcon>
                        <MdLocationOn />
                      </S.EventInfoIcon>
                      {event.location}
                    </S.EventInfoRow>
                    <S.EventInfoRow>
                      <S.EventInfoIcon>
                        <MdCalendarToday />
                      </S.EventInfoIcon>
                      {formatDate(event.event_date)}
                    </S.EventInfoRow>
                    <S.EventInfoRow>
                      <S.EventInfoIcon>
                        <MdAccessTime />
                      </S.EventInfoIcon>
                      {event.duration_hours}h de duração
                    </S.EventInfoRow>
                    <S.EventInfoRow>
                      <S.EventInfoIcon>
                        <MdPeople />
                      </S.EventInfoIcon>
                      {event.current_participants} participantes
                    </S.EventInfoRow>
                  </S.EventInfo>
                  <S.EventActions>
                    <S.EditButton
                      startIcon={<MdEdit />}
                      onClick={(e) => handleEditClick(e, event.id)}
                    >
                      Editar
                    </S.EditButton>
                    <S.DeleteButton
                      startIcon={<MdDelete />}
                      onClick={(e) => handleDeleteClick(e, event.id)}
                    >
                      Deletar
                    </S.DeleteButton>
                  </S.EventActions>
                </S.EventContent>
              </S.EventCard>
              );
            })}
          </S.EventsGrid>
        )}
      </S.Content>
      <Footer />

      <Dialog
        open={deleteDialogOpen}
        onClose={() => !isDeleting && setDeleteDialogOpen(false)}
      >
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
          Tem certeza que deseja deletar este evento? Esta ação não pode ser desfeita.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} disabled={isDeleting}>
            Cancelar
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" disabled={isDeleting}>
            {isDeleting ? 'Deletando...' : 'Deletar'}
          </Button>
        </DialogActions>
      </Dialog>
    </S.PageContainer>
  );
}

export default MyEventsPage;
