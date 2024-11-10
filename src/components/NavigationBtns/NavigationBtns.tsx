import styled from 'styled-components';
import style from './navBtns.module.css';
import lArrow from '../../images/icons/leftArrow.svg';
import rArrow from '../../images/icons/rightArrow.svg';
import { FC } from 'react';
import React from 'react';
const NavBtnsContainer = styled.div`
  border-radius: 100px;
  padding: 10px;
  max-height: 82px;
  height: 100%;
  width: 164px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background: var(--m3-sys-light-surface-variant);

  @media (max-width: 1440px) {
    width: 124px;
    height: 64px;
    padding: 8px;
  }
`;


type PaginationProps = {
  onNextPageClick: () => void;
  onPrevPageClick: () => void;
  disable: {
    left: boolean;
    right: boolean;
  };
};

const NavigationBtns:FC<PaginationProps> = ({onNextPageClick, onPrevPageClick, disable}) => {

  const handleNextPageClick = () =>{
    onNextPageClick();
  }
  const handlePrevPageClick = () =>{
    onPrevPageClick();
  }

  return (
    <NavBtnsContainer>
      <button className={style.arrow} disabled={disable.left} onClick={handlePrevPageClick}><img src={lArrow} alt='left arrow'></img></button>
      <button className={style.arrow} disabled={disable.right} onClick={handleNextPageClick}><img src={rArrow} alt='right arrow'></img></button>
      {/* <Arrow onClick={handlePrevPageClick}
        disabled={disable.left}>
        <img
          src={lArrow}
          alt="left arrow"
          style={{
            width: '8.5px',
            height: '17px',
          }}
        ></img>
      </Arrow> */}
      {/* <Arrow>
        <img
          src={rArrow}
          alt="right arrow"
          style={{
            width: '8.5px',
            height: '17px',
          }}
        ></img>
      </Arrow> */}
    </NavBtnsContainer>
  );
};

export default React.memo(NavigationBtns) ;
