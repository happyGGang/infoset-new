import { styled } from '@mui/material';
import background from '../../../../assets/img/media_c_main_bg.svg';

const Container = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  background: `url(${background}) center center no-repeat`,
  backgroundSize: 'cover',
  display: 'flex',
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
    fontFamily: 'Pretendard-SemiBold',
    color: '#FFFFFF',
  },
  '& .en': {
    fontSize: '0.54688rem',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
    color: '#8B95A1',
    marginTop: '0.31rem',
  },
  '& .time': {
    fontSize: '1.17188rem',
    fontWeight: 400,
    fontFamily: 'SpoqaHanSansNeo-Regular',
    color: '#FFFFFF',
    letterSpacing: '0.09375rem',
    lineHeight: 'normal',
  },
  '& .date': {
    fontSize: '0.46875rem',
    fontWeight: 400,
    fontFamily: 'SpoqaHanSansNeo-Regular',
    color: '#FFFFFF',
    lineHeight: 'normal',
  },
}));

const Caption = styled('div')(() => ({
  color: '#FFF',
  fontFamily: 'Roboto',
  fontSize: '0.78125rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '0.07813rem',
  textTransform: 'uppercase',
  marginLeft: '8.01rem',
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
  color: '#191F28',
  fontSize: '2.73438rem',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: '150%',
  letterSpacing: '-0.06838rem',
  marginTop: '8.5rem',
  marginBottom: '1.2rem',
  marginLeft: '7.81rem',
  '& span': {
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
  },
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
  background: '#000',
  width: '72.3rem',
  overflow: 'hidden',
  padding: '0.78125rem 1.36719rem',
  display: 'flex',
}));

const TickerMessage = styled('div')(() => ({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  color: '#FFF',
  fontSize: '0.85938rem',
  fontWeight: 500,
  fontFamily: 'Pretendard-Medium',
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

export { Container, Header, Wrapper, Caption, Message, Ticker, TickerMessage };
