import { styled } from '@mui/material';
import background from '../../../../assets/img/media_b_notice_bg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

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

const CustomSwiper = styled(Swiper)(() => ({
  width: '64.10938rem',
  height: '29.22266rem',
  marginTop: '7.42rem',
  paddingLeft: '1rem',
}));

const CustomSwiperSlide = styled(SwiperSlide)(() => ({
  display: 'flex',
  flexDirection: 'column',
  '& img': {
    width: '17.57813rem',
    height: '24.80469rem',
    boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.20)',
    borderRadius: '0.78125rem',
  },
  '& .wrapper': {
    display: 'flex',
    gap: '0.59rem',
    marginTop: '1.54rem',
  },
  '& .index': {
    color: '#191F28',
    fontSize: '1.36719rem',
    fontWeight: 700,
    letterSpacing: '-0.02731rem',
    lineHeight: '100%',
    textOverflow: 'ellipsis',
  },
  '& .title': {
    color: '#191F28',
    fontSize: '1.01563rem',
    fontWeight: 500,
    letterSpacing: '-0.02031rem',
    lineHeight: '140%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '2',
    display: '-webkit-box',
    width: '15.23438rem',
  },
}));

export { Container, CustomSwiper, CustomSwiperSlide };
