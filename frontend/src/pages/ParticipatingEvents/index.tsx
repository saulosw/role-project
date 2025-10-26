import { Alert, CircularProgress } from '@mui/material';
import { MdArrowBack, MdLocationOn, MdCalendarToday, MdAccessTime, MdPeople, MdEventAvailable } from 'react-icons/md';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useParticipatingEvents } from '../../hooks/useParticipatingEvents';
import { getCategoryStyle } from '../../utils/categoryIcons';
import * as S from './styles';

function ParticipatingEventsPage() {
  const { events, isLoading, error, navigate } = useParticipatingEvents();

  if (isLoading) {
    return (
      <S.PageContainer>
        <Header />
        <S.LoadingContainer>
          <CircularProgress size={60} sx={{ color: '#ff6b35' }} />
          <S.LoadingText>Carregando eventos...</S.LoadingText>
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
          <S.PageTitle>Eventos Participando</S.PageTitle>
          <S.PageSubtitle>
            Eventos dos quais você está participando ({events.length})
          </S.PageSubtitle>
        </S.PageHeader>

        {events.length === 0 ? (
          <S.EmptyContainer>
            <S.EmptyIcon>
              <MdEventAvailable />
            </S.EmptyIcon>
            <S.EmptyTitle>Você não está participando de nenhum evento</S.EmptyTitle>
            <S.EmptyText>
              Explore os eventos disponíveis e participe dos que mais combinam com você!
            </S.EmptyText>
            <S.ExploreButton onClick={() => navigate('/explorar')}>
              Explorar Eventos
            </S.ExploreButton>
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

export default ParticipatingEventsPage;
