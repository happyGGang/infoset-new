import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_b_y_main_bg.svg';
import backgroundX from '../../../../assets/img/kiosk_b_x_main_bg.svg';

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
  fontFamily: 'Montserrat',
  fontSize: '2.63438rem',
  fontWeight: 400,
  lineHeight: 'normal',
  marginBottom: '0.26rem',
  textAlign: 'center',
  marginTop: '5.48rem',
}));

const Date = styled('div')(() => ({
  color: '#FFFFFF',
  fontSize: '0.79031rem',
  fontWeight: 400,
  lineHeight: 'normal',
  marginBottom: '20.62rem',
  textAlign: 'center',
}));

const Message = styled('div')(() => ({
  color: '#191F28',
  fontSize: '1.31719rem',
  fontWeight: 500,
  fontFamily: 'Pretendard-Medium',
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
  fontSize: '0.48294rem',
  fontWeight: 400,
  lineHeight: '150%',
  textAlign: 'center',
  letterSpacing: '0.02413rem',
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

const ContainerX = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  paddingLeft: '6.25rem',
  background: `url(${backgroundX}) center center no-repeat`,
  backgroundSize: 'contain',
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
  textAlign: 'center',
  fontFamily: 'Montserrat',
  fontSize: '3.51563rem',
  fontWeight: 400,
  lineHeight: 'normal',
  marginBottom: '0.47rem',
  marginTop: '5.08rem',
}));

const DateX = styled('div')(() => ({
  color: '#FFFFFF',
  textAlign: 'center',
  fontSize: '1.17188rem',
  fontWeight: 400,
  lineHeight: 'normal',
  marginBottom: '23.01rem',
}));

const MessageX = styled('div')(() => ({
  color: '#191F28',
  fontSize: '2.34375rem',
  fontWeight: 500,
  fontFamily: 'Pretendard-Medium',
  textAlign: 'center',
  lineHeight: '140%',
  marginBottom: '0.39rem',
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
  color: '#8B95A1',
  fontSize: '0.85938rem',
  textAlign: 'center',
  fontWeight: 400,
  lineHeight: '150%',
  letterSpacing: '0.02413rem',
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

export {
  Container,
  Time,
  Date,
  Message,
  Caption,
  ContainerX,
  TimeX,
  DateX,
  MessageX,
  CaptionX,
};
