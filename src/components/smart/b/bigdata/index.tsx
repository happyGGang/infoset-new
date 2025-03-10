import React, { useState } from 'react';
import {
  Container,
  CustomTabs,
  CustomTab,
  ContainerX,
  CustomTabsX,
  CustomTabX,
} from './index.styled';
import { useOrientationStore } from '../../../../store/landscape-mode.store';
import ChartContent from '../chart-content';
import LibrarianContent from '../librarian-content';
import BigdataContent from '../bigdata-content';

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

const Bigdata = () => {
  const { isLandscape } = useOrientationStore();
  const [value, setValue] = useState('three');

  const ContainerComponent = isLandscape ? ContainerX : Container;
  const TabsComponent = isLandscape ? CustomTabsX : CustomTabs;
  const TabComponent = isLandscape ? CustomTabX : CustomTab;

  return (
    <ContainerComponent>
      <TabsComponent
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
      >
        <TabComponent value="one" label="키워드추천" />
        <TabComponent value="two" label="사서추천" />
        <TabComponent value="three" label="빅데이터추천" />
      </TabsComponent>

      <TabPanel value={value} index="one">
        <ChartContent />
      </TabPanel>
      <TabPanel value={value} index="two">
        <LibrarianContent />
      </TabPanel>
      <TabPanel value={value} index="three">
        <BigdataContent />
      </TabPanel>
    </ContainerComponent>
  );
};

export default Bigdata;
