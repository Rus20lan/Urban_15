import React from 'react';
import styled from 'styled-components';
import NavigationBtns from '../NavigationBtns/NavigationBtns';
import { useResize } from '../../hooks/useResize';

interface Props {}

const HeaderContainer = styled.div`
  width: 84%;
  height: 100px;
  background: var(--m3-sys-light-background);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderTitle = styled.h1`
  margin: 0;
  font-family: var(--font-roboto-r);
  font-size: 3.2em;
  line-height: 1.1;
`;

function Header(props: Props) {
  const {} = props;
  const { width, isMobile } = useResize();
  return (
    <HeaderContainer
      style={
        isMobile
          ? {
              flexDirection: 'column',
              justifyContent: 'center',
              height: 'auto',
            }
          : {}
      }
    >
      <HeaderTitle style={isMobile ? { fontSize: '2.8em' } : {}}>
        Review of posts
      </HeaderTitle>
      <NavigationBtns />
    </HeaderContainer>
  );
}

export default Header;
