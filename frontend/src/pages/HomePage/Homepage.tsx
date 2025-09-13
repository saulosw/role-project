import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import EventSection from '../../components/EventSection/EventSection';
import { eventCategories } from '../../data/mockEvents';
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Descubra o melhor da sua cidade</h1>
            <p className="hero-subtitle">
              Encontre eventos únicos, conecte-se com pessoas e crie memórias inesquecíveis
            </p>
            <button className="cta-button">Explorar Eventos</button>
          </div>
        </section>
        
        {eventCategories.map((category) => (
          <EventSection
            key={category.title}
            title={category.title}
            events={category.events}
            showAll={category.showAll}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;