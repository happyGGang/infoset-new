import React, { useState } from 'react';
import {
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
} from './index.styled';
import { useOrientationStore } from '../../../../store/landscape-mode.store';
import {
  chart_list_b,
  chart_list_b_x,
} from '../../../../constants/chart.constants';
import BubbleB from '../../../bubble-b';
import refresh_icon from '../../../../assets/icon/refresh.svg';
import cancel_icon from '../../../../assets/icon/cancel-gray.svg';
import { useBubbleAStore } from '../../../../store/bubble-a.store';
import BubbleBX from '../../../bubble-b-x';
import { useSelectedItemStore } from '../../../../store/selected-item.store';
import logout from '../../../../assets/icon/logout.svg';
import home from '../../../../assets/icon/home.svg';

const ChartContent = () => {
  const { isLandscape } = useOrientationStore();
  const { selectedBubbleItems, toggleSelectedBubbleItem } = useBubbleAStore();
  const [selectedGender, setSelectedGender] = useState('male');
  const [selectedAge, setSelectedAge] = useState('20-29');
  const { toggleSelectedItem } = useSelectedItemStore();

  const handleGenderChange = (e: any) => setSelectedGender(e.target.value);

  const handleAgeChange = (e: any) => setSelectedAge(e.target.value);

  return isLandscape ? (
    <>
      <TitleX>회원님의 관심사는 무엇인가요?</TitleX>
      <CaptionX>관심 키워드를 분석해 알맞은 책을 추천해드려요</CaptionX>
      <BubbleBX data={chart_list_b_x} />
      <RefreshX>
        <img src={refresh_icon} alt="" />
        <div>키워드 바꾸기</div>
      </RefreshX>
      <ListX>
        {selectedBubbleItems.length > 0 ? (
          selectedBubbleItems.map((item) => (
            <ListItemX key={item}>
              <div className={'value'}>{item}</div>
              <img
                src={cancel_icon}
                alt=""
                onClick={() => toggleSelectedBubbleItem(item)}
              />
            </ListItemX>
          ))
        ) : (
          <div
            className={'value'}
            style={{ color: '#6B7684', fontSize: '1.17188rem' }}
          >
            키워드를 선택해주세요.
          </div>
        )}
      </ListX>
      <WrapperX>
        <SelectBoxWrapperX>
          <label htmlFor="gender">성별</label>
          <select
            id="gender"
            value={selectedGender}
            onChange={handleGenderChange}
          >
            <option value="male">남성</option>
            <option value="female">여성</option>
          </select>
        </SelectBoxWrapperX>

        <SelectBoxWrapperX>
          <label htmlFor="age">나이</label>
          <select id="age" value={selectedAge} onChange={handleAgeChange}>
            <option value="10-19">아동</option>
            <option value="20-29">청소년</option>
            <option value="30-39">20~30대</option>
          </select>
        </SelectBoxWrapperX>
        <SubmitX>도서 추천받기</SubmitX>
      </WrapperX>
      <img className={'home'} src={home} alt="" />
      <img className={'logout'} src={logout} alt="" />
    </>
  ) : (
    <>
      <Title>회원님의 관심사는 무엇인가요?</Title>
      <Caption>관심 키워드를 분석해 알맞은 책을 추천해드려요</Caption>
      <BubbleB data={chart_list_b} />
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
            style={{ color: '#6B7684', fontSize: '0.65975rem' }}
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
      <Submit onClick={() => toggleSelectedItem(2)}>도서 추천받기</Submit>
      <img className={'home'} src={home} alt="" />
      <img className={'logout'} src={logout} alt="" />
    </>
  );
};

export default ChartContent;
