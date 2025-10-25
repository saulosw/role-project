import { Alert, CircularProgress } from '@mui/material';
import { IoCalendarOutline, IoTimeOutline, IoLocationOutline, IoPeopleOutline } from 'react-icons/io5';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useExploreEvents } from '../../hooks/useExploreEvents';
import { getCategoryStyle } from '../../utils/categoryIcons';
import * as S from './styles';

function ExplorePage() {
  const { events, isLoading, error, hasMore, loadMore, handleEventClick, total } = useExploreEvents();

  return (
    <S.PageContainer>
      <Header />
      <S.Content>
        <S.HeaderSection>
          <S.Title>Explore Eventos</S.Title>
          <S.Subtitle>
            {total > 0 ? `Descubra ${total} ${total === 1 ? 'evento incrível' : 'eventos incríveis'} acontecendo` : 'Carregando eventos...'}
          </S.Subtitle>
        </S.HeaderSection>

        {error && (
          <Alert severity="error" sx={{ marginBottom: '2rem', borderRadius: '12px', maxWidth: '900px', margin: '0 auto 2rem' }}>
            {error}
          </Alert>
        )}

        {isLoading && events.length === 0 ? (
          <S.LoadingContainer>
            <CircularProgress size={60} sx={{ color: '#ff6b35' }} />
            <S.LoadingText>Carregando eventos...</S.LoadingText>
          </S.LoadingContainer>
        ) : events.length === 0 ? (
          <S.EmptyState>
            <S.EmptyIcon>🎉</S.EmptyIcon>
            <S.EmptyTitle>Nenhum evento encontrado</S.EmptyTitle>
            <S.EmptyText>Seja o primeiro a criar um evento!</S.EmptyText>
          </S.EmptyState>
        ) : (
          <>
            <S.EventsGrid>
              {events.map((event) => {
                const categoryStyle = getCategoryStyle(event.category);
                const formattedDate = new Date(event.event_date).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                });
                const formattedTime = `${event.duration_hours}h`;

                return (
                  <S.EventCard key={event.id} onClick={() => handleEventClick(event.id)}>
                    <S.CardImagePlaceholder gradient={categoryStyle.gradient}>
                      <S.CategoryIcon>{categoryStyle.icon}</S.CategoryIcon>
                      <S.CategoryBadge>{categoryStyle.name}</S.CategoryBadge>
                    </S.CardImagePlaceholder>

                    <S.CardContent>
                      <S.EventTitle>{event.title}</S.EventTitle>
                      <S.EventDescription>{event.description}</S.EventDescription>

                      <S.EventDetails>
                        <S.DetailItem>
                          <IoCalendarOutline className="detail-icon" />
                          <span>{formattedDate}</span>
                        </S.DetailItem>

                        <S.DetailItem>
                          <IoTimeOutline className="detail-icon" />
                          <span>{formattedTime}</span>
                        </S.DetailItem>

                        <S.DetailItem>
                          <IoLocationOutline className="detail-icon" />
                          <span>{event.location}</span>
                        </S.DetailItem>

                        <S.DetailItem>
                          <IoPeopleOutline className="detail-icon" />
                          <span>{event.attendee_count || 0} {(event.attendee_count || 0) === 1 ? 'participante' : 'participantes'}</span>
                        </S.DetailItem>
                      </S.EventDetails>

                      <S.CTAButton>Ver Detalhes</S.CTAButton>
                    </S.CardContent>
                  </S.EventCard>
                );
              })}
            </S.EventsGrid>

            {hasMore && (
              <S.LoadMoreContainer>
                <S.LoadMoreButton onClick={loadMore} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <CircularProgress size={20} sx={{ color: 'white', marginRight: '0.5rem' }} />
                      Carregando...
                    </>
                  ) : (
                    'Carregar mais eventos'
                  )}
                </S.LoadMoreButton>
              </S.LoadMoreContainer>
            )}
          </>
        )}
      </S.Content>
      <Footer />
    </S.PageContainer>
  );
}

export default ExplorePage;
