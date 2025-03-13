import { styled } from '@mui/material';
import background from '../../../../assets/img/media_a_main_bg.svg';

const Container = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  background: `url(${background}) center center no-repeat`,
  backgroundSize: 'cover',
  display: 'flex',
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
  color: '#191F28',
  fontFamily: 'Century Gothic',
  fontSize: '3.51563rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  marginBottom: '0.47rem',
  paddingTop: '6.71rem',
}));

const Date = styled('div')(() => ({
  color: '#191F28',
  fontSize: '1.17188rem',
  fontStyle: 'normal',
  fontWeight: 500,
  fontFamily: 'Pretendard-Medium',
  lineHeight: 'normal',
  marginBottom: '13.21rem',
}));

const Caption = styled('div')(() => ({
  color: '#FFF',
  fontSize: '1.17188rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  letterSpacing: '0.11719rem',
  textTransform: 'uppercase',
  marginBottom: '1.03rem',
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

const Message = styled('div')(() => ({
  color: '#FFF',
  fontSize: '2.34375rem',
  fontStyle: 'normal',
  fontWeight: 500,
  fontFamily: 'Pretendard-Medium',
  lineHeight: '150%',
  letterSpacing: '-0.04688rem',
  textTransform: 'uppercase',
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

const Ticker = styled('div')(() => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  display: 'flex',
  background: '#000',
  width: '72.3rem',
  overflow: 'hidden',
  padding: '0.78125rem 1.36719rem',
}));

const TickerMessage = styled('div')(() => ({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  color: '#FFF',
  fontSize: '0.85938rem',
  fontFamily: 'Pretendard-Medium',
  fontWeight: 500,
  lineHeight: 'normal',
  animation: 'tickerScroll 60s linear infinite',
  '@keyframes tickerScroll': {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(-100%)',
    },
  },
}));

export { Container, Time, Date, Caption, Message, Ticker, TickerMessage };
