import { useState } from 'react';
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Rolê</h1>
        </div>
        
        <nav className={`nav ${isMobileMenuOpen ? 'nav-mobile-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/explorar" className="nav-link">Explorar Eventos</a>
            </li>
            <li className="nav-item">
              <a href="/criar" className="nav-link">Criar Evento</a>
            </li>
            <li className="nav-item">
              <a href="/sobre" className="nav-link">Sobre Nós</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="login-btn" onClick={() => window.location.href = '/login'}>Login</button>
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;