import { styled, Box, Button } from '@mui/material';
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

export const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: '#f8f9fa',
});

export const Content = styled('div')({
  flex: 1,
  padding: '2rem 1rem',
  maxWidth: '900px',
  margin: '0 auto',
  width: '100%',
});

export const ProfileHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  background: '#fff',
  padding: '2.5rem',
  borderRadius: '16px',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
  marginBottom: '2rem',
  animation: `${fadeInUp} 0.6s ease-out`,
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '2rem',
  },
});

export const ProfileAvatar = styled(Box)({
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: '3rem',
  fontWeight: '700',
  fontFamily: "'Poppins', sans-serif",
  flexShrink: 0,
  boxShadow: '0 4px 20px rgba(255, 107, 53, 0.3)',
  '@media (max-width: 768px)': {
    width: '100px',
    height: '100px',
    fontSize: '2.5rem',
  },
});

export const ProfileInfo = styled(Box)({
  flex: 1,
});

export const ProfileName = styled('h1')({
  fontSize: '2rem',
  color: '#1a1a1a',
  margin: '0 0 0.5rem 0',
  fontWeight: '700',
  fontFamily: "'Montserrat', sans-serif",
  '@media (max-width: 768px)': {
    fontSize: '1.5rem',
    textAlign: 'center',
  },
});

export const ProfileDetail = styled('p')({
  fontSize: '1rem',
  color: '#666',
  margin: '0.25rem 0',
  fontFamily: "'Poppins', sans-serif",
  '@media (max-width: 768px)': {
    textAlign: 'center',
  },
});

export const ProfileDetailLabel = styled('span')({
  fontWeight: '600',
  color: '#1a1a1a',
  marginRight: '0.5rem',
});

export const OptionsContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.5rem',
  marginTop: '1rem',
});

export const OptionCard = styled(Box)({
  background: '#fff',
  padding: '2rem',
  borderRadius: '16px',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  animation: `${fadeInUp} 0.6s ease-out`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '1rem',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.12)',
  },
});

export const OptionIcon = styled(Box)({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: '2.5rem',
});

export const OptionTitle = styled('h3')({
  fontSize: '1.3rem',
  color: '#1a1a1a',
  margin: 0,
  fontWeight: '600',
  fontFamily: "'Montserrat', sans-serif",
});

export const OptionDescription = styled('p')({
  fontSize: '0.95rem',
  color: '#666',
  margin: 0,
  fontFamily: "'Poppins', sans-serif",
});

export const LoadingContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '60vh',
  gap: '1.5rem',
});

export const LoadingText = styled('p')({
  fontSize: '1.1rem',
  color: '#666',
  fontFamily: "'Poppins', sans-serif",
});

export const ErrorContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '60vh',
  padding: '2rem',
});
