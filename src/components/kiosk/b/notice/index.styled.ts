import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_b_y_notice_bg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import backgroundX from '../../../../assets/img/kiosk_b_x_notice_bg.svg';

const Container = styled('div')(() => ({
  width: '23.7275rem',
  height: '42.18225rem',
  background: `url(${background}) center center no-repeat`,
  backgroundSize: 'cover',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
  '.animate': {
    animation: 'float-up 0.5s ease-out forwards',
  },
  '@keyframes float-up': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
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

const SelectedImage = styled('img')(() => ({
  margin: '4.39rem 0 0 2.28rem',
  width: '19.12481rem',
  height: '25.90469rem',
  boxShadow: '3.515px 3.515px 7.03px 0px rgba(0, 0, 0, 0.10)',
  borderRadius: '0.65856rem',
}));

const SmallSwiper = styled(Swiper)(() => ({
  width: '20.11381rem',
  height: '6.12rem',
  paddingLeft: '0.05rem',
  margin: '0.88rem 0 0 2.28rem',
  '.swiper-pagination': {
    left: '-0.4rem',
    bottom: '0.88rem',
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
    background: '#191F28',
  },
}));

const SmallSwiperSlide = styled(SwiperSlide)(() => ({
  '& img': {
    borderRadius: '0.2195rem',
    width: '2.72425rem',
    height: '3.73206rem',
    boxShadow: '3.515px 3.515px 7.03px 0px rgba(0, 0, 0, 0.10)',
    border: '1.5px solid transparent',
    cursor: 'pointer',
  },
}));

const ContainerX = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  background: `url(${backgroundX}) center center no-repeat`,
  backgroundSize: 'cover',
  '@keyframes float-up': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
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
  width: '61.71875rem',
  height: '30.34375rem',
  paddingTop: '3rem',
  margin: '4.81rem 0 0 10.4rem',
  '.swiper-pagination': {
    bottom: '0.88rem',
  },
  '.swiper-pagination-bullet': {
    opacity: '1',
    width: '0.46875rem',
    height: '0.46875rem',
    background: '#ADB5BD',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  '.swiper-pagination-bullet-active': {
    background: '#191F28',
  },
}));

const CustomSlide = styled(SwiperSlide)(() => ({
  '& img': {
    borderRadius: '0.78125rem',
    width: '18.75rem',
    height: '26.52344rem',
    boxShadow: '9.391px -15.652px 15.652px 1.252px rgba(0, 0, 0, 0.20)',
    cursor: 'pointer',
  },
}));

export {
  Container,
  SelectedImage,
  SmallSwiper,
  SmallSwiperSlide,
  ContainerX,
  CustomSwiper,
  CustomSlide,
};
