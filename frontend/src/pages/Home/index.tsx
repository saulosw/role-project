import { Alert, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CategorySection from '../../components/CategorySection';
import { useHomeEvents } from '../../hooks/useHomeEvents';
import * as S from './styles';

function HomePagePage() {
  const navigate = useNavigate();
  const { eventsByCategory, isLoading, error, handleEventClick } = useHomeEvents();

  const handleExploreClick = () => {
    navigate('/explorar');
  };

  return (
    <S.PageContainer>
      <Header />
      <S.MainContent>
        <S.HeroSection>
          <S.HeroContent>
            <S.HeroTitle>Descubra o melhor da sua cidade</S.HeroTitle>
            <S.HeroSubtitle>
              Encontre eventos únicos, conecte-se com pessoas e crie memórias inesquecíveis
            </S.HeroSubtitle>
            <S.CTAButton onClick={handleExploreClick}>Explorar Eventos</S.CTAButton>
          </S.HeroContent>
        </S.HeroSection>

        <S.EventsSection>
          {error && (
            <Alert severity="error" sx={{ marginBottom: '2rem', borderRadius: '12px' }}>
              {error}
            </Alert>
          )}

          {isLoading ? (
            <S.LoadingContainer>
              <CircularProgress size={60} sx={{ color: '#ff6b35' }} />
              <S.LoadingText>Carregando eventos...</S.LoadingText>
            </S.LoadingContainer>
          ) : Object.keys(eventsByCategory).length === 0 ? (
            <S.EmptyState>
              <S.EmptyIcon>🎉</S.EmptyIcon>
              <S.EmptyTitle>Nenhum evento encontrado</S.EmptyTitle>
              <S.EmptyText>Seja o primeiro a criar um evento!</S.EmptyText>
            </S.EmptyState>
          ) : (
            Object.entries(eventsByCategory).map(([category, events]) => (
              <CategorySection
                key={category}
                category={category}
                events={events}
                onEventClick={handleEventClick}
              />
            ))
          )}
        </S.EventsSection>
      </S.MainContent>
      <Footer />
    </S.PageContainer>
  );
}

export default HomePagePage;
