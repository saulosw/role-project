import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { FaExternalLinkAlt } from 'react-icons/fa';
import * as S from './styles';

function AboutUsPage() {
  return (
    <S.PageContainer>
      <Header />
      <S.Content>
        <S.TitleContainer>
          <S.MainTitle>Sobre Nós</S.MainTitle>
        </S.TitleContainer>
        <S.TextContainer>
          <S.ContentText>
            O Rolê é uma plataforma desenvolvida para facilitar encontros e promover
            experiências inesquecíveis de forma simplificada. Nosso objetivo é conectar
            pessoas que compartilham interesses em comum, tornando a descoberta e participação
            em eventos algo rápido, intuitivo e prazeroso.
          </S.ContentText>
          <S.ContentText>
            Este projeto foi desenvolvido por estudantes do curso de Ciência da Computação
            da FECAP (Fundação Escola de Comércio Álvares Penteado), como parte de nossa
            jornada acadêmica. Combinamos conhecimento técnico e criatividade para criar
            uma solução que realmente faz a diferença na vida das pessoas.
          </S.ContentText>
        </S.TextContainer>
        <S.ButtonContainer>
          <S.GithubButton
            onClick={() => window.location.href = 'https://github.com/saulosw/role-project'}
          >
            Visite nosso Github
            <FaExternalLinkAlt className='external-icon' />
          </S.GithubButton>
        </S.ButtonContainer>
      </S.Content>
      <Footer />
    </S.PageContainer>
  );
}

export default AboutUsPage;
