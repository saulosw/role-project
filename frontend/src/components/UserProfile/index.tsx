import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { MdPerson, MdEvent, MdEventAvailable, MdLogout } from 'react-icons/md';
import * as S from './styles';
import PersonIcon from '@mui/icons-material/Person';

function UserProfile() {
  const [userName, setUserName] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem('userName');
    setUserName(name);
  }, []);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    setUserName(null);
    navigate('/login');
    handleMenuClose();
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
      <S.UserInfo onClick={handleMenuOpen} style={{ cursor: 'pointer' }}>
        <S.UserIcon>
          <PersonIcon />
        </S.UserIcon>
        <S.UserName>{userName}</S.UserName>
      </S.UserInfo>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 1.5,
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              minWidth: '200px',
            },
          },
        }}
      >
        <MenuItem onClick={() => handleNavigate('/profile')}>
          <ListItemIcon>
            <MdPerson size={20} color="#ff6b35" />
          </ListItemIcon>
          <ListItemText>Perfil</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleNavigate('/profile/my-events')}>
          <ListItemIcon>
            <MdEvent size={20} color="#ff6b35" />
          </ListItemIcon>
          <ListItemText>Meus Eventos</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleNavigate('/profile/participating')}>
          <ListItemIcon>
            <MdEventAvailable size={20} color="#ff6b35" />
          </ListItemIcon>
          <ListItemText>Eventos Participando</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <MdLogout size={20} color="#ff6b35" />
          </ListItemIcon>
          <ListItemText>Sair</ListItemText>
        </MenuItem>
      </Menu>
      <S.LogoutButton onClick={handleLogout}>
        Sair
      </S.LogoutButton>
    </S.UserProfileContainer>
  );
}

export default UserProfile;
