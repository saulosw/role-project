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
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
});

export const PageHeader = styled(Box)({
  marginBottom: '2rem',
  animation: `${fadeInUp} 0.6s ease-out`,
});

export const BackButton = styled(Button)({
  color: '#ff6b35',
  textTransform: 'none',
  fontSize: '1rem',
  marginBottom: '1rem',
  '&:hover': {
    backgroundColor: 'rgba(255, 107, 53, 0.1)',
  },
});

export const PageTitle = styled('h1')({
  fontSize: '2.2rem',
  color: '#1a1a1a',
  margin: '0 0 0.5rem 0',
  fontWeight: '700',
  fontFamily: "'Montserrat', sans-serif",
  '@media (max-width: 768px)': {
    fontSize: '1.8rem',
  },
});

export const PageSubtitle = styled('p')({
  fontSize: '1rem',
  color: '#666',
  margin: 0,
  fontFamily: "'Poppins', sans-serif",
});

export const EventsGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gap: '1.5rem',
  marginTop: '1rem',
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
  },
});

export const EventCard = styled(Box)({
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  animation: `${fadeInUp} 0.6s ease-out`,
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.12)',
  },
});

export const EventImage = styled(Box)<{ gradient?: string }>((props) => ({
  width: '100%',
  height: '180px',
  background: props.gradient || 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: '3rem',
}));

export const EventContent = styled(Box)({
  padding: '1.5rem',
});

export const EventTitle = styled('h3')({
  fontSize: '1.3rem',
  color: '#1a1a1a',
  margin: '0 0 0.5rem 0',
  fontWeight: '600',
  fontFamily: "'Montserrat', sans-serif",
});

export const EventDescription = styled('p')({
  fontSize: '0.9rem',
  color: '#666',
  margin: '0 0 1rem 0',
  fontFamily: "'Poppins', sans-serif",
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const EventInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  fontSize: '0.85rem',
  color: '#666',
  fontFamily: "'Poppins', sans-serif",
});

export const EventInfoRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const EventInfoIcon = styled('span')({
  color: '#ff6b35',
  fontSize: '1.1rem',
  display: 'flex',
  alignItems: 'center',
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

export const EmptyContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '50vh',
  textAlign: 'center',
  padding: '2rem',
});

export const EmptyIcon = styled(Box)({
  fontSize: '5rem',
  color: '#ddd',
  marginBottom: '1rem',
});

export const EmptyTitle = styled('h2')({
  fontSize: '1.5rem',
  color: '#666',
  margin: '0 0 0.5rem 0',
  fontFamily: "'Montserrat', sans-serif",
});

export const EmptyText = styled('p')({
  fontSize: '1rem',
  color: '#999',
  margin: '0 0 1.5rem 0',
  fontFamily: "'Poppins', sans-serif",
});

export const CreateEventButton = styled(Button)({
  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
  color: '#fff',
  padding: '0.8rem 1.5rem',
  borderRadius: '12px',
  fontSize: '1rem',
  fontWeight: '600',
  textTransform: 'none',
  fontFamily: "'Poppins', sans-serif",
  '&:hover': {
    background: 'linear-gradient(135deg, #f55a24 0%, #e8840d 100%)',
    transform: 'translateY(-2px)',
  },
});
