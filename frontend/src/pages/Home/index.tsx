import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EventSection from '../../components/EventSection';
import { eventCategories } from '../../data/mockEvents';
import * as S from './styles';

function HomePagePage() {
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
            <S.CTAButton>Explorar Eventos</S.CTAButton>
          </S.HeroContent>
        </S.HeroSection>

        {eventCategories.map((category) => (
          <EventSection
            key={category.title}
            title={category.title}
            events={category.events}
            showAll={category.showAll}
          />
        ))}
      </S.MainContent>
      <Footer />
    </S.PageContainer>
  );
}

export default HomePagePage;
