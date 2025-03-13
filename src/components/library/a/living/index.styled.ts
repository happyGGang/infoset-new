import { styled } from '@mui/material';
import background from '../../../../assets/img/library_a_living_bg.svg';
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
  '.swiper_container': {
    width: '23.733rem',
    height: '6.5925rem',
    background: 'rgba(0, 0, 0, 0.40)',
    backdropFilter: 'blur(7.031999588012695px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.66rem',
    marginTop: '34rem',
  },
  '.badge': {
    width: '1.9rem',
    height: '1.0rem',
    borderRadius: '0.26rem',
    background: '#333D4B',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    fontSize: '0.52738rem',
    lineHeight: 'normal',
    letterSpacing: '-0.01319rem',
    marginTop: '1rem',
    marginLeft: '2.2rem',
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
  width: '19.338rem',
  height: '1.79rem',
}));

const CustomSwiperSlide = styled(SwiperSlide)(() => ({
  display: 'flex',
  flexDirection: 'column',
  '& .label': {
    color: '#8B95A1',
    fontSize: '0.52738rem',
    fontWeight: 400,
    lineHeight: '140%',
    letterSpacing: '-0.01319rem',
    marginBottom: '0.11rem',
  },
  '& .value': {
    color: '#FFF',
    fontSize: '0.65925rem',
    fontWeight: 400,
    lineHeight: '140%',
    letterSpacing: '-0.0165rem',
    width: '19.338rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));

export { Container, Time, Date, CustomSwiperSlide, CustomSwiper };
