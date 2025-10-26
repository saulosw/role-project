import { styled, Box, Typography, Button, TextField } from '@mui/material';
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

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    max-height: 100px;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 1;
    max-height: 100px;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
  }
`;

const textShimmer = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
`;

const categoryPulse = keyframes`
  0%, 100% {
    box-shadow: 0 2px 8px rgba(255, 107, 53, 0.15);
  }
  50% {
    box-shadow: 0 4px 12px rgba(255, 107, 53, 0.25);
  }
`;

const movePattern = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const PageContainer = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  animation: `${fadeIn} 0.6s ease-out`,
});

export const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '3rem',
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '3rem 2rem',
  flex: 1,
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    gap: '2rem',
  },
  [theme.breakpoints.down('md')]: {
    padding: '2rem 1rem',
  },
}));

export const FormContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: '600px',
  animation: `${slideInLeft} 0.8s ease-out`,
  '& form': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
  },
}));

export const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '1rem',
    '& fieldset': {
      borderWidth: '2px',
      borderColor: '#e5e5e5',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 107, 53, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ff6b35',
      boxShadow: '0 0 0 3px rgba(255, 107, 53, 0.1)',
    },
  },
  '& .MuiInputLabel-root': {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.95rem',
    fontWeight: 500,
    color: '#2c2c2c',
    '&.Mui-focused': {
      color: '#ff6b35',
    },
  },
  '& .MuiFormHelperText-root': {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.85rem',
  },
});

export const ErrorText = styled('span')({
  color: '#d32f2f',
  fontSize: '0.85rem',
  marginTop: '0.5rem',
  fontFamily: "'Poppins', sans-serif",
});

export const LoadingSpinner = styled(Box)({
  width: '20px',
  height: '20px',
  border: '2px solid rgba(255, 255, 255, 0.3)',
  borderTop: '2px solid white',
  borderRadius: '50%',
  animation: `${spin} 1s linear infinite`,
  margin: '0 auto',
});

export const Label = styled('label')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  fontWeight: 500,
  color: '#2c2c2c',
  fontSize: '0.95rem',
  transition: 'all 0.3s ease',
  fontFamily: "'Poppins', sans-serif",
});

export const Input = styled('input')({
  padding: '0.9rem 1.2rem',
  border: '2px solid #e0e0e0',
  borderRadius: '12px',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  background: 'white',
  color: '#2c2c2c',
  fontFamily: "'Poppins', sans-serif",
  '&:focus': {
    borderColor: '#ff6b35',
    boxShadow: '0 0 0 4px rgba(255, 107, 53, 0.1)',
    transform: 'translateY(-2px)',
    outline: 'none',
  },
});

export const TextArea = styled('textarea')({
  padding: '0.9rem 1.2rem',
  border: '2px solid #e0e0e0',
  borderRadius: '12px',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  background: 'white',
  color: '#2c2c2c',
  fontFamily: "'Poppins', sans-serif",
  resize: 'vertical',
  minHeight: '120px',
  '&:focus': {
    borderColor: '#ff6b35',
    boxShadow: '0 0 0 4px rgba(255, 107, 53, 0.1)',
    transform: 'translateY(-2px)',
    outline: 'none',
  },
});

export const Select = styled('select')({
  padding: '0.9rem 1.2rem',
  border: '2px solid #e0e0e0',
  borderRadius: '12px',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  background: 'white',
  color: '#2c2c2c',
  fontFamily: "'Poppins', sans-serif",
  cursor: 'pointer',
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 1rem center',
  backgroundSize: '1.2rem',
  paddingRight: '3rem',
  '&:hover': {
    borderColor: 'rgba(255, 107, 53, 0.5)',
    backgroundColor: 'rgba(255, 107, 53, 0.02)',
  },
  '&:focus': {
    borderColor: '#ff6b35',
    boxShadow: '0 0 0 4px rgba(255, 107, 53, 0.1)',
    transform: 'translateY(-2px)',
    outline: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
  },
  '& option': {
    padding: '0.8rem',
    fontSize: '1rem',
    background: 'white',
    color: '#2c2c2c',
  },
});

export const CharCounter = styled('span')({
  fontSize: '0.85rem',
  color: '#666666',
  textAlign: 'right',
  marginTop: '0.3rem',
  transition: 'color 0.3s ease',
});

export const ToggleContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 0',
  margin: '0.5rem 0',
});

export const ToggleLabel = styled('label')({
  fontWeight: 500,
  color: '#2c2c2c',
  fontSize: '0.95rem',
  cursor: 'default',
  userSelect: 'none',
  fontFamily: "'Poppins', sans-serif",
});

export const ToggleSwitch = styled(Box)({
  position: 'relative',
  width: '60px',
  height: '30px',
  flexShrink: 0,
  '& input': {
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    zIndex: 2,
    margin: 0,
  },
  '& .slider': {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#ccc',
    borderRadius: '30px',
    transition: 'all 0.4s ease',
    zIndex: 1,
    pointerEvents: 'none',
    '&::before': {
      position: 'absolute',
      content: '""',
      height: '22px',
      width: '22px',
      left: '4px',
      bottom: '4px',
      background: 'white',
      borderRadius: '50%',
      transition: 'all 0.4s ease',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
  },
  '& input:checked + .slider': {
    background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
    boxShadow: '0 0 10px rgba(255, 107, 53, 0.3)',
    '&::before': {
      transform: 'translateX(30px)',
    },
  },
});

export const FileInputLabel = styled('label')<{ isExiting?: boolean }>(({ isExiting }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  overflow: 'hidden',
  maxHeight: '100px',
  opacity: 1,
  transform: 'translateY(0)',
  transition: 'all 0.4s ease-out',
  animation: isExiting ? `${slideUp} 0.4s ease-out forwards` : `${slideDown} 0.4s ease-out`,
}));

