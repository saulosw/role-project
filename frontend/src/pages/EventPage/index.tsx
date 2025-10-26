import { Alert, CircularProgress, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEventDetails } from '../../hooks/useEventDetails';
import { getCategoryStyle } from '../../utils/categoryIcons';
import * as S from './styles';

function EventPage() {
  const { eventData, isLoading, error, navigate, isParticipating, isJoining, joinEvent, leaveEvent, isOwner } = useEventDetails();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!eventData) return;

    setIsDeleting(true);
    const userId = localStorage.getItem('userId');

    try {
      const response = await fetch(`http://localhost:3000/event/deleteEvent/${eventData.id}`, {
        method: 'DELETE',
        headers: {
          'x-user-id': userId || '',
        },
      });

      if (response.ok) {
        navigate('/profile/my-events');
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

  if (isLoading) {
    return (
      <S.PageContainer>
        <Header />
        <S.LoadingContainer>
          <CircularProgress size={60} sx={{ color: '#ff6b35' }} />
          <S.LoadingText>Carregando evento...</S.LoadingText>
        </S.LoadingContainer>
        <Footer />
      </S.PageContainer>
    );
  }

  if (error || !eventData) {
    return (
      <S.PageContainer>
        <Header />
        <S.ErrorContainer>
          <Alert severity="error" sx={{ marginBottom: '1.5rem', borderRadius: '12px', maxWidth: '600px' }}>
            {error || 'Evento não encontrado'}
          </Alert>
          <Button variant="contained" onClick={() => navigate('/')}>
            Voltar para Home
          </Button>
        </S.ErrorContainer>
        <Footer />
      </S.PageContainer>
    );
  }

  const categoryStyle = getCategoryStyle(eventData.category);
  const formattedDate = new Date(eventData.event_date).toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const participantCount = eventData.attendee_count || 0;

  const organizerInitial = eventData.organizer_name?.charAt(0).toUpperCase() || 'O';

  return (
    <S.PageContainer>
      <Header />
      <S.Content>
        <S.EventContainer>
          <S.BackButton onClick={() => navigate('/')}>
            ← Voltar para eventos
          </S.BackButton>

          <S.MainContent>
            <S.LeftColumn>
              <S.HeroSection gradient={categoryStyle.gradient}>
                <S.CategoryIcon>{categoryStyle.icon}</S.CategoryIcon>
              </S.HeroSection>

              <S.EventCard>
                <S.EventHeader>
                  <S.EventTitle>{eventData.title}</S.EventTitle>
                  <S.CategoryBadge label={categoryStyle.name} />
                </S.EventHeader>

                <S.EventDescription>{eventData.description}</S.EventDescription>

                <S.InfoSection>
                  <S.SectionTitle>📋 Detalhes do Evento</S.SectionTitle>
                  <S.EventDetails>
                    <S.DetailItem>
                      <S.DetailIcon>📅</S.DetailIcon>
                      <S.DetailContent>
                        <S.DetailLabel>Data</S.DetailLabel>
                        <S.DetailValue>{formattedDate}</S.DetailValue>
                      </S.DetailContent>
                    </S.DetailItem>

                    <S.DetailItem>
                      <S.DetailIcon>⏱️</S.DetailIcon>
                      <S.DetailContent>
                        <S.DetailLabel>Duração</S.DetailLabel>
                        <S.DetailValue>{eventData.duration_hours}h</S.DetailValue>
                      </S.DetailContent>
                    </S.DetailItem>

                    <S.DetailItem>
                      <S.DetailIcon>📍</S.DetailIcon>
                      <S.DetailContent>
                        <S.DetailLabel>Local</S.DetailLabel>
                        <S.DetailValue>{eventData.location}</S.DetailValue>
                      </S.DetailContent>
                    </S.DetailItem>
                  </S.EventDetails>
                </S.InfoSection>

                <S.OrganizerInfo>
                  <S.OrganizerAvatar>{organizerInitial}</S.OrganizerAvatar>
                  <S.OrganizerDetails>
                    <S.OrganizerLabel>Organizador</S.OrganizerLabel>
                    <S.OrganizerName>{eventData.organizer_name || 'Organizador'}</S.OrganizerName>
                  </S.OrganizerDetails>
                </S.OrganizerInfo>
              </S.EventCard>
            </S.LeftColumn>

            <S.RightColumn>
              <S.SideCard>
                <S.ParticipantsSection>
                  <S.ParticipantCount>
                    <S.CountNumber>{participantCount}</S.CountNumber>
                    <S.CountLabel>
                      pessoas<br />
                      confirmadas
                    </S.CountLabel>
                  </S.ParticipantCount>
                </S.ParticipantsSection>

                <S.ActionButtons>
                  {isOwner ? (
                    <>
                      <S.PrimaryButton
                        variant="contained"
                        onClick={() => navigate(`/editar/${eventData.id}`)}
                      >
                        Editar Evento
                      </S.PrimaryButton>
                      <S.SecondaryButton
                        variant="outlined"
                        onClick={handleDeleteClick}
                        style={{ color: '#f44336', borderColor: '#f44336' }}
                      >
                        Deletar Evento
                      </S.SecondaryButton>
                    </>
                  ) : (
                    <>
                      {isParticipating ? (
                        <S.SecondaryButton
                          variant="outlined"
                          onClick={leaveEvent}
                          disabled={isJoining}
                          style={{ color: '#f44336', borderColor: '#f44336' }}
                        >
                          {isJoining ? 'Saindo...' : 'Sair do Evento'}
                        </S.SecondaryButton>
                      ) : (
                        <S.PrimaryButton
                          variant="contained"
                          onClick={joinEvent}
                          disabled={isJoining}
                        >
                          {isJoining ? 'Participando...' : 'Participar do Evento'}
                        </S.PrimaryButton>
                      )}
                      <S.SecondaryButton variant="outlined">
                        Compartilhar
                      </S.SecondaryButton>
                    </>
                  )}
                </S.ActionButtons>
              </S.SideCard>
            </S.RightColumn>
          </S.MainContent>
        </S.EventContainer>
      </S.Content>
      <Footer />

      <Dialog
        open={deleteDialogOpen}
        onClose={() => !isDeleting && setDeleteDialogOpen(false)}
      >
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
          Tem certeza que deseja deletar este evento? Esta ação não pode ser desfeita e todos os participantes serão removidos.
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

export default EventPage;
