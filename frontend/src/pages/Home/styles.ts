import { styled, Box, Typography, Button } from '@mui/material';
import { keyframes } from '@emotion/react';

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

const floatPattern = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
`;

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(-50px);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulseGlow = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 15px 50px rgba(255, 107, 53, 0.4);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const PageContainer = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: 'white',
});

export const MainContent = styled('main')({
  flex: 1,
  animation: `${fadeInUp} 1s ease-out`,
});

export const HeroSection = styled('section')(({ theme }) => ({
  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff4757 100%)',
  padding: '6rem 2rem',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
    backgroundSize: '50px 50px',
    animation: `${floatPattern} 20s linear infinite`,
  },
  [theme.breakpoints.down('md')]: {
    padding: '4rem 1rem',
  },
}));

export const HeroContent = styled(Box)({
  maxWidth: '800px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
  animation: `${slideInUp} 1.2s ease-out 0.3s both`,
});

export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '3.2rem',
  fontWeight: 800,
  color: 'white',
  margin: '0 0 1.5rem 0',
  letterSpacing: '-1px',
  lineHeight: 1.1,
  animation: `${bounceIn} 1s ease-out 0.8s both`,
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1.3rem',
  fontWeight: 400,
  color: 'rgba(255, 255, 255, 0.9)',
  margin: '0 0 2.5rem 0',
  lineHeight: 1.6,
  animation: `${slideInLeft} 1s ease-out 1s both`,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
  },
}));

export const CTAButton = styled(Button)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1.2rem',
  fontWeight: 600,
  background: 'white',
  color: '#ff6b35',
  border: 'none',
  padding: '1.2rem 3rem',
  borderRadius: '50px',
  cursor: 'pointer',
  transition: 'all 0.4s ease',
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
  position: 'relative',
  overflow: 'hidden',
  animation: `${pulseGlow} 1.5s ease-out 1.5s both`,
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
    transition: 'all 0.4s ease',
    zIndex: -1,
  },
  '&:hover': {
    transform: 'translateY(-5px) scale(1.05)',
    boxShadow: '0 15px 40px rgba(255, 107, 53, 0.4)',
    color: 'white',
    background: 'white',
    '&::before': {
      width: '400px',
      height: '400px',
    },
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
    padding: '1rem 2.5rem',
  },
}));

export const EventsSection = styled(Box)(({ theme }) => ({
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '4rem 2rem',
  [theme.breakpoints.down('md')]: {
    padding: '3rem 1rem',
  },
}));

export const LoadingContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4rem 2rem',
  gap: '1rem',
});

export const LoadingText = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1rem',
  color: '#666',
  marginTop: '1rem',
});

export const EmptyState = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4rem 2rem',
  textAlign: 'center',
});

export const EmptyIcon = styled('span')({
  fontSize: '4rem',
  marginBottom: '1rem',
});

export const EmptyTitle = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#2c2c2c',
  marginBottom: '0.5rem',
});

export const EmptyText = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1rem',
  color: '#666',
});
