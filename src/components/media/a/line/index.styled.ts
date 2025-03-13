import { styled } from '@mui/material';
import background from '../../../../assets/img/media_a_line_bg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

const Container = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  background: `url(${background}) center center no-repeat`,
  backgroundSize: 'cover',
  display: 'flex',
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

const CustomSwiper = styled(Swiper)(() => ({
  width: '75rem',
  height: '9.296888rem',
  marginTop: '17.98rem',
}));

const CustomSwiperSlide = styled(SwiperSlide)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Title = styled('div')(() => ({
  color: '#FFF',
  fontFamily: 'SeoulHangangCm-Regular',
  fontSize: '2.34375rem',
  fontWeight: 400,
  letterSpacing: '-0.04688rem',
  width: '42.1875rem',
  lineHeight: '150%',
  textAlign: 'center',
  marginBottom: '1.17rem',
  height: '7rem',
  '@keyframes textAppear': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
}));

const Caption = styled('div')(() => ({
  color: '#ADB5BD',
  fontSize: '0.9375rem',
  textAlign: 'center',
  fontWeight: 500,
  fontFamily: 'Pretendard-Medium',
}));

export { Container, CustomSwiper, CustomSwiperSlide, Title, Caption };
