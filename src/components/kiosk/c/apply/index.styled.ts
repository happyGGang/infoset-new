import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_c_y_course_apply_bg.svg';
import arrow from '../../../../assets/icon/select-arrow.svg';
import radioCheck from '../../../../assets/icon/radio-check.svg';
import radioUncheck from '../../../../assets/icon/radio-uncheck.svg';

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

const Form = styled('div')(() => ({
  width: '19.75781rem',
  maxWidth: '19.75781rem',
  height: '27.46141rem',
  backgroundColor: '#FFFFFF',
  borderRadius: '0.43906rem',
  marginTop: '4.9rem',
  marginLeft: '1.98rem',
  marginBottom: '0.78rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.44rem',
  border: '1px solid #ADB5BD',
}));

const Title = styled('div')(() => ({
  textAlign: 'center',
  borderBottom: '1px solid #6B7684',
  padding: '0.66rem 0 0.66rem 0',
  color: '#191F28',
  fontWeight: 500,
  fontFamily: 'Pretendard',
  fontSize: '0.65856rem',
  lineHeight: 'normal',
  letterSpacing: '-0.01644rem',
  margin: '0 1.65rem 0.66rem 1.65rem',
}));

const Row = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  '& label': {
    color: '#191F28',
    fontWeight: 500,
    fontFamily: 'Pretendard',
    fontSize: '0.57075rem',
    lineHeight: 'normal',
  },
  '& .select_wrapper': {
    position: 'relative',
    '&:nth-of-type(2)': {
      margin: '0 0.66rem 0 0.66rem',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      right: '-0.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '0.33863rem',
      height: '0.011rem',
      backgroundColor: '#000',
    },
    '&:last-child::after': {
      content: 'none',
    },
  },
}));

const PhoneInput = styled('input')(() => ({
  color: '#191F28',
  fontWeight: 400,
  fontFamily: 'Pretendard',
  fontSize: '0.57075rem',
  lineHeight: 'normal',
  backgroundColor: '#EBEBEB',
  height: '1.66844rem',
  width: '4.2rem',
  padding: '0 0.44rem 0 0.44rem',
  borderRadius: '0.2195rem',
  outline: 'none',
  border: 'none',
  '&::placeholder': {
    color: '#6B7684',
  },
  '&:focus': {
    outline: 'none',
  },
  '&:nth-of-type(2)': {
    margin: '0 0.66rem 0 0.66rem',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    right: '-0.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '0.33863rem',
    height: '0.011rem',
    backgroundColor: '#000',
  },
  '&:last-child::after': {
    content: 'none',
  },
}));

const Column = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '1.65rem',
  marginRight: '1.65rem',
  gap: '0.26rem',
}));

const Label = styled('div')(() => ({
  color: '#191F28',
  fontWeight: 500,
  fontFamily: 'Pretendard',
  fontSize: '0.57075rem',
  lineHeight: 'normal',
  marginLeft: '0.44rem',
  width: '5.1041rem',
  marginRight: '0.14rem',
}));

const Input = styled('input')(() => ({
  color: '#191F28',
  fontWeight: 400,
  fontFamily: 'Pretendard',
  fontSize: '0.57075rem',
  lineHeight: 'normal',
  backgroundColor: '#EBEBEB',
  height: '1.66844rem',
  padding: '0 0.44rem 0 0.44rem',
  borderRadius: '0.2195rem',
  outline: 'none',
  border: 'none',
  '&::placeholder': {
    color: '#6B7684',
  },
  '&:focus': {
    outline: 'none',
  },
}));

const Gender = styled('div')<{ active: boolean }>(({ active }) => ({
  width: '8.01288rem',
  height: '1.66844rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  color: active ? '#191F28' : '#6B7684',
  fontSize: '0.57075rem',
  fontWeight: 400,
  fontFamily: 'Pretendard',
  background: active ? '#FFFFFF' : '#EBEBEB',
  borderRadius: '0.2195rem',
  border: '1px solid transparent',
  borderColor: active ? '#191F28' : 'transparent',
  transition: 'all 0.3s ease-in-out',
  '&:first-of-type': {
    marginRight: '0.44rem',
  },
}));

const CustomSelect = styled('select')(() => ({
  appearance: 'none',
  background: `#EBEBEB url(${arrow}) no-repeat right 0.3rem center`,
  backgroundSize: '1.05375rem',
  width: '5.04919rem',
  color: '#191F28',
  fontWeight: 400,
  fontFamily: 'Pretendard',
  fontSize: '0.57075rem',
  lineHeight: 'normal',
  padding: '0 0.87813rem',
  borderRadius: '0.2195rem',
  height: '1.66844rem',
  border: 'none',
  position: 'relative',
  '&:focus': {
    outline: 'none',
  },
}));

const HiddenRadio = styled('input')(() => ({
  display: 'none',
}));

const CustomRadioLabel = styled('label')<{ checked: boolean }>(
  ({ checked }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    color: '#191f28',
    fontWeight: 500,
    fontSize: '0.57075rem',
    fontFamily: 'Pretendard, sans-serif',
    lineHeight: 'normal',
    cursor: 'pointer',
    marginRight: '0.22rem',
    '&::before': {
      content: '""',
      display: 'inline-block',
      width: '0.79031rem',
      height: '0.79031rem',
      marginRight: '0.22rem',
      background: `url(${checked ? radioCheck : radioUncheck}) no-repeat center`,
      backgroundSize: 'contain',
    },
  })
);

const Caption = styled('div')(() => ({
  color: '#191F28',
  fontWeight: 400,
  fontFamily: 'Pretendard',
  fontSize: '0.48294rem',
  lineHeight: '140%',
  backgroundColor: '#EBEBEB',
  borderRadius: '0.2195rem',
  marginTop: '0.26rem',
  padding: '0.4rem',
}));

const ApplyButton = styled('div')(() => ({
  width: '19.77293rem',
  height: '2.41669rem',
  marginLeft: '1.98rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  color: '#FFFFFF',
  fontSize: '0.747rem',
  fontWeight: 700,
  fontFamily: 'Pretendard',
  background: '#2E80EE',
  borderRadius: '0.43938rem',
}));

export {
  Container,
  Form,
  Title,
  Row,
  Column,
  Label,
  Input,
  ApplyButton,
  Gender,
  CustomSelect,
  PhoneInput,
  CustomRadioLabel,
  HiddenRadio,
  Caption,
};