export const FileInput = styled('input')({
  display: 'none',
});

export const FileInputButton = styled('span')({
  padding: '1rem 1.5rem',
  background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
  color: 'white',
  borderRadius: '12px',
  textAlign: 'center',
  cursor: 'pointer',
  fontWeight: 600,
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
  fontFamily: "'Poppins', sans-serif",
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
  },
});

export const SubmitButton = styled(Button)({
  marginTop: '1rem',
  padding: '1.1rem 2rem',
  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff4757 100%)',
  color: 'white',
  border: 'none',
  borderRadius: '12px',
  fontSize: '1.1rem',
  fontWeight: 700,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 20px rgba(255, 107, 53, 0.3)',
  position: 'relative',
  overflow: 'hidden',
  textTransform: 'none',
  fontFamily: "'Poppins', sans-serif",
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
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 30px rgba(255, 107, 53, 0.5)',
    background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff4757 100%)',
    '&::before': {
      width: '400px',
      height: '400px',
    },
  },
  '&:active': {
    transform: 'translateY(-1px)',
  },
});

export const PreviewContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  position: 'sticky',
  top: '100px',
  height: 'fit-content',
  animation: `${slideInRight} 0.8s ease-out`,
  [theme.breakpoints.down('lg')]: {
    position: 'relative',
    top: 0,
  },
}));

export const EventCardPreview = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '500px',
  background: 'white',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.4s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 50px rgba(0, 0, 0, 0.15)',
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
  },
}));

export const CardHeader = styled(Box)(({ theme }) => ({
  padding: '2rem',
  background: 'linear-gradient(to bottom, rgba(255, 107, 53, 0.03), transparent)',
  [theme.breakpoints.down('md')]: {
    padding: '1.5rem',
  },
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem',
  fontWeight: 700,
  color: '#2c2c2c',
  marginBottom: '1rem',
  background: 'linear-gradient(135deg, #ff6b35, #ff4757)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  minHeight: '2.2rem',
  animation: `${textShimmer} 3s ease-in-out infinite`,
  fontFamily: "'Montserrat', sans-serif",
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
}));

export const CardDescription = styled(Typography)({
  fontSize: '0.95rem',
  color: '#666666',
  lineHeight: 1.6,
  minHeight: '3rem',
  wordWrap: 'break-word',
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
  whiteSpace: 'pre-wrap',
  fontFamily: "'Poppins', sans-serif",
});

export const CardImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '300px',
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    height: '250px',
  },
}));

export const CategoryIconContainer = styled(Box)<{ gradient: string }>(({ gradient }) => ({
  width: '100%',
  height: '100%',
  background: gradient,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.5s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: `repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255, 255, 255, 0.05) 10px,
      rgba(255, 255, 255, 0.05) 20px
    )`,
    animation: `${movePattern} 20s linear infinite`,
  },
  '&:hover span': {
    transform: 'scale(1.1) rotate(5deg)',
  },
}));

export const CategoryIcon = styled('span')({
  fontSize: '8rem',
  zIndex: 1,
  filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.2))',
  transition: 'all 0.3s ease',
});

export const PlaceholderContainer = styled(Box)({
  width: '100%',
  height: '100%',
  background: 'linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: `repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(0, 0, 0, 0.02) 10px,
      rgba(0, 0, 0, 0.02) 20px
    )`,
    animation: `${movePattern} 20s linear infinite`,
  },
});

export const PlaceholderText = styled('span')({
  fontSize: '1.2rem',
  fontWeight: 600,
  color: '#999999',
  zIndex: 1,
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontFamily: "'Poppins', sans-serif",
});

export const CardDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  padding: '1.5rem 2rem 2rem',
  [theme.breakpoints.down('md')]: {
    padding: '1.5rem',
  },
}));

export const CardDetail = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isCategoryBadge',
})<{ isCategoryBadge?: boolean }>(({ isCategoryBadge }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.8rem',
  background: 'rgba(255, 107, 53, 0.05)',
  borderRadius: '10px',
  borderLeft: '3px solid #ff6b35',
  transition: 'all 0.3s ease',
  fontFamily: "'Poppins', sans-serif",
  '&:hover': {
    background: 'rgba(255, 107, 53, 0.1)',
    transform: 'translateX(5px)',
  },
  ...(isCategoryBadge && {
    background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.15), rgba(255, 107, 53, 0.08))',
    borderLeft: '3px solid #f7931e',
    boxShadow: '0 2px 8px rgba(255, 107, 53, 0.15)',
    animation: `${categoryPulse} 2s ease-in-out infinite`,
    '&:hover': {
      background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2), rgba(255, 107, 53, 0.12))',
      boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
    },
  }),
}));

export const DetailLabel = styled('span')({
  fontWeight: 600,
  color: '#2c2c2c',
  fontSize: '0.9rem',
});

export const DetailValue = styled('span')<{ isCategory?: boolean }>(({ isCategory }) => ({
  color: '#666666',
  fontSize: '0.9rem',
  ...(isCategory && {
    fontWeight: 600,
    color: '#ff6b35',
    textTransform: 'capitalize',
  }),
}));
