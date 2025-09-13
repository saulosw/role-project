import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Rolê</h3>
            <p className="footer-description">
              Conectando pessoas através de experiências únicas na sua cidade.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Navegação</h4>
            <ul className="footer-links">
              <li><a href="/explorar">Explorar Eventos</a></li>
              <li><a href="/criar">Criar Evento</a></li>
              <li><a href="/sobre">Sobre Nós</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Suporte</h4>
            <ul className="footer-links">
              <li><a href="/ajuda">Central de Ajuda</a></li>
              <li><a href="/contato">Contato</a></li>
              <li><a href="/termos">Termos de Uso</a></li>
              <li><a href="/privacidade">Privacidade</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Rolê. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;