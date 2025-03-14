import React from 'react';
import { Container, ContainerX, Content, Scroll } from './index.styled';
import { useOrientationStore } from '../../../../store/landscape-mode.store';
import dummy from '../../../../assets/img/kiosk_c_x_content.svg';

const InformationC = () => {
  const { isLandscape } = useOrientationStore();

  return (
    <>
      {isLandscape ? (
        <ContainerX>
          <Content>
            <Scroll>
              <img src={dummy} alt="" />
            </Scroll>
          </Content>
        </ContainerX>
      ) : (
        <Container />
      )}
    </>
  );
};

export default InformationC;
