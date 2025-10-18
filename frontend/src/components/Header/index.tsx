import { useState } from 'react';
import * as S from './styles';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.Logo>
          <h1>Rolê</h1>
        </S.Logo>

        <S.Nav open={isMobileMenuOpen}>
          <S.NavList>
            <S.NavItem>
              <S.NavLink href="/">Home</S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink href="/explorar">Explorar Eventos</S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink href="/criar">Criar Evento</S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink href="/sobre">Sobre Nós</S.NavLink>
            </S.NavItem>
          </S.NavList>
        </S.Nav>

        <S.HeaderActions>
          <S.LoginButton onClick={() => window.location.href = '/login'}>
            Login
          </S.LoginButton>
          <S.MobileMenuToggle
            onClick={toggleMobileMenu}
            open={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </S.MobileMenuToggle>
        </S.HeaderActions>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}

export default Header;
