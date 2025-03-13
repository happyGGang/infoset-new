import { styled } from '@mui/material';
import background from '../../../../assets/img/media_a_event_bg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

const Container = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  background: `url(${background}) center center no-repeat`,
  backgroundSize: 'cover',
  display: 'flex',
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
  width: '75rem',
  height: '27.10938rem',
  marginTop: '16.6rem',
  '.swiper-pagination': {
    bottom: '3.89rem !important',
  },
  '.swiper-pagination-bullet': {
    width: '0.46875rem',
    height: '0.46875rem',
    background: '#ADB5BD',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  '.swiper-pagination-bullet-active': {
    background: '#FFFFFF',
  },
}));

const CustomSwiperSlide = styled(SwiperSlide)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.04rem',
  alignItems: 'center',
}));

const DetailWrapper = styled('div')(() => ({
  display: 'flex',
  gap: '1.56rem',
}));

const Detail = styled('div')(() => ({
  borderRadius: '3.90625rem',
  border: '0.938px solid rgba(229, 232, 235, 0.50)',
  padding: '1.17188rem 3.125rem',
  color: '#FFFFFF',
  fontSize: '1.79688rem',
  fontWeight: 600,
  width: '20rem',
  letterSpacing: '0.17969rem',
  display: 'flex',
  alignItems: 'center',
  '& .label': {
    color: '#8B95A1',
    fontSize: '1.17188rem',
    fontWeight: 600,
    letterSpacing: '0.11719rem',
    marginRight: '0.94rem',
  },
}));

const Title = styled('div')(() => ({
  width: '50.3125rem',
  color: '#FFFFFF',
  fontSize: '4.6875rem',
  letterSpacing: '-0.11719rem',
  fontWeight: 600,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: '2',
  display: '-webkit-box',
  textAlign: 'center',
  whiteSpace: 'pre-line',
  height: '11.25rem',
}));

export {
  Container,
  CustomSwiper,
  CustomSwiperSlide,
  DetailWrapper,
  Detail,
  Title,
};
