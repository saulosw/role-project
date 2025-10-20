import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import PersonIcon from '@mui/icons-material/Person';

function UserProfile() {
  const [userName, setUserName] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem('userName');
    setUserName(name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    setUserName(null);
    navigate('/login');
  };

  if (!userName) {
    return (
      <S.LoginButton onClick={() => navigate('/login')}>
        Login
      </S.LoginButton>
    );
  }

  return (
    <S.UserProfileContainer>
      <S.UserInfo>
        <S.UserIcon>
          <PersonIcon />
        </S.UserIcon>
        <S.UserName>{userName}</S.UserName>
      </S.UserInfo>
      <S.LogoutButton onClick={handleLogout}>
        Sair
      </S.LogoutButton>
    </S.UserProfileContainer>
  );
}

export default UserProfile;
