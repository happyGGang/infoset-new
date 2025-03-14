import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_c_y_notice_bg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import backgroundX from '../../../../assets/img/kiosk_c_x_notice_bg.svg';
import arrow from '../../../../assets/icon/swiper-arrow.svg';

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
  margin: '4.83rem 0 0 3.08rem',
  width: '17.575rem',
  height: '24.86863rem',
  borderRadius: '0.26363rem',
  boxShadow: '3.515px 3.515px 7.03px 0px rgba(0, 0, 0, 0.10)',
}));

const SmallSwiper = styled(Swiper)(() => ({
  width: '18.575rem',
  height: '5.09663rem',
  paddingLeft: '0.05rem',
  margin: '1.54rem 0 0 3.03rem',
  '.swiper-pagination': {
    left: '-0.4rem',
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

const SmallSwiperSlide = styled(SwiperSlide)(() => ({
  borderRadius: '0.08788rem',
  '& img': {
    width: '2.63625rem',
    height: '3.73469rem',
    boxShadow: '3.515px 3.515px 7.03px 0px rgba(0, 0, 0, 0.10)',
    border: '1.5px solid transparent',
    cursor: 'pointer',
    borderRadius: '0.08788rem',
    objectFit: 'contain',
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
  '.swiper_container': {
    width: '68.75rem',
    position: 'relative',
    margin: '8rem 0 0 6.25rem',
    '.swiper-button-prev': {
      background: `url(${arrow}) center center no-repeat`,
      backgroundSize: 'cover',
      width: '3.125rem',
      height: '3.125rem',
      zIndex: 10,
      transform: 'rotate(180deg)',
      fontSize: 0,
      border: 'none',
      '&::after': {
        display: 'none',
      },
    },
    '.swiper-button-next': {
      background: `url(${arrow}) center center no-repeat`,
      backgroundSize: 'cover',
      width: '3.125rem',
      height: '3.125rem',
      zIndex: 10,
      fontSize: 0,
      border: 'none',
      '&::after': {
        display: 'none',
      },
    },
  },
}));

const CustomSwiper = styled(Swiper)(() => ({
  height: '30.34375rem',
  width: '60.59375rem',
  paddingTop: '2rem',
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
    boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.20)',
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
