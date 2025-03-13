import { styled } from '@mui/material';
import background from '../../../../assets/img/media_b_event_bg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

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

const ContentTitle = styled('div')(() => ({
  color: '#B87045',
  marginTop: '10.71rem',
  marginLeft: '6.66rem',
  fontSize: '1.01563rem',
  letterSpacing: '0.20313rem',
  fontWeight: 700,
  lineHeight: '100%',
  marginBottom: '1.56rem',
  textTransform: 'uppercase',
}));

const CustomSwiper = styled(Swiper)(() => ({
  width: '39.0625rem',
  height: '17.65038rem',
  margin: '0 0 0 6.3rem',
  '.swiper-pagination': {
    left: '-16.5rem',
  },
  '.swiper-pagination-bullet': {
    width: '0.46875rem',
    height: '0.46875rem',
    background: '#FFFFFF',
    opacity: '1',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  '.swiper-pagination-bullet-active': {
    background: '#ADB5BD',
  },
}));

const CustomSwiperSlide = styled(SwiperSlide)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.95rem',
}));

const DetailWrapper = styled('div')(() => ({
  display: 'flex',
  gap: '3.12rem',
}));

const Detail = styled('div')(() => ({
  color: '#6B7684',
  fontSize: '1.40625rem',
  fontWeight: 500,
  fontFamily: 'Pretendard-Medium',
  lineHeight: '100%',
  display: 'flex',
  alignItems: 'center',
  '& .label': {
    color: '#B87045',
    fontSize: '1.17188rem',
    fontWeight: 600,
    letterSpacing: '0.11719rem',
    marginRight: '0.98rem',
  },
}));

const Title = styled('div')(() => ({
  width: '39.0625rem',
  color: '#191F28',
  fontSize: '3.90625rem',
  letterSpacing: '-0.07813rem',
  fontWeight: 600,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: '2',
  display: '-webkit-box',
  whiteSpace: 'pre-line',
  height: '10.125rem',
}));

export {
  Container,
  ContentTitle,
  CustomSwiper,
  CustomSwiperSlide,
  DetailWrapper,
  Detail,
  Title,
};
