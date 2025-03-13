import { styled } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import background from '../../../../assets/img/library_c_new_bg.svg';

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
  '.time_date_wrapper': {
    zIndex: 1,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '1.32rem',
    right: '2.2rem',
  },
}));

const Row = styled('div')(() => ({
  display: 'flex',
  marginTop: '4.83rem',
  gap: '0',
}));

const CustomSwiper = styled(Swiper)(() => ({
  width: '15.84425rem',
  height: '34.40019rem',
  marginLeft: '2.2rem',
  '.swiper-pagination': {
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

const CustomSwiperSlide = styled(SwiperSlide)(() => ({
  '& img': {
    width: '13.84425rem',
    height: '20.48069rem',
    borderRadius: '0.26369rem',
    boxShadow: '8.79px 8.79px 8.79px 0px rgba(0, 0, 0, 0.15)',
    marginBottom: '2.11rem',
    objectFit: 'cover',
  },
  '& .title': {
    width: '13.84425rem',
    color: '#191F28',
    fontSize: '1.3185rem',
    fontWeight: 600,
    fontFamily: 'Pretendard-SemiBold',
    lineHeight: 'normal',
    letterSpacing: '-0.03296rem',
    marginBottom: '0.66rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '2',
    display: '-webkit-box',
    height: '3.125rem',
  },
  '& .summary': {
    height: '4rem',
    width: '13.84425rem',
    color: '#191F28',
    fontSize: '0.65925rem',
    fontWeight: 500,
    lineHeight: '150%',
    letterSpacing: '-0.0165rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '4',
    display: '-webkit-box',
  },
  '& .writer': {
    color: '#191F28',
    fontSize: '0.65925rem',
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: '-0.0165rem',
    marginBottom: '0.66rem',
    '& span': {
      color: '#4E5968',
    },
  },
}));

const VerticalSwiper = styled(Swiper)(() => ({
  width: '5rem',
  height: '32.7rem',
  marginLeft: '1rem',
}));

const VerticalSwiperSlide = styled(SwiperSlide)(() => ({
  '& img': {
    width: '2.74688rem',
    height: '3.9555rem',
    borderRadius: '0.17581rem',
    boxShadow: '4.922px 7.032px 17.58px 1.406px rgba(0, 0, 0, 0.10)',
  },
}));

export {
  Container,
  CustomSwiperSlide,
  CustomSwiper,
  Row,
  VerticalSwiper,
  VerticalSwiperSlide,
};
