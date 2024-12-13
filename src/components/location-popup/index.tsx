import React from 'react';
import {
  PopupContainer,
  PopupContent,
  CloseButton,
  Header,
  ActionWrapper,
  PrintButton,
  PopupContainerX,
  PopupContentX,
  HeaderX,
  ActionWrapperX,
  CloseButtonX,
  PrintButtonX,
} from './index.styled';
import map from '../../assets/img/map.svg';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  landscape?: boolean;
}

const LocationPopup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  landscape,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {landscape ? (
        <PopupContainerX>
          <PopupContentX>
            <HeaderX>서가위치</HeaderX>
            <img src={map} alt="" />
            <ActionWrapperX>
              <CloseButtonX onClick={onClose}>
                <div className={'icon'}></div>
                <div className={'label'}>닫기</div>
              </CloseButtonX>
              <PrintButtonX>
                <div className={'icon'}></div>
                <div className={'label'}>인쇄</div>
              </PrintButtonX>
            </ActionWrapperX>
          </PopupContentX>
        </PopupContainerX>
      ) : (
        <PopupContainer>
          <PopupContent>
            <Header>서가위치</Header>
            <img src={map} alt="" />
            <ActionWrapper>
              <CloseButton onClick={onClose}>
                <div className={'icon'}></div>
                <div className={'title'}>닫기</div>
              </CloseButton>
              <PrintButton>
                <div className={'icon'}></div>
                <div className={'title'}>인쇄</div>
              </PrintButton>
            </ActionWrapper>
          </PopupContent>
        </PopupContainer>
      )}
    </>
  );
};

export default LocationPopup;
