import { styled, Box } from '@mui/material';
import { keyframes } from '@emotion/react';

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const HeaderContainer = styled('header')({
  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff4757 100%)',
  boxShadow: '0 4px 20px rgba(255, 107, 53, 0.3)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  animation: `${slideDown} 0.8s ease-out`,
});

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.5rem 2rem',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    padding: '1rem',
  },
}));

export const Logo = styled(Box)({
  '& h1': {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '2.2rem',
    fontWeight: 800,
    color: 'white',
    margin: 0,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    letterSpacing: '-0.5px',
    '&:hover': {
      transform: 'scale(1.05)',
      opacity: 0.9,
    },
  },
  '@media (max-width: 768px)': {
    '& h1': {
      fontSize: '2rem',
    },
  },
});

export const Nav = styled('nav')<{ open?: boolean }>(({ theme, open }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff4757 100%)',
    transform: open ? 'translateY(0)' : 'translateY(-100%)',
    opacity: open ? 1 : 0,
    visibility: open ? 'visible' : 'hidden',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(255, 107, 53, 0.3)',
  },
}));

export const NavList = styled('ul')(({ theme }) => ({
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  gap: '2rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: '1rem',
    gap: 0,
  },
}));

export const NavItem = styled('li')({
  position: 'relative',
});

export const NavLink = styled('a')(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1rem',
  fontWeight: 500,
  color: 'white',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '25px',
  transition: 'all 0.3s ease',
  position: 'relative',
  display: 'inline-block',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
    padding: '1rem',
    borderRadius: 0,
    textAlign: 'center',
  },
}));

export const HeaderActions = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const MobileMenuToggle = styled('button')<{ open?: boolean }>(({ theme, open }) => ({
  display: 'none',
  flexDirection: 'column',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0.5rem',
  gap: '4px',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
  '& span': {
    width: '25px',
    height: '3px',
    background: 'white',
    transition: 'all 0.3s ease',
    borderRadius: '2px',
  },
  ...(open && {
    '& span:nth-of-type(1)': {
      transform: 'rotate(45deg) translate(6px, 6px)',
    },
    '& span:nth-of-type(2)': {
      opacity: 0,
    },
    '& span:nth-of-type(3)': {
      transform: 'rotate(-45deg) translate(7px, -7px)',
    },
  }),
}));
