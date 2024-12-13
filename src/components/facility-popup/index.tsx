import React from 'react';
import {
  PopupContainer,
  PopupContent,
  CloseButton,
  Header,
  PopupContentX,
  HeaderX,
  CloseButtonX,
  PopupContainerX,
} from './index.styled';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  index: number;
  bg?: string;
  caption?: string;
  title?: string;
  landscape?: boolean;
}

const FacilityPopup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  data,
  index,
  bg,
  caption,
  title,
  landscape,
}) => {
  if (!isOpen || !data) return null;

  return (
    <>
      {landscape ? (
        <PopupContainerX>
          <PopupContentX>
            <HeaderX style={{ backgroundColor: bg || '#8B95A1' }}>
              <div className={'index'} style={{ color: caption || '#FFFFFF' }}>
                Facility {index + 1}
              </div>
              <div className={'title'} style={{ color: title || '#FFFFFF' }}>
                {data.title}
              </div>
            </HeaderX>
            <div className={'row'}>
              <img src={data.img} alt={data.title} />
              <div>
                <div className={'wrapper'}>
                  <div className={'check'} />
                  <div className={'text'}>이용대상 : {data.user}</div>
                </div>
                <div className={'wrapper'}>
                  <div className={'check'} />
                  <div className={'text'}>{data.description}</div>
                </div>
              </div>
            </div>

            <CloseButtonX onClick={onClose}>
              <div className={'icon'}></div>
              <div className={'label'}>닫기</div>
            </CloseButtonX>
          </PopupContentX>
        </PopupContainerX>
      ) : (
        <PopupContainer>
          <PopupContent>
            <Header style={{ backgroundColor: bg || '#8B95A1' }}>
              <div className={'index'} style={{ color: caption || '#FFFFFF' }}>
                Facility {index + 1}
              </div>
              <div className={'title'} style={{ color: title || '#FFFFFF' }}>
                {data.title}
              </div>
            </Header>
            <img src={data.img} alt={data.title} />
            <div className={'wrapper'}>
              <div className={'check'} />
              <div className={'text'}>이용대상 : {data.user}</div>
            </div>
            <div className={'wrapper'}>
              <div className={'check'} />
              <div className={'text'}>{data.description}</div>
            </div>
            <CloseButton onClick={onClose}>
              <div className={'icon'}></div>
              <div className={'label'}>닫기</div>
            </CloseButton>
          </PopupContent>
        </PopupContainer>
      )}
    </>
  );
};

export default FacilityPopup;
