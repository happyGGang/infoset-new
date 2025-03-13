import { styled } from '@mui/material';
import background from '../../../../assets/img/library_c_event_bg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

const Container = styled('div')(() => ({
  width: '23.7275rem',
  height: '42.18225rem',
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
  width: '20rem',
  height: '24.029rem',
  marginTop: '15.44rem',
  '.swiper-pagination': {
    bottom: '0',
  },
  '.swiper-pagination-bullet': {
    opacity: '1',
    width: '0.26363rem',
    height: '0.26363rem',
    background: '#ADB5BD',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  '.swiper-pagination-bullet-active': {
    background: '#333D4B',
  },
}));

const CustomSwiperSlide = styled(SwiperSlide)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& .box': {
    width: '19.338rem',
    height: '3.559rem',
    display: 'flex',
    background: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2.1975rem',
    gap: '0.22rem',
    marginBottom: '0.88rem',
  },
  '& .label': {
    color: '#6B7684',
    fontSize: '0.65925rem',
    fontWeight: 600,
    fontFamily: 'Pretendard-SemiBold',
    lineHeight: 'normal',
    textAlign: 'center',
    letterSpacing: '0.06594rem',
  },
  '& .value': {
    color: '#333D4B',
    fontSize: '1.01088rem',
    fontWeight: 600,
    fontFamily: 'Pretendard-SemiBold',
    lineHeight: 'normal',
    textAlign: 'center',
    letterSpacing: '0.10106rem',
  },
  '& .title': {
    color: '#333D4B',
    width: '16.8rem',
    fontSize: '2.637rem',
    fontWeight: 600,
    fontFamily: 'Pretendard-SemiBold',
    letterSpacing: '-0.06594rem',
    lineHeight: 'normal',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '3',
    display: '-webkit-box',
    marginTop: '0.88rem',
  },
}));

export { Container, CustomSwiperSlide, CustomSwiper };
