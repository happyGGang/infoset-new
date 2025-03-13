import { styled } from '@mui/material';
import background from '../../../../assets/img/kiosk_a_y_course_apply_bg.svg';
import backgroundX from '../../../../assets/img/kiosk_a_x_course_apply_bg.svg';
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
}));

const Title = styled('div')(() => ({
  textAlign: 'center',
  borderBottom: '1px solid #6B7684',
  padding: '0.66rem 0 0.66rem 0',
  color: '#191F28',
  fontWeight: 500,
  fontFamily: 'Pretendard-Medium',
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
    fontFamily: 'Pretendard-Medium',
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
  fontFamily: 'Pretendard-Medium',
  fontSize: '0.57075rem',
  lineHeight: 'normal',
  marginLeft: '0.44rem',
  width: '5.1041rem',
  marginRight: '0.14rem',
}));

const Input = styled('input')(() => ({
  color: '#191F28',
  fontWeight: 400,
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
    fontFamily: 'Pretendard-Medium',
    fontSize: '0.57075rem',
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
  fontFamily: 'Pretendard-Bold',
  background: '#191F28',
  borderRadius: '0.43938rem',
}));

const ContainerX = styled('div')(() => ({
  width: '75rem',
  height: '42.1875rem',
  background: `url(${backgroundX}) center center no-repeat`,
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

const FormX = styled('div')(() => ({
  width: '60.78125rem',
  maxWidth: '60.78125rem',
  height: '26.95313rem',
  backgroundColor: '#FFFFFF',
  borderRadius: '0.78125rem',
  marginTop: '6.58rem',
  marginLeft: '10.23rem',
  marginBottom: '1.56rem',
}));

const TitleX = styled('div')(() => ({
  textAlign: 'center',
  borderBottom: '1px solid #6B7684',
  padding: '1.17rem 0 1.17rem 0',
  color: '#191F28',
  fontWeight: 500,
  fontFamily: 'Pretendard-Medium',
  fontSize: '1.17188rem',
  lineHeight: 'normal',
  letterSpacing: '-0.01644rem',
  margin: '0 2.93rem 1.17rem 2.93rem',
}));

const RowX = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  '& label': {
    color: '#191F28',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
    fontSize: '0.57075rem',
    lineHeight: 'normal',
  },
  '& .select_wrapper': {
    position: 'relative',
    '&:nth-of-type(2)': {
      margin: '0 1.07rem 0 1.07rem',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      right: '-0.8rem',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '0.54975rem',
      height: '0.01956rem',
      backgroundColor: '#000',
    },
    '&:last-child::after': {
      content: 'none',
    },
  },
}));

const PhoneInputX = styled('input')(() => ({
  color: '#191F28',
  fontWeight: 400,
  fontSize: '1.01563rem',
  lineHeight: 'normal',
  backgroundColor: '#EBEBEB',
  height: '2.96875rem',
  width: '4.5rem',
  padding: '0 1.56rem 0 1.56rem',
  borderRadius: '0.39063rem',
  outline: 'none',
  border: 'none',
  '&::placeholder': {
    color: '#6B7684',
  },
  '&:focus': {
    outline: 'none',
  },
  '&:nth-of-type(2)': {
    margin: '0 1.07rem 0 1.07rem',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    right: '-1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '0.54975rem',
    height: '0.01956rem',
    backgroundColor: '#000',
  },
  '&:last-child::after': {
    content: 'none',
  },
}));

const ColumnX = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.49rem',
}));

const LabelX = styled('div')(() => ({
  color: '#191F28',
  fontWeight: 500,
  fontFamily: 'Pretendard-Medium',
  fontSize: '1.01563rem',
  lineHeight: 'normal',
  marginLeft: '0.44rem',
  width: '8.1875rem',
  marginRight: '0.78rem',
}));

const InputX = styled('input')(() => ({
  color: '#191F28',
  minWidth: '26.875rem',
  maxWidth: '53.5rem',
  fontWeight: 400,
  fontSize: '1.01563rem',
  lineHeight: 'normal',
  backgroundColor: '#EBEBEB',
  height: '2.96875rem',
  padding: '0 0.78rem 0 0.78rem',
  borderRadius: '0.39063rem',
  outline: 'none',
  border: 'none',
  '&::placeholder': {
    color: '#6B7684',
  },
  '&:focus': {
    outline: 'none',
  },
}));

const GenderX = styled('div')<{ active: boolean }>(({ active }) => ({
  width: '12.2rem',
  height: ' 2.96875rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  color: active ? '#191F28' : '#6B7684',
  fontSize: '1.01563rem',
  fontWeight: 400,
  background: active ? '#FFFFFF' : '#EBEBEB',
  borderRadius: '0.39063rem',
  border: '1px solid transparent',
  borderColor: active ? '#191F28' : 'transparent',
  transition: 'all 0.3s ease-in-out',
  '&:first-of-type': {
    marginRight: '0.78rem',
  },
}));

const CustomSelectX = styled('select')(() => ({
  appearance: 'none',
  background: `#EBEBEB url(${arrow}) no-repeat right 1rem center`,
  backgroundSize: '1.875rem',
  width: '8.8rem',
  color: '#191F28',
  fontWeight: 400,
  fontSize: '1.01563rem',
  lineHeight: 'normal',
  padding: '0 0.87813rem',
  borderRadius: '0.39063rem',
  height: '2.96875rem',
  border: 'none',
  position: 'relative',
  '&:focus': {
    outline: 'none',
  },
}));

const HiddenRadioX = styled('input')(() => ({
  display: 'none',
}));

const CustomRadioLabelX = styled('label')<{ checked: boolean }>(
  ({ checked }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    color: '#191f28',
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium',
    fontSize: '1.01563rem !important',
    lineHeight: 'normal',
    cursor: 'pointer',
    marginRight: '0.22rem',
    '&::before': {
      content: '""',
      display: 'inline-block',
      width: '1.40625rem',
      height: '1.40625rem',
      marginRight: '0.39rem',
      background: `url(${checked ? radioCheck : radioUncheck}) no-repeat center`,
      backgroundSize: 'contain',
    },
  })
);

const CaptionX = styled('div')(() => ({
  color: '#191F28',
  fontWeight: 400,
  fontSize: '0.85938rem',
  lineHeight: '140%',
  backgroundColor: '#EBEBEB',
  borderRadius: '0.39063rem',
  marginTop: '0.49rem',
  padding: '0.78rem',
  width: '53.5rem',
}));

const ApplyButtonX = styled('div')(() => ({
  width: '35.15625rem',
  height: '2.73438rem',
  marginLeft: '23.05rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  color: '#FFFFFF',
  fontSize: '0.85938rem',
  fontWeight: 700,
  fontFamily: 'Pretendard-Bold',
  background: '#191F28',
  borderRadius: '0.78125rem',
}));

const Scroll = styled('div')(() => ({
  width: '55.5rem',
  height: '19.70706rem',
  overflowY: 'scroll',
  paddingRight: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.88rem',
  marginLeft: '2.93rem',
  overflowX: 'hidden',
  '&::-webkit-scrollbar': {
    width: '0.15625rem',
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
    background: '#E5E8EB',
  },
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
  ContainerX,
  FormX,
  TitleX,
  RowX,
  ColumnX,
  LabelX,
  InputX,
  ApplyButtonX,
  GenderX,
  CustomSelectX,
  PhoneInputX,
  CustomRadioLabelX,
  HiddenRadioX,
  CaptionX,
  Scroll,
};
