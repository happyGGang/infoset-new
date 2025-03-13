import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_b_y_book_detail_bg.svg';
import backgroundX from '../../../../assets/img/kiosk_b_x_book_detail_bg.svg';
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
    fontFamily: 'Pretendard-SemiBold',
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
  fontSize: '0.79031rem',
  width: '4.93944rem',
  lineHeight: 'normal',
  marginBottom: '0.45rem',
  fontWeight: 600,
  fontFamily: 'Pretendard-SemiBold',
  marginLeft: '1.1rem',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));

const Writer = styled('div')(() => ({
  marginTop: '0.45rem',
  color: '#6B7684',
  fontSize: '0.48294rem',
  width: '4.93944rem',
  lineHeight: 'normal',
  marginBottom: '0.79rem',
  fontWeight: 500,
  fontFamily: 'Pretendard-Medium',
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
  fontSize: '0.43906rem',
  width: '1.5625rem',
  fontWeight: 600,
  fontFamily: 'Pretendard-SemiBold',
  lineHeight: '180%',
}));

const Value = styled('div')(() => ({
  width: '3.3125rem',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  color: '#6B7684',
  fontSize: '0.43906rem',
  lineHeight: '180%',
  fontWeight: 500,
  fontFamily: 'Pretendard-Medium',
}));

const Trigger = styled('div')(() => ({
  width: '4.93944rem',
  color: '#FFFFFF',
  fontSize: '0.43906rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  fontFamily: 'Pretendard-SemiBold',
  marginLeft: '1.1rem',
  marginTop: '0.68rem',
  cursor: 'pointer',
  backgroundColor: '#191F28',
  borderRadius: '5.48831rem',
  padding: '0.4rem 0 0.4rem 0',
}));

const SummaryTitle = styled('div')(() => ({
  color: '#191F28',
  fontSize: '0.48294rem',
  lineHeight: '180%',
  fontWeight: 700,
  fontFamily: 'Pretendard-Bold',
  marginLeft: '1.76rem',
  marginTop: '2.55rem',
}));

