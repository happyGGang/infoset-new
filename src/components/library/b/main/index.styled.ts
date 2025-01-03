import { styled } from '@mui/material';
import background from '../../../../assets/img/library_a_main_bg.svg';

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

const Time = styled('div')(() => ({
  color: '#FFFFFF',
  fontFamily: 'Century Gothic',
  fontSize: '2.637rem',
  fontWeight: 400,
  lineHeight: 'normal',
  marginBottom: '0.26rem',
  textAlign: 'center',
  marginTop: '5.49rem',
}));

const Date = styled('div')(() => ({
  color: '#FFFFFF',
  fontFamily: 'Pretendard',
  fontSize: '0.79113rem',
  fontWeight: 400,
  lineHeight: 'normal',
  marginBottom: '24.09rem',
  textAlign: 'center',
}));

const Message = styled('div')(() => ({
  color: '#191F28',
  fontFamily: 'Pretendard',
  fontSize: '1.3185rem',
  fontWeight: 500,
  lineHeight: '140%',
  marginBottom: '0.66rem',
  textAlign: 'center',
  animation: 'float-up 1.5s ease-out forwards',

  '@keyframes float-up': {
    '0%': {
      opacity: 0,
      transform: 'translateY(2rem)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

const Caption = styled('div')(() => ({
  color: '#8B95A1',
  fontFamily: 'Pretendard',
  fontSize: '0.57138rem',
  fontWeight: 400,
  lineHeight: '150%',
  textAlign: 'center',
  animation: 'float-up 1.5s ease-out forwards',

  '@keyframes float-up': {
    '0%': {
      opacity: 0,
      transform: 'translateY(2rem)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

export { Container, Time, Date, Message, Caption };
