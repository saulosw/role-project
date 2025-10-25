import { styled, Box, Typography, Button } from '@mui/material';

export const PageContainer = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
});

export const Content = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: '3rem 2rem',
  maxWidth: '1400px',
  width: '100%',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    padding: '2rem 1rem',
  },
}));

export const HeaderSection = styled(Box)({
  textAlign: 'center',
  marginBottom: '3rem',
});

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '2.8rem',
  fontWeight: 800,
  background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: '0.8rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1.2rem',
  color: '#666',
  fontWeight: 400,
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
}));

export const EventsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gap: '2rem',
  marginBottom: '3rem',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
  },
}));

export const EventCard = styled(Box)({
  background: 'white',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'all 0.4s ease',
  cursor: 'pointer',
  height: 'fit-content',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(255, 107, 53, 0.15)',
  },
  '&:hover .event-title': {
    color: '#ff6b35',
  },
});

export const CardImagePlaceholder = styled(Box)<{ gradient: string }>(({ gradient }) => ({
  width: '100%',
  height: '180px',
  background: gradient,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat`,
    opacity: 0.3,
  },
}));

export const CategoryIcon = styled(Box)({
  fontSize: '4rem',
  zIndex: 1,
  filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))',
});

export const CategoryBadge = styled(Box)({
  position: 'absolute',
  top: '12px',
  left: '12px',
  background: 'rgba(255, 255, 255, 0.9)',
  color: '#2c2c2c',
  padding: '0.4rem 0.8rem',
  borderRadius: '20px',
  fontFamily: "'Poppins', sans-serif",
  fontSize: '0.75rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  zIndex: 2,
});

export const CardContent = styled(Box)(({ theme }) => ({
  padding: '1.5rem',
  [theme.breakpoints.down('md')]: {
    padding: '1.2rem',
  },
}));

export const EventTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '1.3rem',
  fontWeight: 700,
  color: '#2c2c2c',
  margin: '0 0 0.8rem 0',
  lineHeight: 1.3,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  transition: 'color 0.3s ease',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
}));

export const EventDescription = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '0.9rem',
  color: '#666666',
  lineHeight: 1.5,
  margin: '0 0 1.2rem 0',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.85rem',
  },
}));

export const EventDetails = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
  marginBottom: '1.2rem',
});

export const DetailItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  fontFamily: "'Poppins', sans-serif",
  fontSize: '0.85rem',
  color: '#666666',
  '& .detail-icon': {
    color: '#ff6b35',
    fontSize: '1rem',
    flexShrink: 0,
  },
  '& span': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.8rem',
    '& .detail-icon': {
      fontSize: '0.9rem',
    },
  },
}));

export const CTAButton = styled(Button)({
  width: '100%',
  background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
  color: 'white',
  border: 'none',
  padding: '0.8rem 1.5rem',
  borderRadius: '12px',
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
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.3s ease',
    zIndex: 0,
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)',
    background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
    '&::before': {
      width: '300px',
      height: '300px',
    },
  },
});

export const LoadingContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4rem 2rem',
  gap: '1.5rem',
});

export const LoadingText = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1.1rem',
  color: '#666',
  fontWeight: 500,
});

export const EmptyState = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4rem 2rem',
  gap: '1rem',
  textAlign: 'center',
});

export const EmptyIcon = styled(Box)({
  fontSize: '5rem',
  marginBottom: '1rem',
  filter: 'grayscale(0.3)',
});

export const EmptyTitle = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '1.8rem',
  fontWeight: 700,
  color: '#2c2c2c',
  marginBottom: '0.5rem',
});

export const EmptyText = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1.1rem',
  color: '#666',
  fontWeight: 400,
});

export const LoadMoreContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem 0',
});

export const LoadMoreButton = styled(Button)({
  background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
  color: 'white',
  padding: '1rem 3rem',
  borderRadius: '12px',
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 4px 20px rgba(255, 107, 53, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 30px rgba(255, 107, 53, 0.3)',
    background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
  },
  '&:disabled': {
    opacity: 0.7,
    cursor: 'not-allowed',
  },
});
