import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_c_y_book_detail_bg.svg';
import { Swiper } from 'swiper/react';
import arrow from '../../../../assets/icon/swiper-arrow.svg';

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
    fontFamily: 'Pretendard',
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
  fontFamily: 'Pretendard',
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
  fontFamily: 'Pretendard',
  fontSize: '0.52725rem',
  letterSpacing: '-0.01319rem',
  width: '1.52725rem',
  fontWeight: 400,
}));

const RightLabel = styled('div')(() => ({
  color: '#4E5968',
  fontFamily: 'Pretendard',
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
  fontFamily: 'Pretendard',
  fontSize: '0.52725rem',
  letterSpacing: '-0.01319rem',
  fontWeight: 500,
}));

const Trigger = styled('div')(() => ({
  width: '20.21231rem',
  color: '#FFFFFF',
  padding: '0.30756rem 0rem',
  fontFamily: 'Pretendard',
  fontSize: '0.52725rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
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
  lineHeight: '0.87875rem',
  marginLeft: '1.76rem',
}));

const Summary = styled('div')(() => ({
  color: '#252525',
  marginLeft: '1.76rem',
  fontFamily: 'Pretendard',
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
    fontFamily: 'Pretendard',
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
};
