import { styled } from '@mui/material';
import background from '../../../../assets/img/media_a_book_information_bg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

const Container = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  background: `url(${background}) center center no-repeat`,
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
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

const Section = styled('div')(() => ({
  display: 'flex',
  gap: '5.13rem',
  marginTop: '5.7rem',
  marginLeft: '2rem',
}));

const LeftSwiper = styled(Swiper)(() => ({
  width: '28.79713rem',
  height: '11.66019rem',
}));

const RightSwiper = styled(Swiper)(() => ({
  width: '28.95863rem',
  height: '13.56953rem',
}));

const LeftSlide = styled(SwiperSlide)(() => ({
  display: 'flex',
  gap: '1.25rem',
}));

const RightSlide = styled(SwiperSlide)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.55rem',
  '& img': {
    width: '8.08594rem',
    height: '11.66019rem',
    borderRadius: '0.40406rem',
    objectFit: 'cover',
  },
  '& div': {
    color: '#ADB5BD',
    fontSize: '0.78125rem',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
    lineHeight: '140%',
    width: '8.08594rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    padding: '0 0.16rem 0 0.16rem',
  },
}));

const LeftWrapper = styled('div')(() => ({
  width: '8.08594rem',
  height: '11.66019rem',
  '& img': {
    width: '8.08594rem',
    height: '11.66019rem',
    borderRadius: '0.40406rem',
    objectFit: 'cover',
  },
}));

const RightWrapper = styled('div')(() => ({
  '& .title': {
    color: '#FFFFFF',
    fontSize: '1.5625rem',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
    lineHeight: '140%',
    width: '14.625rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '2',
    display: '-webkit-box',
    height: '4.3745rem',
  },
  '& .writer': {
    color: '#6B7684',
    fontSize: '0.9375rem',
    fontWeight: 400,
    lineHeight: '150%',
    width: '19.45681rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginTop: '0.45rem',
    marginBottom: '0.34rem',
  },
  '& .summary': {
    color: '#FFFFFF',
    fontSize: '0.85938rem',
    fontWeight: 400,
    lineHeight: '150%',
    width: '19.45681rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '4',
    display: '-webkit-box',
  },
}));

export {
  Container,
  Section,
  LeftSwiper,
  LeftSlide,
  LeftWrapper,
  RightWrapper,
  RightSwiper,
  RightSlide,
};
