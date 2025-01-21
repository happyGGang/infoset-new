import { styled } from '@mui/material';
import background from '../../../../assets/img/library_c_living_bg.svg';
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
  width: '17.1405rem',
  height: '8.379rem',
  marginTop: '30rem',
  marginLeft: '3.3rem',
}));

const CustomSwiperSlide = styled(SwiperSlide)(() => ({
  display: 'flex',
  gap: '0.03rem',
  color: '#FFF',
  '& .label': {
    color: '#ADB5BD',
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
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '4',
    display: '-webkit-box',
    height: '1.875rem',
  },
}));

export { Container, CustomSwiperSlide, CustomSwiper };
