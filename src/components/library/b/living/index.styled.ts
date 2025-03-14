import { styled } from '@mui/material';
import background from '../../../../assets/img/library_b_living_bg.svg';
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

const Time = styled('div')(() => ({
  color: '#FFF',
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: '2.637rem',
  fontWeight: 400,
  lineHeight: 'normal',
  textAlign: 'center',
  marginTop: '6.59rem',
  marginBottom: '0.26rem',
}));

const Date = styled('div')(() => ({
  color: '#FFF',
  fontSize: '0.79113rem',
  fontWeight: 400,
  lineHeight: 'normal',
  textAlign: 'center',
}));

const CustomSwiper = styled(Swiper)(() => ({
  width: '19.92556rem',
  height: '6rem',
  marginTop: '18.9rem',
  marginLeft: '2.2rem',
}));

const CustomSwiperSlide = styled(SwiperSlide)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  '& .label': {
    color: '#ADB5BD',
    fontSize: '0.65925rem',
    fontWeight: 500,
    lineHeight: '140%',
    letterSpacing: '-0.01319rem',
  },
  '& .value': {
    color: '#FFF',
    fontSize: '0.65925rem',
    fontWeight: 500,
    lineHeight: '140%',
    letterSpacing: '-0.0165rem',
    width: '15rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));

export { Container, Time, Date, CustomSwiperSlide, CustomSwiper };
