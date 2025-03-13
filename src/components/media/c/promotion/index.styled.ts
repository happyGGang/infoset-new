import { styled } from '@mui/material';
import background from '../../../../assets/img/media_c_promotion_bg.svg';
import clock from '../../../../assets/img/clock.png';
import cloud from '../../../../assets/img/cloud.svg';

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

const ContentWrapper = styled('div')(() => ({
  display: 'flex',
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
    fontFamily: 'Spoqa Han Sans Neo',
    color: '#FFFFFF',
    letterSpacing: '0.09375rem',
    lineHeight: 'normal',
  },
  '& .date': {
    fontSize: '0.46875rem',
    fontWeight: 400,
    fontFamily: 'Spoqa Han Sans Neo',
    color: '#FFFFFF',
    lineHeight: 'normal',
  },
}));

const Title = styled('div')(() => ({
  color: '#ADB5BD',
  fontSize: '0.66406rem',
  fontWeight: 500,
  fontFamily: 'Pretendard-Medium',
  letterSpacing: '0.11956rem',
  lineHeight: '100%',
  textAlign: 'center',
  textTransform: 'uppercase',
}));

const ClockWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '7.6rem',
  marginLeft: '2.03rem',
  marginRight: '1.95rem',
}));

const Clock = styled('div')(() => ({
  width: '9.375rem',
  height: '9.375rem',
  background: `url(${clock}) center center no-repeat`,
  backgroundSize: 'cover',
  position: 'relative',
  marginTop: '3.04rem',
  '& .hour': {
    position: 'absolute',
    bottom: '50%',
    left: '50%',
    transform: 'translateX(-50%)',
    transformOrigin: 'bottom center',
    width: '0.0625rem',
    height: '2.5rem',
    backgroundColor: '#FFF',
  },
  '& .minute': {
    position: 'absolute',
    bottom: '50%',
    left: '50%',
    transform: 'translateX(-50%)',
    transformOrigin: 'bottom center',
    width: '0.0625rem',
    height: '3.4375rem',
    backgroundColor: '#FFF',
  },
  '& .second': {
    position: 'absolute',
    bottom: '50%',
    left: '50%',
    transform: 'translateX(-50%)',
    transformOrigin: 'bottom center',
    width: '0.03125rem',
    height: '3.5625rem',
    backgroundColor: '#FFF',
  },
}));

const Date = styled('div')(() => ({
  color: '#FFF',
  fontSize: '0.54688rem',
  fontWeight: 400,
  letterSpacing: '-0.01638rem',
  lineHeight: '100%',
  textAlign: 'center',
  textTransform: 'uppercase',
  marginBottom: '0.2rem',
  marginTop: '1.48rem',
}));

const Time = styled('div')(() => ({
  color: '#FFF',
  fontSize: '1.95313rem',
  fontWeight: 400,
  letterSpacing: '0.13675rem',
  lineHeight: '100%',
  textAlign: 'center',
  fontFamily: 'FjallaOne-Regular',
}));

const VideoWrapper = styled('video')(() => ({
  width: '48.28125rem',
  height: '27.14844rem',
  marginTop: '2.64rem',
}));

const WeatherWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '7.6rem',
  marginLeft: '3rem',
}));

const Perceived = styled('div')(() => ({
  color: '#FFF',
  fontSize: '1.21094rem',
  fontWeight: 400,
  letterSpacing: '-0.02419rem',
  lineHeight: '100%',
  textAlign: 'center',
  marginTop: '1.84rem',
}));

const WeatherIcon = styled('div')(() => ({
  width: '8rem',
  height: '8rem',
  background: `url(${cloud}) center center no-repeat`,
  backgroundSize: 'cover',
  marginTop: '0.5rem',
  marginBottom: '0.5rem',
}));

const WeatherDescription = styled('div')(() => ({
  color: '#FFF',
  fontSize: '0.9375rem',
  fontWeight: 400,
  letterSpacing: '-0.01875rem',
  lineHeight: '100%',
  textAlign: 'center',
  marginTop: '0.78rem',
}));

const Temperature = styled('div')(() => ({
  color: '#FFF',
  fontSize: '2.73438rem',
  fontWeight: 400,
  lineHeight: '100%',
  textAlign: 'center',
  fontFamily: 'FjallaOne-Regular',
}));

export {
  Container,
  ContentWrapper,
  Header,
  Wrapper,
  ClockWrapper,
  VideoWrapper,
  WeatherWrapper,
  Title,
  Clock,
  Date,
  Time,
  Perceived,
  Temperature,
  WeatherDescription,
  WeatherIcon,
};
