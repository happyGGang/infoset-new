import { styled } from '@mui/material';
import background from '../../../../assets/img/library_b_event_bg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

const Container = styled('div')(() => ({
  width: '23.7275rem',
  height: '42.18225rem',
  background: `url(${background}) center center no-repeat`,
  backgroundSize: 'cover',
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
  '.caption': {
    color: '#B87045',
    fontSize: '0.57138rem',
    fontWeight: 700,
    fontFamily: 'Pretendard-Bold',
    lineHeight: '100%',
    letterSpacing: '0.11425rem',
    marginTop: '7.91rem',
    marginLeft: '2.42rem',
    marginBottom: '0.67rem',
  },
}));

const CustomSwiper = styled(Swiper)(() => ({
  width: '19.8985rem',
  height: '18.2rem',
  '.swiper-pagination': {
    bottom: '0',
    left: '-8.4rem',
  },
  '.swiper-pagination-bullet': {
    opacity: '1',
    width: '0.26363rem',
    height: '0.26363rem',
    background: '#8B95A1',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  '.swiper-pagination-bullet-active': {
    background: '#FFFFFF',
  },
}));

const CustomSwiperSlide = styled(SwiperSlide)(() => ({
  display: 'flex',
  flexDirection: 'column',
  '& .box': {
    width: '19.338rem',
    height: '3.559rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '2.1975rem',
    gap: '0.22rem',
  },
  '& .label': {
    color: '#B87045',
    fontSize: '0.65925rem',
    fontWeight: 600,
    fontFamily: 'Pretendard-SemiBold',
    lineHeight: 'normal',
    letterSpacing: '0.06594rem',
  },
  '& .value': {
    color: '#191F28',
    fontSize: '1.01088rem',
    fontWeight: 600,
    fontFamily: 'Pretendard-SemiBold',
    lineHeight: 'normal',
    letterSpacing: '0.10106rem',
  },
  '& .title': {
    height: 'calc(1.2em * 3)',
    color: '#191F28',
    width: '15.5rem',
    fontSize: '2.1975rem',
    fontWeight: 600,
    fontFamily: 'Pretendard-SemiBold',
    letterSpacing: '-0.05494rem',
    lineHeight: '130%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '3',
    display: '-webkit-box',
    marginTop: '0.67rem',
    marginBottom: '1.26rem',
  },
}));

export { Container, CustomSwiperSlide, CustomSwiper };
