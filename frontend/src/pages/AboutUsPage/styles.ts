import { styled, Box, Typography, Button } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const expandLine = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100px;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PageContainer = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: 'linear-gradient(180deg, #ffffff 0%, #fff5f2 100%)',
});

export const Content = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4rem 2rem',
  maxWidth: '1000px',
  margin: '0 auto',
  width: '100%',
  animation: `${fadeIn} 1s ease-out`,
  [theme.breakpoints.down('md')]: {
    padding: '3rem 1.5rem',
  },
}));

export const TitleContainer = styled(Box)({
  textAlign: 'center',
  marginBottom: '3rem',
  animation: `${slideInDown} 0.8s ease-out`,
});

export const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '3.5rem',
  fontWeight: 800,
  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff4757 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  margin: 0,
  letterSpacing: '-1px',
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '4px',
    background: 'linear-gradient(135deg, #ff6b35, #f7931e, #ff4757)',
    borderRadius: '2px',
    animation: `${expandLine} 1s ease-out 0.3s both`,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
    '&::after': {
      width: '80px',
    },
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

export const TextContainer = styled(Box)({
  textAlign: 'center',
  marginBottom: '3rem',
  maxWidth: '800px',
  animation: `${fadeInUp} 1s ease-out 0.3s both`,
});

export const ContentText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1.15rem',
  lineHeight: 1.8,
  color: '#666666',
  margin: '0 0 1.5rem 0',
  textAlign: 'center',
  '&:last-child': {
    marginBottom: 0,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.95rem',
  },
}));

export const ButtonContainer = styled(Box)({
  textAlign: 'center',
  animation: `${fadeInUp} 1s ease-out 0.6s both`,
});

export const GithubButton = styled(Button)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1.1rem',
  fontWeight: 600,
  background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
  color: 'white',
  border: 'none',
  padding: '1.2rem 3rem',
  borderRadius: '50px',
  cursor: 'pointer',
  transition: 'all 0.4s ease',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.8rem',
  textTransform: 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 0,
    height: 0,
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.5s ease',
  },
  '&:hover': {
    transform: 'translateY(-5px) scale(1.05)',
    boxShadow: '0 15px 40px rgba(255, 107, 53, 0.5)',
    background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
    '&::before': {
      width: '400px',
      height: '400px',
    },
    '& .external-icon': {
      transform: 'translate(4px, -4px)',
    },
  },
  '&:active': {
    transform: 'translateY(-3px) scale(1.02)',
  },
  '& .external-icon': {
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
    padding: '1rem 2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0.9rem 2rem',
  },
}));
