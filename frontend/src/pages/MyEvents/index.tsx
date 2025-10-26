import { Alert, CircularProgress } from '@mui/material';
import { MdArrowBack, MdLocationOn, MdCalendarToday, MdAccessTime, MdPeople, MdEventNote } from 'react-icons/md';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useMyEvents } from '../../hooks/useMyEvents';
import { getCategoryStyle } from '../../utils/categoryIcons';
import * as S from './styles';

function MyEventsPage() {
  const { events, isLoading, error, navigate } = useMyEvents();

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
                </S.EventContent>
              </S.EventCard>
              );
            })}
          </S.EventsGrid>
        )}
      </S.Content>
      <Footer />
    </S.PageContainer>
  );
}

export default MyEventsPage;
