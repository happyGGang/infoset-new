import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_c_y_information.svg';
import backgroundX from '../../../../assets/img/kiosk_c_x_information_bg.svg';

const Container = styled('div')(() => ({
  width: '23.7275rem',
  height: '42.18225rem',
  background: `url(${background}) center center no-repeat`,
  backgroundSize: 'cover',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
  opacity: 0,
  animation: 'fadeIn 1s ease-out forwards',
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
}));

const ContainerX = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  background: `url(${backgroundX}) center center no-repeat`,
  backgroundSize: 'cover',
  '@keyframes float-up': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  opacity: 0,
  animation: 'fadeIn 1s ease-out forwards',
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
}));

const Content = styled('div')(() => ({
  width: '60.65rem',
  height: '32rem',
  margin: '6.25rem  0 0 6.25rem',
  padding: '0 2.99rem 0  5.08rem',
}));

const Scroll = styled('div')(() => ({
  height: '31.41rem',
  paddingRight: '1.93rem',
  overflowY: 'scroll',
  paddingTop: '0.59rem',
  img: {
    width: '58.3rem',
    height: '54.6875rem',
  },
  '::-webkit-scrollbar': {
    width: '0.15625rem',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    borderRadius: '0.97656rem',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#FFFFFF',
    borderRadius: '0.97656rem',
  },
  '::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#FFFFFF',
  },
}));

export { Container, ContainerX, Content, Scroll };
