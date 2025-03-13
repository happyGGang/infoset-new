import { styled } from '@mui/material';
import background from '../../../../assets/img/library_c_notice_bg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

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
  height: '27.045rem',
  boxShadow: '3.515px 3.515px 7.03px 0px rgba(0, 0, 0, 0.10)',
  borderRadius: '0.26369rem',
}));

const SmallSwiper = styled(Swiper)(() => ({
  width: '20.11381rem',
  height: '7rem',
  paddingLeft: '0.05rem',
  margin: '0.88rem 0 0 2.28rem',
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
  '& img': {
    borderRadius: '0.26369rem',
    width: '2.72425rem',
    height: '3.85575rem',
    boxShadow: '3.515px 3.515px 7.03px 0px rgba(0, 0, 0, 0.10)',
    border: '1.5px solid transparent',
  },
}));

const Ticker = styled('div')(() => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  display: 'flex',
  background: '#000',
  width: '21.1rem',
  overflow: 'hidden',
  padding: '0.41rem 1.32rem',
}));

const TickerMessage = styled('div')(() => ({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  color: '#FFF',
  fontSize: '0.48344rem',
  fontWeight: 500,
  lineHeight: 'normal',
  animation: 'tickerScroll 60s linear infinite',
  '@keyframes tickerScroll': {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(-100%)',
    },
  },
}));

export {
  Container,
  SelectedImage,
  SmallSwiper,
  SmallSwiperSlide,
  Ticker,
  TickerMessage,
};
