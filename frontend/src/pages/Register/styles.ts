import { styled, Box, Typography, TextField, Button, IconButton } from '@mui/material';
import { keyframes } from '@emotion/react';

const floatPattern = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(60px, 60px);
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

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    max-height: 200px;
  }
`;

const requirementMet = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const AuthContainer = styled(Box)({
  display: 'flex',
  minHeight: '100vh',
  background: 'white',
  overflow: 'hidden',
});

export const LeftPanel = styled(Box)(({ theme }) => ({
  flex: 1,
  background: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  animation: `${slideInLeft} 1s ease-out`,
  zIndex: 1,
  padding: '2rem',
  [theme.breakpoints.down('md')]: {
    padding: '1.5rem',
  },
}));

export const RightPanel = styled(Box)({
  flex: 1,
  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff4757 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  animation: `${slideInRight} 1s ease-out`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat`,
    animation: `${floatPattern} 30s linear infinite`,
    pointerEvents: 'none',
    zIndex: 0,
  },
});

export const BrandContainer = styled(Box)({
  textAlign: 'center',
  zIndex: 1,
  position: 'relative',
});

export const BrandTitle = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '4rem',
  fontWeight: 800,
  color: 'white',
  margin: '0 0 1rem 0',
  letterSpacing: '-2px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
});

export const BrandSubtitle = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1.3rem',
  color: 'rgba(255, 255, 255, 0.9)',
  margin: 0,
  fontWeight: 300,
});

export const FormContainer = styled(Box)({
  width: '100%',
  maxWidth: '400px',
  position: 'relative',
  zIndex: 10,
});

export const FormHeader = styled(Box)({
  textAlign: 'center',
  marginBottom: '2.5rem',
  animation: `${fadeInUp} 1s ease-out 0.3s both`,
});

export const FormTitle = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '2rem',
  fontWeight: 700,
  color: '#2c2c2c',
  margin: '0 0 0.5rem 0',
  letterSpacing: '-0.5px',
});

export const FormSubtitle = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  color: '#666666',
  margin: 0,
  fontSize: '0.95rem',
});

export const Form = styled('form')({
  animation: `${fadeInUp} 1s ease-out 0.5s both`,
});

export const StyledTextField = styled(TextField)({
  marginBottom: '1.5rem',
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '1rem',
    '& fieldset': {
      borderWidth: '2px',
      borderColor: '#e5e5e5',
    },
    '&:hover fieldset': {
      borderColor: '#ff6b35',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ff6b35',
      boxShadow: '0 0 0 3px rgba(255, 107, 53, 0.1)',
    },
    '&.Mui-error fieldset': {
      borderColor: '#ef4444',
      boxShadow: '0 0 0 3px rgba(239, 68, 68, 0.1)',
    },
  },
  '& .MuiInputLabel-root': {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 500,
    color: '#2c2c2c',
    '&.Mui-focused': {
      color: '#ff6b35',
    },
  },
  '& .MuiInputAdornment-root': {
    color: '#666666',
    '& .MuiSvgIcon-root': {
      fontSize: '1.1rem',
    },
  },
  '& .Mui-focused .MuiInputAdornment-root': {
    color: '#ff6b35',
  },
});

export const PasswordToggle = styled(IconButton)({
  color: '#666666',
  padding: '0.5rem',
  borderRadius: '6px',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#ff6b35',
    background: 'rgba(255, 107, 53, 0.1)',
  },
});

export const PasswordRequirementsContainer = styled(Box)({
  marginTop: '0.8rem',
  padding: '1rem',
  background: 'rgba(0, 0, 0, 0.02)',
  borderRadius: '8px',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  animation: `${slideDown} 0.3s ease-out`,
});

export const RequirementsTitle = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '0.8rem',
  fontWeight: 600,
  color: '#666666',
  margin: '0 0 0.6rem 0',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
});

export const RequirementsList = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.4rem',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: '0.3rem',
  },
}));

interface RequirementItemProps {
  met: boolean;
}

export const RequirementItem = styled(Box)<RequirementItemProps>(({ met }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  transition: 'all 0.3s ease',
  padding: '0.2rem 0',
  animation: met ? `${requirementMet} 0.4s ease-out` : 'none',
}));

export const RequirementText = styled(Typography)<RequirementItemProps>(({ met }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '0.75rem',
  fontWeight: 500,
  color: met ? '#10b981' : '#999999',
  transition: 'color 0.3s ease',
}));

export const FieldFeedback = styled(Box)<{ success?: boolean }>(({ success }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  marginTop: '0.5rem',
  fontFamily: "'Poppins', sans-serif",
  fontSize: '0.8rem',
  color: success ? '#10b981' : '#ef4444',
  animation: `${slideDown} 0.3s ease-out`,
}));

export const SubmitButton = styled(Button)<{ disabled?: boolean }>(({ disabled }) => ({
  width: '100%',
  padding: '1rem',
  background: disabled ? '#cccccc' : 'linear-gradient(135deg, #ff6b35, #f7931e)',
  color: 'white',
  border: 'none',
  borderRadius: '12px',
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1rem',
  fontWeight: 600,
  cursor: disabled ? 'not-allowed' : 'pointer',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  animation: `${fadeInUp} 1s ease-out 0.9s both`,
  marginBottom: '1.5rem',
  textTransform: 'none',
  opacity: disabled ? 0.5 : 1,
  '&:hover:not(:disabled)': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)',
    background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
  },
  '&::before': disabled ? { display: 'none' } : {
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
  },
  '&:hover:not(:disabled)::before': {
    width: '300px',
    height: '300px',
  },
}));

export const LoadingSpinner = styled(Box)({
  width: '20px',
  height: '20px',
  border: '2px solid rgba(255, 255, 255, 0.3)',
  borderTop: '2px solid white',
  borderRadius: '50%',
  animation: `${spin} 1s linear infinite`,
  margin: '0 auto',
});

export const Footer = styled(Box)({
  textAlign: 'center',
  animation: `${fadeInUp} 1s ease-out 1.1s both`,
});

export const FooterText = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  color: '#666666',
  margin: 0,
  fontSize: '0.9rem',
});

export const SwitchButton = styled('button')({
  background: 'none',
  border: 'none',
  color: '#ff6b35',
  fontWeight: 600,
  cursor: 'pointer',
  textDecoration: 'none',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  transition: 'all 0.3s ease',
  padding: 0,
  '&:hover': {
    color: '#f7931e',
    textDecoration: 'underline',
  },
});
