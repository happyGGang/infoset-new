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
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: '1.49388rem',
  fontWeight: 300,
  lineHeight: 'normal',
  marginTop: '2.84rem',
  marginLeft: '3.02rem',
}));

const Date = styled('div')(() => ({
  color: '#FFFFFF',
  fontSize: '0.43938rem',
  fontWeight: 400,
  lineHeight: 'normal',
  marginLeft: '3.03rem',
  marginBottom: '3.7rem',
}));

const Message = styled('div')(() => ({
  color: '#191F28',
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

export { Container, Time, Date, Message, Caption };
