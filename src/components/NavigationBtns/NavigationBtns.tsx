import styled from 'styled-components';
import lArrow from '../../images/icons/leftArrow.svg';
import rArrow from '../../images/icons/rightArrow.svg';
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

const Arrow = styled.a`
  border-radius: 100px;
  width: 62px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex: 0 0 auto;
  background: var(--m3-sys-light-primary);

  &:hover {
    background: var(--purple-60);
  }

  &:active {
    transform: scale(0.98);
    background: var(--purple-70);
  }

  @media (max-width: 1440px) {
    width: 48px;
    height: 48px;
  }
`;

const NavigationBtns = () => {
  return (
    <NavBtnsContainer>
      <Arrow>
        <img
          src={lArrow}
          alt="left arrow"
          style={{
            width: '8.5px',
            height: '17px',
          }}
        ></img>
      </Arrow>
      <Arrow>
        <img
          src={rArrow}
          alt="right arrow"
          style={{
            width: '8.5px',
            height: '17px',
          }}
        ></img>
      </Arrow>
    </NavBtnsContainer>
  );
};

export default NavigationBtns;
