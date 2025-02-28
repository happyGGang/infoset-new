import { styled } from '@mui/material';
import background from '../../../../assets/img/smart_a_y_chart_bg.svg';
import arrow from '../../../../assets/icon/smart-arrow-dark.svg';
import backgroundX from '../../../../assets/img/smart_a_x_chart_bg.svg';

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

const ChartWrapper = styled('div')(() => ({
  width: '17.20056rem',
  height: '13.6745rem',
  position: 'relative',
  marginTop: '9.23rem',
  marginLeft: '1.7rem',
}));

const Refresh = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'center',
  marginTop: '2.62rem',
  marginBottom: '1.18rem',
  cursor: 'pointer',
  gap: '0.09rem',
  '& img': {
    width: '0.79169rem',
    height: '0.79169rem',
  },
  '& div': {
    fontSize: '0.52781rem',
    color: '#333D4B',
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: '-0.013919',
  },
}));

const List = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'center',
  marginBottom: '1.32rem',
  gap: '0.26rem',
  height: '1.5rem',
}));

const ListItem = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '1.5rem',
  background: 'rgba(255, 255, 255, 0.10)',
  borderRadius: '1.3195rem',
  border: '1px solid rgba(255, 255, 255, 0.50)',
  gap: '0.44rem',
  padding: '0 0.6rem 0 0.88rem',
  cursor: 'pointer',
  '& div': {
    color: '#FFF',
    fontSize: '0.52751rem',
    fontWeight: 500,
    lineHeight: 'normal',
  },
  '& img': {
    width: '0.74769rem',
    height: '0.74769rem',
  },
}));

const Wrapper = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.26rem',
}));

const SelectBoxWrapper = styled('div')(() => ({
  position: 'relative',
  '& label': {
    fontSize: '0.65975rem',
    color: '#333D4B',
    fontWeight: 500,
    lineHeight: 'normal',
    position: 'absolute',
    top: '0.55rem',
    left: '0.88rem',
  },
  '& select': {
    cursor: 'pointer',
    fontSize: '0.65975rem',
    fontWeight: 600,
    lineHeight: 'normal',
    width: '7.477rem',
    height: '1.97919rem',
    padding: '0  1.17rem 0 2.5rem',
    color: '#191F28',
    border: '0.352px solid #272A49',
    borderRadius: '1.3195rem',
    appearance: 'none',
    background: `url(${arrow}) no-repeat right 0.3rem center`,
    backgroundSize: '1.05556rem',
    '&:focus': {
      outline: 'none',
    },
  },
}));

const Submit = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '15.2rem',
  justifyContent: 'center',
  height: '2.4rem',
  background: '#3537AC',
  borderRadius: '2.19913rem',
  color: '#FFF',
  fontSize: '0.65975rem',
  fontWeight: 600,
  lineHeight: '140%',
  letterSpacing: '-0.0165rem',
  marginTop: '0.88rem',
  marginLeft: '4.27rem',
  cursor: 'pointer',
}));

const ContainerX = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  background: `url(${backgroundX}) center center no-repeat`,
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

export {
  Container,
  ChartWrapper,
  Refresh,
  List,
  ListItem,
  Wrapper,
  SelectBoxWrapper,
  Submit,
  ContainerX,
};
