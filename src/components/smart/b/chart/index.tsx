import React, { useState } from 'react';
import {
  Caption,
  Container,
  ContainerX,
  CustomTab,
  CustomTabs,
  List,
  ListItem,
  Refresh,
  SelectBoxWrapper,
  Submit,
  Title,
  Wrapper,
} from './index.styled';
import { useOrientationStore } from '../../../../store/landscape-mode.store';
import { chart_list_b } from '../../../../constants/chart.constants';
import BubbleB from '../../../bubble-b';
import refresh_icon from '../../../../assets/icon/refresh.svg';
import cancel_icon from '../../../../assets/icon/cancel-gray.svg';
import { useBubbleAStore } from '../../../../store/bubble-a.store';

// 탭 패널 컴포넌트
interface TabPanelProps {
  children?: React.ReactNode;
  index: string;
  value: string;
}
const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => (
  <div className={'tabpanel'} role="tabpanel" hidden={value !== index}>
    {value === index && children}
  </div>
);

const Chart = () => {
  const { isLandscape } = useOrientationStore();
  const [value, setValue] = useState('one');
  const { selectedBubbleItems, toggleSelectedBubbleItem } = useBubbleAStore();
  const [selectedGender, setSelectedGender] = useState('male');
  const [selectedAge, setSelectedAge] = useState('20-29');

  const handleGenderChange = (e: any) => setSelectedGender(e.target.value);

  const handleAgeChange = (e: any) => setSelectedAge(e.target.value);

  return isLandscape ? (
    <ContainerX />
  ) : (
    <Container>
      <CustomTabs
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        textColor="secondary"
        aria-label="chart tabs"
      >
        <CustomTab value="one" label="키워드추천" />
        <CustomTab value="two" label="사서추천" />
        <CustomTab value="three" label="빅데이터추천" />
      </CustomTabs>

      <TabPanel value={value} index="one">
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
        <Submit>도서 추천받기</Submit>
      </TabPanel>
      <TabPanel value={value} index="two">
        📈 두 번째 탭의 내용
      </TabPanel>
      <TabPanel value={value} index="three">
        📉 세 번째 탭의 내용
      </TabPanel>
    </Container>
  );
};

export default Chart;
