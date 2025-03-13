import { styled } from '@mui/material';
import background from '../../../../assets/img/media_c_event_bg.svg';
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
    fontFamily: 'Pretendard-SemiBold',
    color: '#FFFFFF',
  },
  '& .en': {
    fontSize: '0.54688rem',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
    color: '#8B95A1',
    marginTop: '0.31rem',
  },
  '& .time': {
    fontSize: '1.17188rem',
    fontWeight: 400,
    fontFamily: 'SpoqaHanSansNeo-Regular',
    color: '#FFFFFF',
    letterSpacing: '0.09375rem',
    lineHeight: 'normal',
  },
  '& .date': {
    fontSize: '0.46875rem',
    fontWeight: 400,
    fontFamily: 'SpoqaHanSansNeo-Regular',
    color: '#FFFFFF',
    lineHeight: 'normal',
  },
}));

const ContentTitle = styled('div')(() => ({
  color: '#FFEC8B',
  fontSize: '1.01563rem',
  letterSpacing: '0.20313rem',
  fontWeight: 700,
  fontFamily: 'Pretendard-Bold',
  textAlign: 'center',
  lineHeight: '100%',
  marginTop: '6.98rem',
  marginBottom: '1.56rem',
}));

const CustomSwiper = styled(Swiper)(() => ({
  width: '75rem',
  height: '18.43163rem',
  '.swiper-pagination': {},
  '.swiper-pagination-bullet': {
    opacity: '1',
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
  gap: '1.95rem',
  alignItems: 'center',
}));

const DetailWrapper = styled('div')(() => ({
  display: 'flex',
  gap: '3.12rem',
  borderRadius: '0.78125rem',
  background: 'rgba(0, 0, 0, 0.20)',
  height: '3.10938rem',
  width: '39.95313rem',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Detail = styled('div')(() => ({
  padding: '1.17188rem 3.125rem',
  color: '#F7F8FA',
  fontSize: '1.40625rem',
  fontWeight: 500,
  fontFamily: 'Pretendard-Medium',
  lineHeight: '140%',
  display: 'flex',
  alignItems: 'center',
  '& .label': {
    color: '#FFEC8B',
    fontSize: '1.17188rem',
    fontWeight: 600,
    fontFamily: 'Pretendard-SemiBold',
    letterSpacing: '0.11719rem',
    marginRight: '0.98rem',
  },
}));

const Title = styled('div')(() => ({
  width: '39.0625rem',
  color: '#FFFFFF',
  fontSize: '4.6875rem',
  letterSpacing: '-0.07813rem',
  fontWeight: 600,
  fontFamily: 'Pretendard-SemiBold',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: '2',
  display: '-webkit-box',
  textAlign: 'center',
  whiteSpace: 'pre-line',
}));

const Star1 = styled('div')(() => ({
  position: 'absolute',
  backgroundColor: '#FFFFFF',
  animation: 'shooting-star 4s ease-out infinite',
  top: '1.5rem',
  left: '11.72rem',
  width: '0.36875rem',
  height: '0.36875rem',
  borderRadius: '50%',
  animationDelay: '0s',
  boxShadow: '0 0 15px 8px rgba(255, 255, 255, 0.3)',
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
  backgroundColor: '#FFFFFF',
  borderRadius: '50%',
  animation: 'shooting-star 4s ease-out infinite',
  top: '1rem',
  left: '39.06rem',
  width: '0.26875rem',
  height: '0.26875rem',
  animationDelay: '2s',
  boxShadow: '0 0 15px 8px rgba(255, 255, 255, 0.3)',
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
  backgroundColor: '#FFFFFF',
  borderRadius: '50%',
  animation: 'shooting-star 4s ease-out infinite',
  top: '2rem',
  left: ' 64.5rem',
  width: '0.36875rem',
  height: '0.36875rem',
  animationDelay: '1s',
  boxShadow: '0 0 15px 8px rgba(255, 255, 255, 0.3)',
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
  CustomSwiper,
  CustomSwiperSlide,
  DetailWrapper,
  Detail,
  Title,
  Header,
  Wrapper,
  ContentTitle,
  Star1,
  Star2,
  Star3,
};
