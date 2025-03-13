import { styled } from '@mui/material';
import background from '../../../../assets/img/media_b_line_bg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

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

const CustomSwiper = styled(Swiper)(() => ({
  width: '75rem',
  height: '9.296888rem',
  marginTop: '2.15rem',
}));

const CustomSwiperSlide = styled(SwiperSlide)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Title = styled('div')(() => ({
  color: '#191F28',
  fontFamily: 'NanumMyeongjo',
  fontSize: '2.34375rem',
  fontWeight: 400,
  letterSpacing: '-0.04294rem',
  width: '42.5625rem',
  lineHeight: '150%',
  textAlign: 'center',
  marginBottom: '1.17rem',
  height: '6.5rem',
  '@keyframes textAppear': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
}));

const Caption = styled('div')(() => ({
  color: '#6B7684',
  fontSize: '0.9375rem',
  textAlign: 'center',
  fontWeight: 500,
}));

const ContentTitle = styled('div')(() => ({
  color: '#8B95A1',
  fontSize: '1.17188rem',
  textAlign: 'center',
  fontWeight: 500,
  marginTop: '14.45rem',
}));

export {
  ContentTitle,
  Container,
  CustomSwiper,
  CustomSwiperSlide,
  Title,
  Caption,
};
