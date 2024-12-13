import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_a_y_main_bg.svg';
import backgroundX from '../../../../assets/img/kiosk_a_x_main_bg.svg';
import arrow from '../../../../assets/icon/kiosk_a_main_arrow.svg';

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
  fontSize: '2.63638rem',
  fontWeight: 400,
  lineHeight: 'normal',
  marginBottom: '0.26rem',
  textAlign: 'center',
  marginTop: '6.43rem',
}));

const Date = styled('div')(() => ({
  color: '#FFFFFF',
  fontFamily: 'Pretendard',
  fontSize: '0.79094rem',
  fontWeight: 400,
  lineHeight: 'normal',
  marginBottom: '1.72rem',
  textAlign: 'center',
}));

const Message = styled('div')(() => ({
  color: '#FFFFFF',
  fontFamily: 'Pretendard',
  fontSize: '2.63638rem',
  fontWeight: 500,
  lineHeight: 'normal',
  marginBottom: '0.44rem',
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
  color: '#FFFFFF',
  fontFamily: 'Pretendard',
  fontSize: '0.65913rem',
  fontWeight: 600,
  lineHeight: 'normal',
  marginBottom: '18.17rem',
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

const Arrow = styled('div')(() => ({
  width: '3.51519rem',
  height: '3.51519rem',
  background: `url(${arrow}) center center no-repeat`,
  backgroundSize: 'cover',
  marginLeft: '10.11rem',
  animation: 'bounce 1s ease-in-out infinite',
  cursor: 'pointer',
  '@keyframes bounce': {
    '0%, 100%': {
      transform: 'translateX(0)',
    },
    '50%': {
      transform: 'translateX(0.5rem)',
    },
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

const TimeX = styled('div')(() => ({
  color: '#FFFFFF',
  fontFamily: 'Century Gothic',
  fontSize: '4.6875rem',
  fontWeight: 400,
  lineHeight: 'normal',
  marginBottom: '0.47rem',
  textAlign: 'center',
  marginTop: '7.39rem',
}));

const DateX = styled('div')(() => ({
  color: '#FFFFFF',
  fontFamily: 'Pretendard',
  fontSize: '1.40625rem',
  fontWeight: 400,
  lineHeight: 'normal',
  marginBottom: '3.07rem',
  textAlign: 'center',
}));

const MessageX = styled('div')(() => ({
  color: '#FFFFFF',
  fontFamily: 'Pretendard',
  fontSize: '4.6875rem',
  fontWeight: 500,
  lineHeight: 'normal',
  marginBottom: '0.78rem',
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

const CaptionX = styled('div')(() => ({
  color: '#FFFFFF',
  fontFamily: 'Pretendard',
  fontSize: '1.17188rem',
  fontWeight: 600,
  lineHeight: 'normal',
  marginBottom: '7.89rem',
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

const ArrowX = styled('div')(() => ({
  width: '6.25rem',
  height: '6.25rem',
  background: `url(${arrow}) center center no-repeat`,
  backgroundSize: 'cover',
  marginLeft: '34.38rem',
  animation: 'bounce 1s ease-in-out infinite',
  cursor: 'pointer',
  '@keyframes bounce': {
    '0%, 100%': {
      transform: 'translateX(0)',
    },
    '50%': {
      transform: 'translateX(0.5rem)',
    },
  },
}));

export {
  Container,
  Time,
  Date,
  Message,
  Caption,
  Arrow,
  ContainerX,
  TimeX,
  DateX,
  MessageX,
  CaptionX,
  ArrowX,
};
