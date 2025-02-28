import React, { useState } from 'react';
import BubbleA from '../../../bubble-a';
import { chart_list } from '../../../../constants/chart.constants';
import {
  ChartWrapper,
  Container,
  List,
  ListItem,
  Refresh,
  SelectBoxWrapper,
  Submit,
  Wrapper,
} from './index.styled';
import { useBubbleAStore } from '../../../../store/bubble-a.store';
import refresh_icon from '../../../../assets/icon/refresh.svg';
import cancel_icon from '../../../../assets/icon/cancel-gray.svg';

const Chart = () => {
  const { selectedBubbleItems, toggleSelectedBubbleItem } = useBubbleAStore();
  const [selectedGender, setSelectedGender] = useState('male');
  const [selectedAge, setSelectedAge] = useState('20-29');

  const handleGenderChange = (e: any) => setSelectedGender(e.target.value);

  const handleAgeChange = (e: any) => setSelectedAge(e.target.value);

  return (
    <Container>
      <ChartWrapper>
        <BubbleA data={chart_list} />
      </ChartWrapper>
      <Refresh>
        <img src={refresh_icon} alt="" />
        <div>키워드 바꾸기</div>
      </Refresh>
      <List>
        {selectedBubbleItems.length > 0 ? (
          selectedBubbleItems.map((item) => (
            <ListItem key={item}>
              <div className={'value'}>{item}</div>
              <img
                src={cancel_icon}
                alt=""
                onClick={() => toggleSelectedBubbleItem(item)}
              />
            </ListItem>
          ))
        ) : (
          <div
            className={'value'}
            style={{ color: '#FFFFFF', fontSize: '0.65975rem' }}
          >
            키워드를 선택해주세요.
          </div>
        )}
      </List>
      <Wrapper>
        <SelectBoxWrapper>
          <label htmlFor="gender">성별</label>
          <select
            id="gender"
            value={selectedGender}
            onChange={handleGenderChange}
          >
            <option value="male">남성</option>
            <option value="female">여성</option>
          </select>
        </SelectBoxWrapper>

        <SelectBoxWrapper>
          <label htmlFor="age">나이</label>
          <select id="age" value={selectedAge} onChange={handleAgeChange}>
            <option value="10-19">아동</option>
            <option value="20-29">청소년</option>
            <option value="30-39">20~30대</option>
          </select>
        </SelectBoxWrapper>
      </Wrapper>
      <Submit>도서 추천받기</Submit>
    </Container>
  );
};

export default Chart;
