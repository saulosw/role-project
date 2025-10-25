import { styled } from '@mui/material/styles';
import { Button, Box, Chip } from '@mui/material';

export const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: '#f8f9fa',
});

export const Content = styled('div')({
  flex: 1,
  padding: '2rem 1rem',
  maxWidth: '1400px',
  margin: '0 auto',
  width: '100%',
});

export const LoadingContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '60vh',
  gap: '1.5rem',
});

export const LoadingText = styled('p')({
  color: '#333',
  fontSize: '1.2rem',
});

export const ErrorContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '60vh',
  gap: '1.5rem',
  padding: '2rem',
});

export const EventContainer = styled('div')({
  maxWidth: '1200px',
  margin: '0 auto',
});

export const BackButton = styled('button')({
  background: 'transparent',
  border: 'none',
  color: '#333',
  fontSize: '0.95rem',
  cursor: 'pointer',
  marginBottom: '1.5rem',
  padding: '0.5rem 0',
  transition: 'color 0.3s ease',
  fontFamily: 'inherit',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  '&:hover': {
    color: '#ff6b35',
  },
});

export const MainContent = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 380px',
  gap: '2rem',
  alignItems: 'start',

  '@media (max-width: 968px)': {
    gridTemplateColumns: '1fr',
  },
});

export const LeftColumn = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const RightColumn = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  position: 'sticky',
  top: '2rem',

  '@media (max-width: 968px)': {
    position: 'relative',
    top: 0,
  },
});

interface CategoryBannerProps {
  gradient: string;
}

export const HeroSection = styled('div')<CategoryBannerProps>(({ gradient }) => ({
  background: gradient,
  borderRadius: '16px',
  overflow: 'hidden',
  padding: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '280px',
  position: 'relative',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
}));

export const CategoryIcon = styled('div')({
  fontSize: '10rem',
  filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))',
});

export const EventCard = styled(Box)({
  background: '#fff',
  borderRadius: '16px',
  padding: '2rem',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
});

export const EventHeader = styled('div')({
  marginBottom: '1.5rem',
});

export const EventTitle = styled('h1')({
  fontSize: '2.2rem',
  color: '#1a1a1a',
  margin: '0 0 1rem 0',
  fontWeight: '700',
  lineHeight: '1.3',
});

export const CategoryBadge = styled(Chip)({
  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
  color: '#fff',
  fontWeight: '600',
  fontSize: '0.875rem',
  height: '32px',
});

export const EventDescription = styled('p')({
  color: '#4a5568',
  fontSize: '1.05rem',
  lineHeight: '1.7',
  marginBottom: '1.5rem',
});

export const InfoSection = styled('div')({
  marginTop: '1.5rem',
});

export const SectionTitle = styled('h3')({
  fontSize: '1.1rem',
  color: '#1a1a1a',
  fontWeight: '600',
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const EventDetails = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1rem',
  marginBottom: '1.5rem',
});

export const DetailItem = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.75rem',
  padding: '1rem',
  background: '#f8f9fa',
  borderRadius: '12px',
  border: '1px solid #e9ecef',
});

export const DetailIcon = styled('div')({
  fontSize: '1.5rem',
  minWidth: '1.5rem',
  marginTop: '0.1rem',
});

export const DetailContent = styled('div')({
  flex: 1,
});

export const DetailLabel = styled('div')({
  fontSize: '0.8rem',
  color: '#6b7280',
  marginBottom: '0.25rem',
  textTransform: 'uppercase',
  fontWeight: '600',
  letterSpacing: '0.5px',
});

export const DetailValue = styled('div')({
  fontSize: '1rem',
  color: '#1a1a1a',
  fontWeight: '500',
});

export const SideCard = styled(Box)({
  background: '#fff',
  borderRadius: '16px',
  padding: '1.75rem',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
  border: '1px solid #e9ecef',
});

export const ParticipantsSection = styled('div')({
  marginBottom: '1.5rem',
});

export const ParticipantCount = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '1rem',
});

export const CountNumber = styled('div')({
  fontSize: '2.5rem',
  fontWeight: '700',
  color: '#ff6b35',
  lineHeight: 1,
});

export const CountLabel = styled('div')({
  fontSize: '0.9rem',
  color: '#6b7280',
  lineHeight: 1.3,
});

export const ActionButtons = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
});

export const PrimaryButton = styled(Button)({
  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
  color: '#fff',
  padding: '1rem 1.5rem',
  borderRadius: '12px',
  fontSize: '1rem',
  fontWeight: '600',
  textTransform: 'none',
  boxShadow: '0 4px 12px rgba(255, 107, 53, 0.25)',
  transition: 'all 0.3s ease',
  width: '100%',

  '&:hover': {
    background: 'linear-gradient(135deg, #f55a24 0%, #e8840d 100%)',
    boxShadow: '0 6px 16px rgba(255, 107, 53, 0.35)',
    transform: 'translateY(-2px)',
  },
});

export const SecondaryButton = styled(Button)({
  color: '#ff6b35',
  borderColor: '#ff6b35',
  padding: '1rem 1.5rem',
  borderRadius: '12px',
  fontSize: '1rem',
  fontWeight: '600',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  width: '100%',

  '&:hover': {
    borderColor: '#f55a24',
    backgroundColor: 'rgba(255, 107, 53, 0.05)',
  },
});

export const OrganizerInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem',
  background: '#f8f9fa',
  borderRadius: '12px',
  marginTop: '1.5rem',
});

export const OrganizerAvatar = styled('div')({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: '1.5rem',
  fontWeight: '700',
});

export const OrganizerDetails = styled('div')({
  flex: 1,
});

export const OrganizerLabel = styled('div')({
  fontSize: '0.75rem',
  color: '#6b7280',
  textTransform: 'uppercase',
  fontWeight: '600',
  letterSpacing: '0.5px',
  marginBottom: '0.25rem',
});

export const OrganizerName = styled('div')({
  fontSize: '1rem',
  color: '#1a1a1a',
  fontWeight: '600',
});
