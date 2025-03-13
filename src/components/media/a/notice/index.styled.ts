import { Skeleton, styled } from '@mui/material';
import background from '../../../../assets/img/media_a_notice_bg.svg';
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

const CustomSwiper = styled(Swiper)(() => ({
  width: '64.6875rem',
  height: '23.1875rem',
  marginTop: '10.74rem',
}));

const CustomSwiperSlide = styled(SwiperSlide)(() => ({
  display: 'flex',
  flexDirection: 'column',
  '& img': {
    width: '14.64844rem',
    height: '20.70313rem',
    boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.20)',
  },
  '& div': {
    color: '#FFFFFF',
    fontSize: '0.9375rem',
    fontWeight: 500,
    letterSpacing: '-0.02344rem',
    lineHeight: '140%',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'nowrap',
    width: '14.64844rem',
    marginTop: '1.17rem',
  },
}));

const ImgSkeleton = styled(Skeleton)(() => ({
  width: '14.64844rem',
  height: '20.70313rem',
  borderRadius: '0.2rem',
}));

const TextSkeleton = styled(Skeleton)(() => ({
  width: '13.33594rem',
  height: '1.3125rem',
  marginTop: '1.17rem',
  borderRadius: '0.2rem',
}));

export {
  Container,
  CustomSwiper,
  CustomSwiperSlide,
  ImgSkeleton,
  TextSkeleton,
};
