import { styled } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import background from '../../../../assets/img/library_b_new_bg.svg';

const Container = styled('div')(() => ({
  width: '23.7275rem',
  height: '42.18225rem',
  background: `url(${background}) center center no-repeat`,
  backgroundSize: 'cover',
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
  width: '19.77769rem',
  height: '26.33719rem',
  marginTop: '4.36rem',
}));

const CustomSwiperSlide = styled(SwiperSlide)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& img': {
    width: '10.1085rem',
    height: '15.47038rem',
    borderRadius: '0.4395rem',
    boxShadow: '3.516px 5.274px 12.306px 1.758px rgba(0, 0, 0, 0.25)',
    marginBottom: '1.1rem',
  },
  '.book_title': {
    width: '16.48125rem',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textAlign: 'center',
    color: '#191F28',
    fontWeight: 600,
    fontFamily: 'Pretendard-SemiBold',
    fontSize: '1.09875rem',
    lineHeight: 'normal',
    letterSpacing: '-0.02744rem',
    marginBottom: '1.09rem',
  },
  '.detail_box': {
    width: '17.3rem',
    borderRadius: '0.35163rem',
    background: '#E5DDD8',
    padding: '0.47rem 1.32rem 0.47rem 1.32rem',
    display: 'flex',
    gap: '2.19rem',
    marginBottom: '1.1rem',
  },
  '.left': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  '.right': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  '.wrapper': {
    display: 'flex',
    gap: '0.42rem',
  },
  '.label': {
    color: '#6B7684',
    fontSize: '0.52738rem',
    fontWeight: 500,
    lineHeight: '160%',
  },
  '.value': {
    color: '#191F28',
    fontSize: '0.52738rem',
    fontWeight: 500,
    lineHeight: '160%',
  },
  '.summary': {
    width: '19.7775rem',
    height: '3.62588rem',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '4',
    display: '-webkit-box',
    color: '#191F28',
    fontSize: '0.57138rem',
    letterSpacing: ' -0.01431rem',
    lineHeight: '160%',
    fontWeight: '400',
  },
}));

const SmallSwiper = styled(Swiper)(() => ({
  width: '20.5rem',
  paddingLeft: '0.3rem',
  height: '6rem',
  marginLeft: '1.8rem',
  marginTop: '1.76rem',
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
    background: '#191F28',
  },
}));

const SmallSwiperSlide = styled(SwiperSlide)(() => ({
  '& img': {
    width: '2.72488rem',
    height: '3.91156rem',
    borderRadius: '0.17581rem',
    boxShadow: '3.516px 3.516px 8.79px 1.406px rgba(0, 0, 0, 0.20)',
  },
}));

export {
  Container,
  CustomSwiperSlide,
  CustomSwiper,
  SmallSwiper,
  SmallSwiperSlide,
};
