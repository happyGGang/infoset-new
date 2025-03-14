import { styled } from '@mui/material';
import background from '../../../../assets/img/smart_a_y_detail_bg.svg';
import backgroundX from '../../../../assets/img/smart_a_x_detail_bg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
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
    width: '8.35669rem',
    height: '12.09519rem',
    borderRadius: '0.26363rem',
    boxShadow: '3.519px 3.519px 14.074px 1.407px rgba(0, 0, 0, 0.20)',
    position: 'absolute',
    objectFit: 'cover',
    top: '-0.64rem',
    left: '1.39rem',
  },
  '& .badge': {
    width: '2.33106rem',
    height: '2.33106rem',
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
  marginTop: '1.36rem',
  color: '#FFF',
  textAlign: 'center',
  fontSize: '0.87963rem',
  letterSpacing: '-0.022rem',
  width: '18.69256rem',
  marginBottom: '1.19rem',
  fontWeight: 500,
  marginLeft: '2.53rem',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));

const Details = styled('div')(() => ({
  display: 'flex',
  gap: '5rem',
  marginLeft: '3.66rem',
}));

const Wrapper = styled('div')(() => ({
  display: 'flex',
  gap: '0.33rem',
  marginBottom: '0.19rem',
}));

const LeftLabel = styled('div')(() => ({
  color: '#8B95A1',
  fontSize: '0.52725rem',
  letterSpacing: '-0.01319rem',
  width: '1.375rem',
  fontWeight: 400,
}));

const RightLabel = styled('div')(() => ({
  color: '#8B95A1',
  fontSize: '0.52725rem',
  letterSpacing: '-0.01319rem',
  width: '1.8125rem',
  fontWeight: 400,
}));

const Value = styled('div')(() => ({
  width: '4.21823rem',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  color: '#FFF',
  fontSize: '0.52725rem',
  letterSpacing: '-0.01319rem',
  fontWeight: 500,
}));

const Trigger = styled('div')(() => ({
  width: '18.69256rem',
  color: '#419BD7',
  padding: '0.31rem 0rem',
  fontSize: '0.52725rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  fontFamily: 'Pretendard-SemiBold',
  marginLeft: '2.53rem',
  marginTop: '0.88rem',
  cursor: 'pointer',
  marginBottom: '1.85rem',
  backgroundColor: 'none',
  borderRadius: '0.10994rem',
  border: '0.704px solid #419BD7',
}));

const Summary = styled('div')(() => ({
  color: '#FFF',
  marginLeft: '2.53rem',
  fontSize: '0.52781rem',
  fontWeight: 400,
  lineHeight: '0.87881rem',
  width: '18.69256rem',
  height: '3.5rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: '4',
  display: '-webkit-box',
  marginBottom: '2.66rem',
}));

const CustomSwiper = styled(Swiper)(() => ({
  width: '22.75056rem',
  height: '4.99rem',
  '.swiper-button-prev': {
    background: `url(${arrow}) center center no-repeat`,
    backgroundSize: 'cover',
    width: '1.05556rem',
    height: '1.05556rem',
    zIndex: 10,
    transform: 'rotate(180deg)',
    position: 'absolute',
    top: '3rem',
    '&::after': {
      display: 'none',
    },
  },
  '.swiper-button-next': {
    background: `url(${arrow}) center center no-repeat`,
    backgroundSize: 'cover',
    width: '1.05556rem',
    height: '1.05556rem',
    zIndex: 10,
    position: 'absolute',
    top: '3rem',
    '&::after': {
      display: 'none',
    },
  },
}));

const CustomSlide = styled('div')(() => ({
  position: 'relative',
  '& img': {
    width: '2.63894rem',
    height: '3.8155rem',
    borderRadius: '0.17594rem',
    boxShadow: '3.515px 3.515px 7.03px 0px rgba(0, 0, 0, 0.10)',
    cursor: 'pointer',
    marginBottom: '0.31rem',
    objectFit: 'cover',
  },
  '& .title': {
    width: '2.63638rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#ADB5BD',
    fontWeight: 500,
    letterSpacing: '-0.00881rem',
    fontSize: '0.3515rem',
    marginBottom: '0.09rem',
    paddingLeft: '0.09rem',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '2',
    display: '-webkit-box',
  },
  '& .badge': {
    width: '0.87963rem',
    height: '0.87963rem',
    borderRadius: '50%',
    position: 'absolute',
    bottom: '1.5rem',
    right: '-0.4rem',
    color: '#FFFFFF',
    backgroundColor: '#E71D36',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.30788rem',
  },
}));

const Row = styled('div')(() => ({
  display: 'flex',
  marginLeft: '1.9rem',
  gap: '1.3rem',
}));

const ContainerX = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  background: `url(${backgroundX}) center center no-repeat`,
  backgroundSize: 'cover',
  display: 'flex',
  gap: '3.4rem',
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
  '.swiper-container': {
    position: 'relative',
    width: '35.9375rem',
    '.swiper-button-prev': {
      background: `url(${arrow}) center center no-repeat`,
      backgroundSize: 'cover',
      width: '1.875rem',
      height: '1.875rem',
      zIndex: 10,
      left: '-2rem',
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
      right: '-2rem',
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
  marginTop: '9rem',
  marginLeft: '11.33rem',
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
  color: '#FFF',
  textAlign: 'center',
  fontSize: '1.60156rem',
  letterSpacing: '-0.04006rem',
  lineHeight: '140%',
  width: '15.625rem',
  fontWeight: 500,
  marginLeft: '13.4rem',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: '2',
  display: '-webkit-box',
}));

const DetailX = styled('div')(() => ({
  display: 'flex',
  gap: '4rem',
  marginTop: '7.81rem',
}));

const WrapperX = styled('div')(() => ({
  display: 'flex',
  gap: '0.31rem',
  marginBottom: '0.32rem',
}));

const LeftLabelX = styled('div')(() => ({
  color: '#8B95A1',
  fontSize: '0.9375rem',
  letterSpacing: '-0.01319rem',
  width: '2.75rem',
  fontWeight: 400,
}));

const RightLabelX = styled('div')(() => ({
  color: '#8B95A1',
  fontSize: '0.9375rem',
  letterSpacing: '-0.02344rem',
  width: '3.5rem',
  fontWeight: 400,
}));

const ValueX = styled('div')(() => ({
  width: '11.71875rem',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  color: '#FFFFFF',
  fontSize: '0.9375rem',
  letterSpacing: '-0.02344rem',
  fontWeight: 500,
}));

const TriggerX = styled('div')(() => ({
  width: '35.9375rem',
  color: '#419BD7',
  padding: '0.55rem 0rem',
  fontSize: '0.9375rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  fontFamily: 'Pretendard-SemiBold',
  marginTop: '1.55rem',
  cursor: 'pointer',
  marginBottom: '3.27rem',
  border: '1.25px solid #419BD7',
  borderRadius: '0.19531rem',
}));

const SummaryX = styled('div')(() => ({
  color: '#FFF',
  height: '6rem',
  fontSize: '0.9375rem',
  fontWeight: 400,
  lineHeight: ' 1.5625rem',
  width: '35.9375rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: '5',
  display: '-webkit-box',
  marginBottom: '4.94rem',
}));

const CustomSwiperX = styled(Swiper)(() => ({
  width: '37.20313rem',
  height: '8.82232rem',
  marginLeft: '-0.1rem',
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
    color: '#ADB5BD',
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
  Details,
  Wrapper,
  LeftLabel,
  RightLabel,
  Value,
  Trigger,
  Summary,
  CustomSwiper,
  CustomSlide,
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
