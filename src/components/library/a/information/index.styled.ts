import { styled } from '@mui/material';
import background from '../../../../assets/img/library_a_information_bg.svg';

const Container = styled('div')(() => ({
  width: '23.7275rem',
  height: '42.18225rem',
  background: `url(${background}) center center no-repeat`,
  backgroundSize: 'cover',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
  '.animate': {
    animation: 'float-up 0.5s ease-out forwards',
  },
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
  '.time_date_wrapper': {
    zIndex: 1,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '1.32rem',
    right: '2.2rem',
  },
}));

const Time = styled('div')(() => ({
  color: '#191F28',
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: '0.83506rem',
  fontWeight: 400,
  lineHeight: 'normal',
  textAlign: 'center',
}));

const Date = styled('div')(() => ({
  color: '#191F28',
  fontSize: '0.30763rem',
  fontWeight: 400,
  lineHeight: 'normal',
  textAlign: 'center',
}));

export { Container, Date, Time };
