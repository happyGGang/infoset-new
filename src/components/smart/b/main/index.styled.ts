import { styled } from '@mui/material';
import background from '../../../../assets/img/smart_b_y_main_bg.svg';
import backgroundX from '../../../../assets/img/smart_b_x_main_bg.svg';

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
  overflow: 'hidden',

  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },

  '@keyframes floating': {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' }, // 위로 10px 이동
    '100%': { transform: 'translateY(0)' },
  },

  '& .character': {
    width: '22.56181rem',
    height: '18.46044rem',
    position: 'absolute',
    top: '8.91rem',
    left: '-1.63rem',
    animation: 'floating 2.5s ease-in-out infinite',
  },
  '& .book': {
    width: '5.13438rem',
    height: '6.40988rem',
    position: 'absolute',
    top: '6.2rem',
    right: '3.67rem',
    animation: 'floating 3s ease-in-out infinite',
  },
  '& .search': {
    width: '4.573rem',
    height: '4.77088rem',
    position: 'absolute',
    top: '20.51rem',
    right: '3.22rem',
    animation: 'floating 2s ease-in-out infinite',
  },
}));

const ContainerX = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  background: `url(${backgroundX}) center center no-repeat`,
  backgroundSize: 'cover',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
  opacity: 0,
  overflow: 'hidden',
  animation: 'fadeIn 1s ease-out forwards',
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },

  '@keyframes floating': {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' }, // 위로 10px 이동
    '100%': { transform: 'translateY(0)' },
  },

  '& .character': {
    width: '33.25rem',
    height: '27rem',
    position: 'absolute',
    top: '11.29rem',
    left: '-4.22rem',
    animation: 'floating 2.5s ease-in-out infinite',
  },
  '& .book': {
    width: '9.36719rem',
    height: '10.30081rem',
    position: 'absolute',
    top: '7.48rem',
    left: '22.85rem',
    animation: 'floating 3s ease-in-out infinite',
  },
  '& .search': {
    width: '6.41406rem',
    height: '6.74613rem',
    position: 'absolute',
    top: '28.44rem',
    left: '25.98rem',
    animation: 'floating 2s ease-in-out infinite',
  },
}));

export { Container, ContainerX };
