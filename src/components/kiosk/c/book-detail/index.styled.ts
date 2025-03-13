import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_c_y_book_detail_bg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import arrow from '../../../../assets/icon/swiper-arrow.svg';
import backgroundX from '../../../../assets/img/kiosk_c_x_book_detail_bg.svg';

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
  borderRadius: '50%',
  position: 'relative',
  marginTop: '5.03rem',
  marginLeft: '6.31rem',
  '& img': {
    width: '8.34856rem',
    height: '12.08344rem',
    borderRadius: '0.26363rem',
    boxShadow: '0px 1.757px 14.06px 0px rgba(0, 0, 0, 0.20)',
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
  fontFamily: 'Pretendard-SemiBold',
  marginLeft: '1.76rem',
  marginTop: '0.96rem',
  cursor: 'pointer',
  marginBottom: '0.88rem',
  backgroundColor: '#ADB5BD',
  borderRadius: '0.17575rem',
}));

const SummaryTitle = styled('div')(() => ({
  color: '#4E5968',
  fontSize: '0.52725rem',
  fontWeight: 600,
  fontFamily: 'Pretendard-SemiBold',
  lineHeight: '0.87875rem',
  marginLeft: '1.76rem',
}));

const Summary = styled('div')(() => ({
  color: '#252525',
  marginLeft: '1.76rem',
  fontSize: '0.57119rem',
  fontWeight: 400,
  lineHeight: '0.87881rem',
  width: '20.21231rem',
  height: '3.5rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: '4',
  display: '-webkit-box',
  marginBottom: '1.5rem',
}));

const CustomSwiper = styled(Swiper)(() => ({
  width: '21.56275rem',
  height: '6.3rem',
  '.swiper-button-prev': {
    background: `url(${arrow}) center center no-repeat`,
    backgroundSize: 'cover',
    width: '1.0545rem',
    height: '1.0545rem',
    zIndex: 10,
    transform: 'rotate(180deg)',
    '&::after': {
      display: 'none',
    },
  },
  '.swiper-button-next': {
    background: `url(${arrow}) center center no-repeat`,
    backgroundSize: 'cover',
    width: '1.0545rem',
    height: '1.0545rem',
    zIndex: 10,
    '&::after': {
      display: 'none',
    },
  },
}));

const CustomSlide = styled('div')(() => ({
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
    color: '#191F28',
    fontWeight: 500,
    letterSpacing: '-0.00881rem',
    fontSize: '0.3515rem',
    marginBottom: '0.09rem',
    paddingLeft: '0.09rem',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '2',
    display: '-webkit-box',
  },
}));

const Row = styled('div')(() => ({
  display: 'flex',
  marginLeft: '1.9rem',
  gap: '1rem',
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
  '.summary_title': {
    color: '#4E5968',
    fontSize: '0.9375rem',
    fontWeight: 400,
    letterSpacing: '-0.02344rem',
    lineHeight: 'normal',
    marginBottom: '0.39rem',
  },
  '.swiper-container': {
    position: 'relative',
    width: '35.9375rem',
    '.swiper-button-prev': {
      background: `url(${arrow}) center center no-repeat`,
      backgroundSize: 'cover',
      width: '1.875rem',
      height: '1.875rem',
      zIndex: 10,
      left: '0',
      transform: 'rotate(180deg)',
      fontSize: 0,
      border: 'none',
      '&::after': {
        display: 'none',
      },
    },
    '.swiper-button-next': {
      background: `url(${arrow}) center center no-repeat`,
      backgroundSize: 'cover',
      width: '1.875rem',
      height: '1.875rem',
      right: '0',
      zIndex: 10,
      fontSize: 0,
      border: 'none',
      '&::after': {
        display: 'none',
      },
    },
  },
}));

const SelectedBookX = styled('div')(() => ({
  width: '19.76563rem',
  height: '19.76563rem',
  borderRadius: '50%',
  position: 'relative',
  marginTop: '7.25rem',
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
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: '2',
  display: '-webkit-box',
}));

const DetailX = styled('div')(() => ({
  display: 'flex',
  gap: '1.45rem',
  marginTop: '6.25rem',
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
  fontFamily: 'Pretendard-SemiBold',
  marginTop: '1.78rem',
  cursor: 'pointer',
  marginBottom: '2.1rem',
  backgroundColor: '#ADB5BD',
  borderRadius: '0.19531rem',
}));

const SummaryX = styled('div')(() => ({
  color: '#252525',
  height: '7.5625rem',
  fontSize: '1.01563rem',
  fontWeight: 400,
  lineHeight: ' 1.5625rem',
  width: '35.9375rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: '5',
  display: '-webkit-box',
  marginBottom: '2.02rem',
}));

const CustomSwiperX = styled(Swiper)(() => ({
  width: '32.625rem',
  height: '10.74219rem',
  paddingTop: '1.5rem',
  paddingLeft: '1rem',
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
  SummaryTitle,
  Row,
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
