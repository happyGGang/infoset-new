import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_a_y_book_detail_bg.svg';
import backgroundX from '../../../../assets/img/kiosk_a_x_book_detail_bg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

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
}));

const SelectedBook = styled('div')(() => ({
  width: '11.11675rem',
  height: '11.11675rem',
  backgroundColor: '#FFFFFF',
  borderRadius: '50%',
  position: 'relative',
  marginTop: '5.03rem',
  marginLeft: '6.31rem',
  '& img': {
    width: '8.34856rem',
    height: '12.08344rem',
    borderRadius: '0.26363rem',
    boxShadow: '3.515px 3.515px 14.061px 1.406px rgba(0, 0, 0, 0.20)',
    position: 'absolute',
    objectFit: 'cover',
    top: '-0.64rem',
    left: '1.38rem',
  },
  '& .badge': {
    width: '2.32881rem',
    height: '2.32881rem',
    borderRadius: '50%',
    position: 'absolute',
    bottom: '1.03rem',
    right: '0.58rem',
    color: '#FFFFFF',
    backgroundColor: '#113B9E',
    fontWeight: 500,
    fontSize: '0.54925rem',
    letterSpacing: '-0.01375rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
}));

const Title = styled('div')(() => ({
  marginTop: '1.38rem',
  color: '#191F28',
  textAlign: 'center',
  fontSize: '1.01063rem',
  letterSpacing: '-0.02525rem',
  width: '15.09334rem',
  marginBottom: '1.19rem',
  fontWeight: 500,
  marginLeft: '4.31rem',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));

const Detail = styled('div')(() => ({
  display: 'flex',
  gap: '1.27rem',
  marginLeft: '5rem',
}));

const Wrapper = styled('div')(() => ({
  display: 'flex',
  gap: '0.18rem',
  marginBottom: '0.19rem',
}));

const LeftLabel = styled('div')(() => ({
  color: '#4E5968',
  fontSize: '0.52725rem',
  letterSpacing: '-0.01319rem',
  width: '1.52725rem',
  fontWeight: 400,
}));

const RightLabel = styled('div')(() => ({
  color: '#4E5968',
  fontSize: '0.52725rem',
  letterSpacing: '-0.01319rem',
  width: '2.30684rem',
  fontWeight: 400,
}));

const Value = styled('div')(() => ({
  width: '4.21823rem',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  color: '#191F28',
  fontSize: '0.52725rem',
  letterSpacing: '-0.01319rem',
  fontWeight: 500,
}));

const Trigger = styled('div')(() => ({
  width: '20.21231rem',
  color: '#FFFFFF',
  padding: '0.30756rem 0rem',
  fontSize: '0.52725rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  marginLeft: '1.76rem',
  marginTop: '0.96rem',
  cursor: 'pointer',
  marginBottom: '1.48rem',
  backgroundColor: '#6B7684',
  borderRadius: '0.10988rem',
}));

const Summary = styled('div')(() => ({
  color: '#252525',
  height: '3.69094rem',
  marginLeft: '1.76rem',
  fontSize: '0.57119rem',
  fontWeight: 400,
  lineHeight: '0.87881rem',
  width: '20.21231rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: '4',
  display: '-webkit-box',
  marginBottom: '1.5rem',
}));

const CustomSwiper = styled(Swiper)(() => ({
  width: '20.21231rem',
  height: '6.3rem',
  paddingLeft: '0.05rem',
  margin: '0 0 0 1.76rem',
  '.swiper-pagination': {
    bottom: '0',
  },
  '.swiper-pagination-bullet': {
    opacity: '1',
    width: '0.26363rem',
    height: '0.26363rem',
    background: '#8B95A1',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  '.swiper-pagination-bullet-active': {
    background: '#252525',
  },
}));

const CustomSlide = styled(SwiperSlide)(() => ({
  '& img': {
    width: '2.63638rem',
    height: '3.73488rem',
    borderRadius: '0.17575rem',
    boxShadow: '3.515px 3.515px 7.03px 0px rgba(0, 0, 0, 0.10)',
    cursor: 'pointer',
    marginBottom: '0.31rem',
    objectFit: 'cover',
  },
  '& .title': {
    width: '2.63638rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: '#191F28',
    fontWeight: 400,
    lineHeight: '140%',
    letterSpacing: '-0.00769rem',
    fontSize: '0.30756rem',
    marginBottom: '0.09rem',
    paddingLeft: '0.09rem',
  },
  '& .writer': {
    width: '2.63638rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: '#4E5968',
    fontWeight: 400,
    lineHeight: '140%',
    letterSpacing: '-0.00713rem',
    fontSize: '0.28563rem',
    paddingLeft: '0.09rem',
  },
}));

const ContainerX = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  background: `url(${backgroundX}) center center no-repeat`,
  backgroundSize: 'cover',
  display: 'flex',
  gap: '4.37rem',
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

const SelectedBookX = styled('div')(() => ({
  width: '19.76563rem',
  height: '19.76563rem',
  backgroundColor: '#FFFFFF',
  borderRadius: '50%',
  position: 'relative',
  marginTop: '8.59rem',
  marginLeft: '10.23rem',
  '& img': {
    width: '14.84375rem',
    height: '21.48438rem',
    borderRadius: '0.46875rem',
    boxShadow: '6.25px 6.25px 25px 2.5px rgba(0, 0, 0, 0.20)',
    position: 'absolute',
    objectFit: 'cover',
    top: '-1.13rem',
    left: '2.46rem',
  },
  '& .badge': {
    width: '4.14063rem',
    height: '4.14063rem',
    borderRadius: '50%',
    position: 'absolute',
    bottom: '1.25rem',
    right: '0.2rem',
    color: '#FFFFFF',
    backgroundColor: '#113B9E',
    fontWeight: 500,
    fontSize: '0.97656rem',
    letterSpacing: '-0.02444rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
}));

const TitleX = styled('div')(() => ({
  marginTop: '2.15rem',
  color: '#191F28',
  textAlign: 'center',
  fontSize: '1.60156rem',
  letterSpacing: '-0.04006rem',
  lineHeight: '140%',
  width: '19.76563rem',
  fontWeight: 500,
  marginLeft: '10.23rem',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: '2',
  display: '-webkit-box',
}));

const DetailX = styled('div')(() => ({
  display: 'flex',
  gap: '1.45rem',
  marginTop: '7.81rem',
}));

const WrapperX = styled('div')(() => ({
  display: 'flex',
  gap: '0.31rem',
  marginBottom: '0.32rem',
}));

const LeftLabelX = styled('div')(() => ({
  color: '#4E5968',
  fontSize: '0.9375rem',
  letterSpacing: '-0.01319rem',
  width: '2.96875rem',
  fontWeight: 400,
}));

const RightLabelX = styled('div')(() => ({
  color: '#4E5968',
  fontSize: '0.9375rem',
  letterSpacing: '-0.02344rem',
  width: '3.59375rem',
  fontWeight: 400,
}));

const ValueX = styled('div')(() => ({
  width: '14.14063rem',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  color: '#191F28',
  fontSize: '0.9375rem',
  letterSpacing: '-0.02344rem',
  fontWeight: 500,
}));

const TriggerX = styled('div')(() => ({
  width: '35.9375rem',
  color: '#FFFFFF',
  padding: '0.55rem 0rem',
  fontSize: '0.9375rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  marginTop: '1.78rem',
  cursor: 'pointer',
  marginBottom: '2.1rem',
  backgroundColor: '#6B7684',
  borderRadius: '0.19531rem',
}));

const SummaryX = styled('div')(() => ({
  color: '#252525',
  height: '6.5625rem',
  fontSize: '1.01563rem',
  fontWeight: 400,
  lineHeight: ' 1.5625rem',
  width: '35.9375rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: '4',
  display: '-webkit-box',
  marginBottom: '2.02rem',
}));

const CustomSwiperX = styled(Swiper)(() => ({
  width: '35.9375rem',
  height: '10.74219rem',
  paddingTop: '1.5rem',
  '.swiper-pagination': {
    bottom: '0',
  },
  '.swiper-pagination-bullet': {
    opacity: '1',
    width: '0.46875rem',
    height: '0.46875rem',
    background: '#8B95A1',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  '.swiper-pagination-bullet-active': {
    background: '#FFFFFF',
  },
}));

const CustomSlideX = styled(SwiperSlide)(() => ({
  '& img': {
    width: '4.6875rem',
    height: '6.64063rem',
    borderRadius: '0.3125rem',
    boxShadow: '3px 3px 5px 1px rgba(0, 0, 0, 0.20)',
    cursor: 'pointer',
    marginBottom: '0.55rem',
    objectFit: 'cover',
  },
  '& .title': {
    width: '4.6875rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: '#191F28',
    fontWeight: 400,
    lineHeight: '140%',
    letterSpacing: '-0.01369rem',
    fontSize: '0.54688rem',
    marginBottom: '0.16rem',
    paddingLeft: '0.16rem',
  },
  '& .writer': {
    width: '4.6875rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: '#4E5968',
    fontWeight: 400,
    lineHeight: '140%',
    letterSpacing: '-0.01269rem',
    fontSize: '0.50781rem',
    paddingLeft: '0.16rem',
  },
}));

export {
  Container,
  SelectedBook,
  Title,
  Detail,
  Wrapper,
  LeftLabel,
  RightLabel,
  Value,
  Trigger,
  Summary,
  CustomSwiper,
  CustomSlide,
  ContainerX,
  SelectedBookX,
  TitleX,
  DetailX,
  WrapperX,
  LeftLabelX,
  RightLabelX,
  ValueX,
  TriggerX,
  SummaryX,
  CustomSwiperX,
  CustomSlideX,
};