const Summary = styled('div')(() => ({
  color: '#252525',
  height: '5.81756rem',
  overflowY: 'scroll',
  marginLeft: '1.76rem',
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
    borderRadius: '0.04388rem',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#8B95A1',
    borderRadius: '0.04388rem',
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
  position: 'relative',
  opacity: 0,
  display: 'flex',
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

const ContentWrapperX = styled('div')(() => ({
  display: 'flex',
  borderRadius: '0.65856rem',
  backgroundColor: '#FFFFFF',
  marginTop: '7.03rem',
  marginLeft: '9.77rem',
  width: ' 53.63281rem',
  height: '27.34375rem',
  position: 'relative',
}));

const RowX = styled('div')(() => ({
  display: 'flex',
  gap: '2.54rem',
}));

const SelectedBookX = styled('div')(() => ({
  width: '15.625rem',
  height: '15.625rem',
  backgroundColor: '#EEE',
  borderRadius: '50%',
  position: 'relative',
  marginTop: '5.86rem',
  marginLeft: '2.93rem',
  '& img': {
    width: '12.10938rem',
    height: '18.55469rem',
    boxShadow: '3.125px 6.25px 15.625px 0px rgba(0, 0, 0, 0.25)',
    position: 'absolute',
    objectFit: 'cover',
    top: '-1.46rem',
    left: '1.73rem',
  },
  '& .badge': {
    width: '3.51563rem',
    height: '3.51563rem',
    borderRadius: '50%',
    position: 'absolute',
    top: '-2.25rem',
    right: '0.79rem',
    color: '#FFFFFF',
    backgroundColor: '#029951',
    fontWeight: 600,
    fontFamily: 'Pretendard-SemiBold',
    fontSize: '0.78125rem',
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

const TitleX = styled('div')(() => ({
  marginTop: '3.52rem',
  color: '#191F28',
  fontSize: '1.40625rem',
  width: '27rem',
  lineHeight: 'normal',
  marginBottom: '0.58rem',
  fontWeight: 600,
  fontFamily: 'Pretendard-SemiBold',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));

const WriterX = styled('div')(() => ({
  marginTop: '0.45rem',
  color: '#6B7684',
  fontSize: '0.85938rem',
  lineHeight: 'normal',
  marginBottom: '1.21rem',
  fontWeight: 500,
  fontFamily: 'Pretendard-Medium',
}));

const DetailX = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const WrapperX = styled('div')(() => ({
  display: 'flex',
  gap: '0.4rem',
}));

const LabelX = styled('div')(() => ({
  color: '#191F28',
  fontSize: '0.78125rem',
  width: '3.0875rem',
  fontWeight: 600,
  fontFamily: 'Pretendard-SemiBold',
  lineHeight: '180%',
}));

const ValueX = styled('div')(() => ({
  color: '#6B7684',
  fontSize: '0.78125rem',
  lineHeight: '180%',
  fontWeight: 500,
  fontFamily: 'Pretendard-Medium',
}));

const TriggerX = styled('div')(() => ({
  width: '9rem',
  color: '#FFFFFF',
  fontSize: '0.78125rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  fontFamily: 'Pretendard-SemiBold',
  cursor: 'pointer',
  backgroundColor: '#191F28',
  borderRadius: '9.76563rem',
  padding: '0.7rem 0 0.7rem 0',
  position: 'absolute',
  top: '11.8rem',
  right: '2.93rem',
}));

const SummaryTitleX = styled('div')(() => ({
  color: '#191F28',
  fontSize: '0.85938rem',
  lineHeight: '180%',
  fontWeight: 700,
  fontFamily: 'Pretendard-Bold',
  marginTop: '2.23rem',
}));

const SummaryX = styled('div')(() => ({
  color: '#252525',
  height: '6.4rem',
  overflowY: 'scroll',
  fontSize: '0.85938rem',
  fontWeight: 400,
  width: '28.90625rem',
  lineHeight: '180%',
  marginTop: '0.4rem',
  paddingRight: '0.54rem',
  '&::-webkit-scrollbar': {
    width: '0.16113rem',
  },
  '&::-webkit-scrollbar-track': {
    background: '#E5E8EB',
    borderRadius: '0.07813rem',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#8B95A1',
    borderRadius: '0.07813rem',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#8B95A1',
  },
}));

const CustomSwiperX = styled(Swiper)(() => ({
  width: '7rem',
  height: '39.25rem',
  margin: '1.93rem 0 0 2.53rem',
  paddingTop: '1rem',
  paddingLeft: '1rem',
}));

const CustomSlideX = styled(SwiperSlide)(() => ({
  '& img': {
    width: '4.57031rem',
    height: '6.48438rem',
    borderRadius: '0.3125rem',
    boxShadow: '6.114px 6.114px 24.457px 2.446px rgba(0, 0, 0, 0.20)',
    border: '1.5px solid transparent',
    cursor: 'pointer',
    marginBottom: '0.54rem',
    objectFit: 'cover',
  },
  '& .title': {
    width: '4.57031rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: '#191F28',
    fontWeight: 400,
    lineHeight: '140%',
    letterSpacing: '-0.01369rem',
    fontSize: '0.54688rem',
    marginBottom: '0.12rem',
    paddingLeft: '0.15rem',
  },
  '& .writer': {
    width: '4.57031rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: '#4E5968',
    fontWeight: 400,
    lineHeight: '140%',
    letterSpacing: '-0.01369rem',
    fontSize: '0.50781rem',
    paddingLeft: '0.15rem',
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
  RowX,
  ContentWrapperX,
  ContainerX,
  SelectedBookX,
  TitleX,
  DetailX,
  WrapperX,
  LabelX,
  ValueX,
  TriggerX,
  SummaryX,
  CustomSwiperX,
  CustomSlideX,
  WriterX,
  SummaryTitleX,
};
