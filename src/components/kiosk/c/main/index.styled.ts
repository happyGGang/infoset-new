import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_c_y_main_bg.svg';
import backgroundX from '../../../../assets/img/kiosk_c_x_main_bg.svg';
import arrow from '../../../../assets/icon/kiosk_c_main_arrow.svg';

const Container = styled('div')(() => ({
  width: '23.7275rem',
  height: '42.18225rem',
  background: `url(${background}) center center no-repeat`,
  backgroundSize: 'cover',
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
  fontFamily: 'Spoqa Han Sans Neo',
  fontSize: '1.49388rem',
  fontWeight: 300,
  lineHeight: 'normal',
  marginTop: '2.84rem',
  marginLeft: '3.02rem',
}));

const Date = styled('div')(() => ({
  color: '#FFFFFF',
  fontFamily: 'Pretendard',
  fontSize: '0.43938rem',
  fontWeight: 400,
  lineHeight: 'normal',
  marginLeft: '3.03rem',
  marginBottom: '3.7rem',
}));

const Message = styled('div')(() => ({
  color: '#191F28',
  fontFamily: 'Pretendard',
  fontSize: '1.7575rem',
  fontWeight: 300,
  letterSpacing: '-0.0439rem',
  lineHeight: 'normal',
  marginBottom: '0.61rem',
  marginLeft: '2.94rem',
  animation: 'float-up 1.5s ease-out forwards',
  '& span': {
    fontWeight: 500,
  },
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
  fontFamily: 'Roboto',
  fontSize: '0.43938rem',
  fontWeight: 500,
  lineHeight: '120%',
  letterSpacing: '0.04394rem',
  textTransform: 'uppercase',
  marginBottom: '11.41rem',
  marginLeft: '3.05rem',
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
  width: '2.63625rem',
  height: '2.63625rem',
  background: `url(${arrow}) center center no-repeat`,
  backgroundSize: 'cover',
  marginLeft: '2.94rem',
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
  fontFamily: 'Spoqa Han Sans Neo',
  fontSize: '2.65625rem',
  fontWeight: 300,
  lineHeight: 'normal',
  marginTop: '5.06rem',
  marginLeft: '5.37rem',
}));

const DateX = styled('div')(() => ({
  color: '#FFFFFF',
  fontFamily: 'Pretendard',
  fontSize: '0.78125rem',
  fontWeight: 400,
  lineHeight: 'normal',
  marginLeft: '5.39rem',
  marginBottom: '3.68rem',
}));

const MessageX = styled('div')(() => ({
  color: '#191F28',
  fontFamily: 'Pretendard',
  fontSize: '3.125rem',
  fontWeight: 300,
  letterSpacing: '-0.07813rem',
  lineHeight: 'normal',
  marginBottom: '1.13rem',
  marginLeft: '5.23rem',
  animation: 'float-up 1.5s ease-out forwards',
  '& span': {
    fontWeight: 500,
  },
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
  fontFamily: 'Roboto',
  fontSize: '0.78125rem',
  fontWeight: 500,
  lineHeight: '120%',
  letterSpacing: '0.07813rrem',
  textTransform: 'uppercase',
  marginBottom: '2.34rem',
  marginLeft: '5.23rem',
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
  width: '4.6875rem',
  height: '4.6875rem',
  background: `url(${arrow}) center center no-repeat`,
  backgroundSize: 'cover',
  marginLeft: '5.37rem',
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
