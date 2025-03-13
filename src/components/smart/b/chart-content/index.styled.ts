import { styled } from '@mui/material';
import arrow from '../../../../assets/icon/smart-arrow-dark.svg';

const Title = styled('div')(() => ({
  fontSize: '1.3195rem',
  color: '#242424',
  fontWeight: 600,
  fontFamily: 'Pretendard-SemiBold',
  letterSpacing: '-0.033rem',
  lineHeight: '130%',
  textAlign: 'center',
  marginBottom: '0.32rem',
}));

const Caption = styled('div')(() => ({
  marginBottom: '1.18rem',
  fontWeight: '500',
  color: '#6B7684',
  fontSize: '0.65875rem',
  letterSpacing: '-0.0165rem',
  textAlign: 'center',
}));

const Refresh = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'center',
  marginTop: '1.1rem',
  marginBottom: '1.1rem',
  cursor: 'pointer',
  gap: '0.09rem',
  '& img': {
    width: '0.81694rem',
    height: '0.81694rem',
  },
  '& div': {
    fontSize: '0.57175rem',
    color: '#6B7684',
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
  marginBottom: '1.1rem',
  gap: '0.44rem',
  height: '1.5rem',
}));

const ListItem = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '1.5rem',
  background: '#fff',
  borderRadius: '1.3195rem',
  border: '0.704px solid #1773EB',
  gap: '0.44rem',
  padding: '0 0.6rem 0 0.88rem',
  cursor: 'pointer',
  '& div': {
    color: '#1773EB',
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
  gap: '0.44rem',
}));

const SelectBoxWrapper = styled('div')(() => ({
  position: 'relative',
  '& label': {
    fontSize: '0.65975rem',
    color: '#6B7684',
    fontWeight: 500,
    lineHeight: 'normal',
    position: 'absolute',
    top: '0.55rem',
    left: '0.88rem',
  },
  '& select': {
    border: '1px solid #FFF',
    cursor: 'pointer',
    fontSize: '0.65975rem',
    fontWeight: 600,
    fontFamily: 'Pretendard-SemiBold',
    lineHeight: 'normal',
    width: '8.2rem',
    height: '1.91325rem',
    padding: '0  1.17rem 0 2.5rem',
    color: '#191F28',
    borderRadius: '1.3195rem',
    appearance: 'none',
    background: `#fff url(${arrow}) no-repeat right 0.3rem center`,
    backgroundSize: '1.05556rem',
    '&:focus': {
      outline: 'none',
    },
  },
}));

const Submit = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '17.10919rem',
  justifyContent: 'center',
  height: '2.63894rem',
  background: '#191F28',
  borderRadius: '2.19913rem',
  color: '#FFF',
  fontSize: '0.65975rem',
  fontWeight: 600,
  fontFamily: 'Pretendard-SemiBold',
  lineHeight: '140%',
  letterSpacing: '-0.0165rem',
  marginTop: '0.66rem',
  marginLeft: '1.2rem',
  cursor: 'pointer',
}));

const TitleX = styled('div')(() => ({
  fontSize: '2.34375rem',
  color: '#242424',
  fontWeight: 600,
  letterSpacing: '-0.033rem',
  lineHeight: '130%',
  textAlign: 'center',
  marginBottom: '0.55rem',
}));

const CaptionX = styled('div')(() => ({
  marginBottom: '1.38rem',
  fontWeight: '500',
  color: '#6B7684',
  fontSize: '1.17188rem',
  letterSpacing: '-0.0165rem',
  textAlign: 'center',
}));

const RefreshX = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'center',
  marginTop: '1.5rem',
  marginBottom: '1.17rem',
  cursor: 'pointer',
  gap: '0.16rem',
  '& img': {
    width: '1.40625rem',
    height: '1.40625rem',
  },
  '& div': {
    fontSize: '0.9375rem',
    color: '#6B7684',
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: '-0.02344rem',
  },
}));

const ListX = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'center',
  marginBottom: '0.98rem',
  gap: '0.47rem',
  height: '2.7rem',
}));

const ListItemX = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2.7rem',
  background: '#fff',
  borderRadius: '1.3195rem',
  border: '1px solid #1773EB',
  gap: '0.44rem',
  padding: '0 1.56rem 0 1.88rem',
  cursor: 'pointer',
  '& div': {
    color: '#1773EB',
    fontSize: '1.17188rem',
    fontWeight: 500,
    lineHeight: 'normal',
  },
  '& img': {
    width: '1.32813rem',
    height: '1.32813rem',
  },
}));

const WrapperX = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.47rem',
}));

const SelectBoxWrapperX = styled('div')(() => ({
  position: 'relative',
  '& label': {
    fontSize: '1.17188rem',
    color: '#6B7684',
    fontWeight: 500,
    lineHeight: 'normal',
    position: 'absolute',
    top: '1.05rem',
    left: '0.88rem',
  },
  '& select': {
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.17188rem',
    fontWeight: 600,
    lineHeight: 'normal',
    width: '13.28125rem',
    height: '3.51563rem',
    padding: '0  1.17rem 0 3.5rem',
    color: '#191F28',
    borderRadius: '2.34375rem',
    appearance: 'none',
    background: `#fff url(${arrow}) no-repeat right 1.17rem center`,
    backgroundSize: '1.875rem',
    '&:focus': {
      outline: 'none',
    },
  },
}));

const SubmitX = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '15.625rem',
  justifyContent: 'center',
  height: '3.4rem',
  background: '#191F28',
  borderRadius: '1.95313rem',
  color: '#FFF',
  fontSize: '1.17188rem',
  fontWeight: 600,
  lineHeight: '140%',
  letterSpacing: '-0.0165rem',
  marginLeft: '0.31rem',
  cursor: 'pointer',
}));

export {
  Title,
  Refresh,
  List,
  ListItem,
  Wrapper,
  SelectBoxWrapper,
  Submit,
  TitleX,
  CaptionX,
  RefreshX,
  ListX,
  ListItemX,
  WrapperX,
  SelectBoxWrapperX,
  SubmitX,
  Caption,
};
