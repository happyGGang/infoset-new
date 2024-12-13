import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_b_y_book_detail_bg.svg';
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

const ContentWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '0.65856rem',
  backgroundColor: '#FFFFFF',
  marginTop: '5.71rem',
  marginLeft: '1.98rem',
  width: ' 17.99781rem',
  height: '22.61175rem',
  paddingRight: '1.76rem',
}));

const Row = styled('div')(() => ({
  display: 'flex',
}));

const SelectedBook = styled('div')(() => ({
  width: '8.78125rem',
  height: '8.78125rem',
  backgroundColor: '#EEE',
  borderRadius: '50%',
  position: 'relative',
  marginTop: '2.7rem',
  marginLeft: '1.32rem',
  '& img': {
    width: '6.80544rem',
    height: '10.42775rem',
    boxShadow: '1.756px 3.512px 8.781px 0px rgba(0, 0, 0, 0.25)',
    position: 'absolute',
    objectFit: 'cover',
    top: '-0.82rem',
    right: '0.99rem',
  },
  '& .badge': {
    width: '1.97575rem',
    height: '1.97575rem',
    borderRadius: '50%',
    position: 'absolute',
    top: '-1.26rem',
    right: '0.55rem',
    color: '#FFFFFF',
    backgroundColor: '#029951',
    fontWeight: 600,
    fontFamily: 'Pretendard',
    fontSize: '0.43906rem',
    lineHeight: 'normal',
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
  marginTop: '2.54rem',
  color: '#191F28',
  fontFamily: 'Pretendard',
  fontSize: '0.79031rem',
  width: '4.93944rem',
  lineHeight: 'normal',
  marginBottom: '0.45rem',
  fontWeight: 600,
  marginLeft: '1.1rem',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));

const Writer = styled('div')(() => ({
  marginTop: '0.45rem',
  color: '#6B7684',
  fontFamily: 'Pretendard',
  fontSize: '0.48294rem',
  width: '4.93944rem',
  lineHeight: 'normal',
  marginBottom: '0.79rem',
  fontWeight: 500,
  marginLeft: '1.1rem',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));

const Detail = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '1.1rem',
}));

const Wrapper = styled('div')(() => ({
  display: 'flex',
  gap: '0.4rem',
}));

const Label = styled('div')(() => ({
  color: '#191F28',
  fontFamily: 'Pretendard',
  fontSize: '0.43906rem',
  width: '1.5625rem',
  fontWeight: 600,
  lineHeight: '180%',
}));

const Value = styled('div')(() => ({
  width: '3.3125rem',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  color: '#6B7684',
  fontFamily: 'Pretendard',
  fontSize: '0.43906rem',
  lineHeight: '180%',
  fontWeight: 500,
}));

const Trigger = styled('div')(() => ({
  width: '4.93944rem',
  color: '#FFFFFF',
  fontFamily: 'Pretendard',
  fontSize: '0.43906rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  marginLeft: '1.1rem',
  marginTop: '0.68rem',
  cursor: 'pointer',
  backgroundColor: '#191F28',
  borderRadius: '5.48831rem',
  padding: '0.4rem 0 0.4rem 0',
}));

const SummaryTitle = styled('div')(() => ({
  color: '#191F28',
  fontFamily: 'Pretendard',
  fontSize: '0.48294rem',
  lineHeight: '180%',
  fontWeight: 700,
  marginLeft: '1.76rem',
  marginTop: '2.55rem',
}));

const Summary = styled('div')(() => ({
  color: '#252525',
  height: '5.81756rem',
  overflowY: 'scroll',
  marginLeft: '1.76rem',
  fontFamily: 'Pretendard',
  fontSize: '0.48294rem',
  fontWeight: 400,
  lineHeight: '180%',
  marginTop: '0.4rem',
  paddingRight: '0.22rem',
  '&::-webkit-scrollbar': {
    width: '0.08781rem',
  },
  '&::-webkit-scrollbar-track': {
    background: '#E5E8EB',
    borderRadius: '0.04388',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#8B95A1',
    borderRadius: '0.04388',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#8B95A1',
  },
}));

const CustomSwiper = styled(Swiper)(() => ({
  width: '21.75781rem',
  height: '6.3rem',
  margin: '1.76rem 0 0 1.98rem',
}));

const CustomSlide = styled(SwiperSlide)(() => ({
  '& img': {
    width: '2.63638rem',
    height: '3.73488rem',
    borderRadius: '0.17575rem',
    boxShadow: '3.515px 3.515px 7.03px 0px rgba(0, 0, 0, 0.10)',
    border: '1.5px solid transparent',
    cursor: 'pointer',
    marginBottom: '0.31rem',
    objectFit: 'cover',
  },
  '& .title': {
    width: '2.63638rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontFamily: 'Pretendard',
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
    fontFamily: 'Pretendard',
    color: '#4E5968',
    fontWeight: 400,
    lineHeight: '140%',
    letterSpacing: '-0.00713rem',
    fontSize: '0.28563rem',
    paddingLeft: '0.09rem',
  },
}));

export {
  Row,
  ContentWrapper,
  Container,
  SelectedBook,
  Title,
  Detail,
  Wrapper,
  Label,
  Value,
  Trigger,
  Summary,
  CustomSwiper,
  CustomSlide,
  Writer,
  SummaryTitle,
};
