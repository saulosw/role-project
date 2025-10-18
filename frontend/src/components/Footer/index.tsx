import * as S from './styles';

function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterWrapper>
        <S.FooterContent>
          <S.FooterSection>
            <S.FooterTitle>Rolê</S.FooterTitle>
            <S.FooterDescription>
              Conectando pessoas através de experiências únicas na sua cidade.
            </S.FooterDescription>
          </S.FooterSection>

          <S.FooterSection delay={0.2}>
            <S.SectionTitle>Navegação</S.SectionTitle>
            <S.FooterLinks>
              <li><S.FooterLink href="/explorar">Explorar Eventos</S.FooterLink></li>
              <li><S.FooterLink href="/criar">Criar Evento</S.FooterLink></li>
              <li><S.FooterLink href="/sobre">Sobre Nós</S.FooterLink></li>
            </S.FooterLinks>
          </S.FooterSection>

          <S.FooterSection delay={0.4}>
            <S.SectionTitle>Suporte</S.SectionTitle>
            <S.FooterLinks>
              <li><S.FooterLink href="/ajuda">Central de Ajuda</S.FooterLink></li>
              <li><S.FooterLink href="/contato">Contato</S.FooterLink></li>
              <li><S.FooterLink href="/termos">Termos de Uso</S.FooterLink></li>
              <li><S.FooterLink href="/privacidade">Privacidade</S.FooterLink></li>
            </S.FooterLinks>
          </S.FooterSection>

          <S.FooterSection delay={0.6}>
            <S.SectionTitle>Redes Sociais</S.SectionTitle>
            <S.SocialLinks>
              <S.SocialLink href="#">Instagram</S.SocialLink>
              <S.SocialLink href="#">Facebook</S.SocialLink>
              <S.SocialLink href="#">Twitter</S.SocialLink>
            </S.SocialLinks>
          </S.FooterSection>
        </S.FooterContent>

        <S.FooterBottom>
          <p>&copy; 2024 Rolê. Todos os direitos reservados.</p>
        </S.FooterBottom>
      </S.FooterWrapper>
    </S.FooterContainer>
  );
}

export default Footer;
