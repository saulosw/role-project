import { styled, Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const expandWidth = keyframes`
  from {
    width: 0;
  }
  to {
    width: 30px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const FooterContainer = styled('footer')({
  background: 'linear-gradient(135deg, #333333 0%, #2a2a2a 100%)',
  color: 'white',
  marginTop: 'auto',
  animation: `${fadeInUp} 1s ease-out 0.5s both`,
});

export const FooterWrapper = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '4rem 2rem 2rem',
  [theme.breakpoints.down('md')]: {
    padding: '2rem 1rem 1rem',
  },
}));

export const FooterContent = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '3rem',
  marginBottom: '3rem',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
  },
}));

export const FooterSection = styled(Box)<{ delay?: number }>(({ delay = 0 }) => ({
  animation: `${slideInLeft} 0.8s ease-out`,
  animationDelay: `${delay}s`,
}));

export const FooterTitle = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '1.8rem',
  fontWeight: 800,
  color: '#ff6b35',
  margin: '0 0 1rem 0',
  letterSpacing: '-0.5px',
});

export const SectionTitle = styled('h4')({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1.2rem',
  fontWeight: 600,
  color: '#f7931e',
  margin: '0 0 1rem 0',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-5px',
    left: 0,
    width: '30px',
    height: '3px',
    background: 'linear-gradient(90deg, #ff6b35, #f7931e)',
    borderRadius: '2px',
    animation: `${expandWidth} 0.8s ease-out 1s both`,
  },
});

export const FooterDescription = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  lineHeight: 1.6,
  color: '#cccccc',
  margin: 0,
});

export const FooterLinks = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  '& li': {
    marginBottom: '0.8rem',
  },
});

export const FooterLink = styled('a')({
  fontFamily: "'Poppins', sans-serif",
  color: '#cccccc',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  position: 'relative',
  display: 'inline-block',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '-2px',
    left: 0,
    width: 0,
    height: '2px',
    background: 'linear-gradient(90deg, #ff6b35, #f7931e)',
    transition: 'width 0.3s ease',
  },
  '&:hover': {
    color: '#ff6b35',
    transform: 'translateX(5px)',
    '&::before': {
      width: '100%',
    },
  },
});

export const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}));

export const SocialLink = styled('a')(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
  color: 'white',
  padding: '0.8rem 1.5rem',
  borderRadius: '25px',
  textDecoration: 'none',
  fontWeight: 500,
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    transition: 'left 0.5s ease',
  },
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
    '&::before': {
      left: '100%',
    },
  },
  [theme.breakpoints.down('md')]: {
    padding: '0.6rem 1.2rem',
    fontSize: '0.9rem',
  },
}));

export const FooterBottom = styled(Box)({
  borderTop: '1px solid #444444',
  paddingTop: '1.5rem',
  textAlign: 'center',
  animation: `${fadeIn} 1s ease-out 1.5s both`,
  '& p': {
    fontFamily: "'Poppins', sans-serif",
    color: '#888888',
    margin: 0,
    fontSize: '0.9rem',
  },
});
