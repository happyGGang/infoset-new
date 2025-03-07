import React from 'react';
import { Container, ContainerX } from './index.styled';
import { useOrientationStore } from '../../../../store/landscape-mode.store';
import character from '../../../../assets/img/smart_character.svg';
import book from '../../../../assets/img/smart_book.svg';
import search from '../../../../assets/img/smart_search.svg';

const Main = () => {
  const { isLandscape } = useOrientationStore();

  return (
    <>
      {isLandscape ? (
        <ContainerX>
          <img className={'character'} src={character} alt="" />
          <img className={'book'} src={book} alt="" />
          <img className={'search'} src={search} alt="" />
        </ContainerX>
      ) : (
        <Container>
          <img className={'character'} src={character} alt="" />
          <img className={'book'} src={book} alt="" />
          <img className={'search'} src={search} alt="" />
        </Container>
      )}
    </>
  );
};

export default Main;
