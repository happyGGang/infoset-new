import { styled } from '@mui/material';
import background from '../../../../assets/img/media_c_hours_information_bg.svg';
import boat from '../../../../assets/img/boat.svg';

const Container = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  background: `url(${background}) center center no-repeat`,
  backgroundSize: 'cover',
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

const Boat = styled('div')(() => ({
  width: '9.45313rem',
  height: '3.86719rem',
  background: `url(${boat}) center center no-repeat`,
  backgroundSize: 'cover',
  position: 'absolute',
  bottom: '2.66rem',
  left: '16.39rem',
  animation: 'boatMove 3s ease-in-out infinite',
  '@keyframes boatMove': {
    '0%': {
      transform: 'translateX(0)',
    },
    '50%': {
      transform: 'translateX(1rem)',
    },
    '100%': {
      transform: 'translateX(0)',
    },
  },
}));

const Header = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '68.7rem',
  padding: '1.56rem 3.12rem 1.17rem 3.12rem',
}));

const Wrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  '& .kr': {
    fontSize: '0.625rem',
    fontWeight: 600,
    color: '#191F28',
  },
  '& .en': {
    fontSize: '0.54688rem',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
    color: '#8B95A1',
    marginTop: '0.31rem',
    textTransform: 'uppercase',
  },
  '& .time': {
    fontSize: '1.17188rem',
    fontWeight: 400,
    fontFamily: 'Spoqa Han Sans Neo',
    color: '#191F28',
    letterSpacing: '0.09375rem',
    lineHeight: 'normal',
  },
  '& .date': {
    fontSize: '0.46875rem',
    fontWeight: 400,
    fontFamily: 'Spoqa Han Sans Neo',
    color: '#191F28',
    lineHeight: 'normal',
  },
}));

export { Container, Header, Wrapper, Boat };
