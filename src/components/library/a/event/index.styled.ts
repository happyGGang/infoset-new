import { styled } from '@mui/material';
import background from '../../../../assets/img/library_a_event_bg.svg';
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
  '.time_date_wrapper': {
    zIndex: 1,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '1.32rem',
    right: '2.2rem',
  },
}));

const Time = styled('div')(() => ({
  color: '#FFF',
  fontFamily: 'Century Gothic',
  fontSize: '0.83506rem',
  fontWeight: 400,
  lineHeight: 'normal',
  textAlign: 'center',
}));

const Date = styled('div')(() => ({
  color: '#FFF',
  fontSize: '0.30763rem',
  fontWeight: 400,
  lineHeight: 'normal',
  textAlign: 'center',
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
  alignItems: 'center',
  '& .box': {
    width: '19.338rem',
    height: '3.559rem',
    display: 'flex',
    border: '0.527px solid rgba(229, 232, 235, 0.50)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2.1975rem',
    gap: '0.22rem',
    marginBottom: '0.88rem',
  },
  '& .label': {
    color: '#8B95A1',
    fontSize: '0.65925rem',
    fontWeight: 600,
    fontFamily: 'Pretendard-SemiBold',
    lineHeight: 'normal',
    textAlign: 'center',
    letterSpacing: '0.06594rem',
  },
  '& .value': {
    color: '#FFF',
    fontSize: '1.01088rem',
    fontWeight: 600,
    fontFamily: 'Pretendard-SemiBold',
    lineHeight: 'normal',
    textAlign: 'center',
    letterSpacing: '0.10106rem',
  },
  '& .title': {
    color: '#FFF',
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

export { Container, Time, Date, CustomSwiperSlide, CustomSwiper };
