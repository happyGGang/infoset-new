import { styled } from '@mui/material';
import background from '../../../../assets/img/media_c_line_bg.svg';
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

const CustomSwiper = styled(Swiper)(() => ({
  width: '75rem',
  height: '9.296888rem',
  margin: '7.44rem 0 0 5.39rem',
}));

const CustomSwiperSlide = styled(SwiperSlide)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const Title = styled('div')(() => ({
  color: '#FFF',
  fontFamily: 'SeoulHangangM',
  fontSize: '2.34375rem',
  fontWeight: 400,
  letterSpacing: '-0.04688rem',
  width: '42.1875rem',
  lineHeight: '150%',
  marginBottom: '1.17rem',
  height: '7rem',
  '@keyframes textAppear': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
}));

const Caption = styled('div')(() => ({
  color: '#EFF1F3',
  fontSize: '1.17188rem',
  fontWeight: 500,
  fontFamily: 'Pretendard-Medium',
}));

export {
  Container,
  CustomSwiper,
  CustomSwiperSlide,
  Title,
  Caption,
  Header,
  Wrapper,
};
