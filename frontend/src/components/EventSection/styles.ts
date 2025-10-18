import { styled, Box, Typography, Button } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeInSection = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const expandWidth = keyframes`
  from {
    width: 0;
  }
  to {
    width: 60px;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInCard = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const Section = styled('section')<{ isFirst?: boolean }>(({ theme, isFirst }) => ({
  padding: '3rem 2rem',
  maxWidth: '1200px',
  margin: '0 auto',
  animation: `${fadeInSection} 1s ease-out`,
  ...(isFirst && {
    paddingTop: '1rem',
  }),
  ...(!isFirst && {
    borderTop: '1px solid rgba(0, 0, 0, 0.05)',
    marginTop: '2rem',
  }),
  [theme.breakpoints.down('md')]: {
    padding: '2rem 1rem',
  },
}));

export const SectionHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2rem',
  flexWrap: 'wrap',
  gap: '1rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '2.2rem',
  fontWeight: 700,
  color: '#2c2c2c',
  margin: 0,
  letterSpacing: '-0.5px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: 0,
    width: '60px',
    height: '4px',
    background: 'linear-gradient(90deg, #ff6b35, #f7931e)',
    borderRadius: '2px',
    animation: `${expandWidth} 0.8s ease-out 0.5s both`,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.8rem',
  },
}));

export const ShowMoreButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  background: 'transparent',
  border: '2px solid #ff6b35',
  color: '#ff6b35',
  padding: '0.8rem 1.5rem',
  borderRadius: '25px',
  fontFamily: "'Poppins', sans-serif",
  fontSize: '0.9rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
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
    background: '#ff6b35',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.3s ease',
    zIndex: -1,
  },
  '&:hover': {
    color: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)',
    background: 'transparent',
    '&::before': {
      width: '300px',
      height: '300px',
    },
  },
  [theme.breakpoints.down('md')]: {
    padding: '0.7rem 1.3rem',
    fontSize: '0.85rem',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
}));

export const ShowMoreIcon = styled(Box)<{ rotated?: boolean }>(({ rotated }) => ({
  fontSize: '1.1rem',
  transition: 'transform 0.3s ease',
  transform: rotated ? 'rotate(90deg)' : 'rotate(0deg)',
  display: 'flex',
  alignItems: 'center',
}));

export const EventsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gap: '1.5rem',
  animation: `${fadeInUp} 0.8s ease-out 0.3s both`,
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: '1.2rem',
  },
}));

export const EventCardWrapper = styled(Box)<{ delay?: number }>(({ delay = 0 }) => ({
  animation: `${slideInCard} 0.6s ease-out both`,
  animationDelay: `${delay}s`,
}));
