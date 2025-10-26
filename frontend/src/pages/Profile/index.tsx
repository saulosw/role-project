import { Alert, CircularProgress } from '@mui/material';
import { MdEvent, MdEventAvailable } from 'react-icons/md';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useProfileData } from '../../hooks/useProfileData';
import * as S from './styles';

function ProfilePage() {
  const { userData, isLoading, error, navigate } = useProfileData();

  if (isLoading) {
    return (
      <S.PageContainer>
        <Header />
        <S.LoadingContainer>
          <CircularProgress size={60} sx={{ color: '#ff6b35' }} />
          <S.LoadingText>Carregando perfil...</S.LoadingText>
        </S.LoadingContainer>
        <Footer />
      </S.PageContainer>
    );
  }

  if (error || !userData) {
    return (
      <S.PageContainer>
        <Header />
        <S.ErrorContainer>
          <Alert severity="error" sx={{ marginBottom: '1.5rem' }}>
            {error || 'Perfil não encontrado'}
          </Alert>
        </S.ErrorContainer>
        <Footer />
      </S.PageContainer>
    );
  }

  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <S.PageContainer>
      <Header />
      <S.Content>
        <S.ProfileHeader>
          <S.ProfileAvatar>{getInitial(userData.name)}</S.ProfileAvatar>
          <S.ProfileInfo>
            <S.ProfileName>{userData.name}</S.ProfileName>
            <S.ProfileDetail>
              <S.ProfileDetailLabel>Email:</S.ProfileDetailLabel>
              {userData.email}
            </S.ProfileDetail>
            <S.ProfileDetail>
              <S.ProfileDetailLabel>Membro desde:</S.ProfileDetailLabel>
              {formatDate(userData.created_at)}
            </S.ProfileDetail>
          </S.ProfileInfo>
        </S.ProfileHeader>

        <S.OptionsContainer>
          <S.OptionCard onClick={() => navigate('/profile/my-events')}>
            <S.OptionIcon>
              <MdEvent />
            </S.OptionIcon>
            <S.OptionTitle>Meus Eventos</S.OptionTitle>
            <S.OptionDescription>
              Visualize todos os eventos que você criou e gerencie suas
              atividades
            </S.OptionDescription>
          </S.OptionCard>

          <S.OptionCard onClick={() => navigate('/profile/participating')}>
            <S.OptionIcon>
              <MdEventAvailable />
            </S.OptionIcon>
            <S.OptionTitle>Eventos Participando</S.OptionTitle>
            <S.OptionDescription>
              Veja todos os eventos dos quais você está participando
            </S.OptionDescription>
          </S.OptionCard>
        </S.OptionsContainer>
      </S.Content>
      <Footer />
    </S.PageContainer>
  );
}

export default ProfilePage;
