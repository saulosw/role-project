import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
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
        
        <section className="featured-events">
          <h2>Eventos em Destaque</h2>
          <div className="events-grid">
            <div className="event-card">
              <h3>Show de Rock Local</h3>
              <p>Hoje às 20h</p>
            </div>
            <div className="event-card">
              <h3>Workshop de Arte</h3>
              <p>Amanhã às 14h</p>
            </div>
            <div className="event-card">
              <h3>Festival Gastronômico</h3>
              <p>Este fim de semana</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;