import { styled, Box, Button } from '@mui/material';

export const UserProfileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '0.5rem',
  },
}));

export const UserInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  background: 'rgba(255, 255, 255, 0.2)',
  padding: '0.5rem 1rem',
  borderRadius: '30px',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.3)',
  },
});

export const UserIcon = styled(Box)({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ff6b35',
  '& svg': {
    fontSize: '1.2rem',
  },
});

export const UserName = styled('span')(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '0.95rem',
  fontWeight: 600,
  color: 'white',
  maxWidth: '120px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100px',
    fontSize: '0.85rem',
  },
}));

export const LogoutButton = styled(Button)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '0.9rem',
  fontWeight: 600,
  background: 'rgba(255, 255, 255, 0.9)',
  color: '#ff6b35',
  border: 'none',
  padding: '0.6rem 1.5rem',
  borderRadius: '30px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  textTransform: 'none',
  '&:hover': {
    background: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(255, 107, 53, 0.3)',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0.5rem 1.2rem',
    fontSize: '0.85rem',
  },
}));

export const LoginButton = styled(Button)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1rem',
  fontWeight: 600,
  background: 'white',
  color: '#ff6b35',
  border: 'none',
  padding: '0.8rem 2rem',
  borderRadius: '30px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  textTransform: 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 0,
    height: 0,
    background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.3s ease',
    zIndex: -1,
  },
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
    color: 'white',
    background: 'white',
    '&::before': {
      width: '300px',
      height: '300px',
    },
  },
  [theme.breakpoints.down('md')]: {
    padding: '0.6rem 1.5rem',
    fontSize: '0.9rem',
  },
}));
