import { styled, Box, Typography } from '@mui/material';

export const Section = styled(Box)(({ theme }) => ({
  marginBottom: '4rem',
  [theme.breakpoints.down('md')]: {
    marginBottom: '3rem',
  },
}));

export const SectionHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '2rem',
  paddingLeft: '1rem',
  position: 'relative',
  zIndex: 10,
  [theme.breakpoints.down('md')]: {
    paddingLeft: '0.5rem',
  },
}));

export const CategoryIconWrapper = styled(Box)<{ gradient: string }>(({ gradient }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  background: gradient,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
}));

export const CategoryIcon = styled('span')({
  fontSize: '1.5rem',
});

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '1.8rem',
  fontWeight: 700,
  color: '#2c2c2c',
  margin: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
}));

export const EventsContainer = styled(Box)({
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
});

export const EventsScroll = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1.5rem',
  overflowX: 'auto',
  paddingTop: '0.5rem',
  paddingBottom: '1rem',
  scrollbarWidth: 'thin',
  scrollbarColor: '#ff6b35 #f0f0f0',
  '&::-webkit-scrollbar': {
    height: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f0f0f0',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#ff6b35',
    borderRadius: '10px',
    transition: 'background 0.3s ease',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#f7931e',
  },
  [theme.breakpoints.down('md')]: {
    gap: '1rem',
  },
}));

export const EventCardWrapper = styled(Box)({
  minWidth: '320px',
  maxWidth: '320px',
  flexShrink: 0,
  position: 'relative',
  zIndex: 1,
});
