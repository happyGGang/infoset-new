import { styled } from '@mui/material';
import background from '../../../../assets/img/media_c_notice_bg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import star from '../../../../assets/img/star.svg';

const Container = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
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

const Header = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '68.7rem',
  padding: '1.56rem 3.12rem 1.17rem 3.12rem',
}));

const Wrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  '& .kr': {
    fontSize: '0.625rem',
    fontWeight: 600,
    color: '#FFFFFF',
  },
  '& .en': {
    fontSize: '0.54688rem',
    fontWeight: 500,
    color: '#8B95A1',
    marginTop: '0.31rem',
  },
  '& .time': {
    fontSize: '1.17188rem',
    fontWeight: 400,
    fontFamily: 'Spoqa Han Sans Neo',
    color: '#FFFFFF',
    letterSpacing: '0.09375rem',
    lineHeight: 'normal',
  },
  '& .date': {
    fontSize: '0.46875rem',
    fontWeight: 400,
    fontFamily: 'Spoqa Han Sans Neo',
    color: '#FFFFFF',
    lineHeight: 'normal',
  },
}));

const BigSwiper = styled(Swiper)(() => ({
  width: '49.23831rem',
  height: '25.97656rem',
  margin: '2.74rem 0 0 10.02rem',
}));

const BigSlide = styled(SwiperSlide)(() => ({
  width: '49.23831rem',
  height: '25.97656rem',
  borderRadius: '0.46875rem',
  display: 'flex',
  gap: '3.54rem',
  '& img': {
    width: '18.35938rem',
    height: '25.97656rem',
    borderRadius: '0.46875rem',
    objectFit: 'cover',
  },
  '& .index': {
    color: '#6B7684',
    fontFamily: 'Spoqa Han Sans Neo',
    fontSize: '3.90625rem',
    fontWeight: 100,
    lineHeight: '120%',
  },
  '& .title': {
    color: '#FFF',
    fontFamily: 'Spoqa Han Sans Neo',
    fontSize: '1.95313rem',
    fontWeight: 500,
    lineHeight: '140%',
    width: '27.34375',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}));

const SmallSwiper = styled(Swiper)(() => ({
  width: '34.375rem',
  height: '12.15563rem',
  position: 'absolute',
  top: '21.5rem',
  right: '8.83rem',
}));

const SmallSlide = styled(SwiperSlide)(() => ({
  width: '7.42188rem',
  height: '12.15563rem',
  borderRadius: '0.46875rem',
  '& img': {
    width: '7.42188rem',
    height: '10.50781rem',
    borderRadius: '0.46875rem',
    objectFit: 'cover',
  },
  '& .index': {
    color: '#ADB5BD',
    fontFamily: 'Spoqa Han Sans Neo',
    fontSize: '0.9375rem',
    fontWeight: 300,
    lineHeight: '120%',
    marginBottom: '0.52rem',
  },
}));

const Star1 = styled('div')(() => ({
  position: 'absolute',
  background: `url(${star}) center center no-repeat`,
  animation: 'shooting-star 4s ease-out infinite',
  backgroundSize: 'cover',
  top: '0',
  left: '11.72rem',
  width: '2.34rem',
  height: '2.34rem',
  animationDelay: '0s',
  '@keyframes shooting-star': {
    '0%': {
      opacity: '1',
      transform: 'translate(0, 0) scale(1)',
    },
    '70%': {
      opacity: '1',
      transform: 'translate(-10rem, 10rem) scale(0.5) rotate(45deg)',
    },
    '100%': {
      opacity: '0',
      transform: 'translate(-10rem, 10rem) scale(0)',
    },
  },
}));

const Star2 = styled('div')(() => ({
  position: 'absolute',
  background: `url(${star}) center center no-repeat`,
  animation: 'shooting-star 4s ease-out infinite',
  backgroundSize: 'cover',
  top: '1rem',
  left: '39.06rem',
  width: '2.73rem',
  height: '2.73rem',
  animationDelay: '2s',
  '@keyframes shooting-star': {
    '0%': {
      opacity: '1',
      transform: 'translate(0, 0) scale(1)',
    },
    '70%': {
      opacity: '1',
      transform: 'translate(-10rem, 10rem) scale(0.5) rotate(45deg)',
    },
    '100%': {
      opacity: '0',
      transform: 'translate(-10rem, 10rem) scale(0)',
    },
  },
}));

const Star3 = styled('div')(() => ({
  position: 'absolute',
  background: `url(${star}) center center no-repeat`,
  animation: 'shooting-star 4s ease-out infinite',
  backgroundSize: 'cover',
  top: '2rem',
  left: ' 64.5rem',
  width: '2.78rem',
  height: '2.78rem',
  animationDelay: '1s',
  '@keyframes shooting-star': {
    '0%': {
      opacity: '1',
      transform: 'translate(0, 0) scale(1)',
    },
    '70%': {
      opacity: '1',
      transform: 'translate(-10rem, 10rem) scale(0.5) rotate(45deg)',
    },
    '100%': {
      opacity: '0',
      transform: 'translate(-10rem, 10rem) scale(0)',
    },
  },
}));

export {
  Container,
  Header,
  Wrapper,
  BigSwiper,
  BigSlide,
  SmallSwiper,
  SmallSlide,
  Star1,
  Star2,
  Star3,
};
