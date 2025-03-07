import React, { useState } from 'react';
import BubbleA from '../../../bubble-a';
import {
  chart_list,
  chart_list_X,
} from '../../../../constants/chart.constants';
import {
  ChartWrapper,
  Container,
  ContainerX,
  List,
  ListItem,
  Refresh,
  SelectBoxWrapper,
  Submit,
  Wrapper,
  RefreshX,
  ListX,
  ListItemX,
  WrapperX,
  SelectBoxWrapperX,
  SubmitX,
} from './index.styled';
import { useBubbleAStore } from '../../../../store/bubble-a.store';
import refresh_icon from '../../../../assets/icon/refresh.svg';
import cancel_icon from '../../../../assets/icon/cancel-gray.svg';
import { useOrientationStore } from '../../../../store/landscape-mode.store';
import BubbleAX from '../../../bubble-a-x';

const Chart = () => {
  const { selectedBubbleItems, toggleSelectedBubbleItem } = useBubbleAStore();
  const [selectedGender, setSelectedGender] = useState('male');
  const [selectedAge, setSelectedAge] = useState('20-29');
  const { isLandscape } = useOrientationStore();

  const handleGenderChange = (e: any) => setSelectedGender(e.target.value);

  const handleAgeChange = (e: any) => setSelectedAge(e.target.value);

  return (
    <>{isLandscape ? <ContainerX></ContainerX> : <Container></Container>}</>
  );
};

export default Chart;
