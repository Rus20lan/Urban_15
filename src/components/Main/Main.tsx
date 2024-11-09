import { ReactNode } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  margin: 80px auto auto;
  max-width: 1920px;
  width: 84%;
  height: auto;
`;

interface Props {
  children: ReactNode;
}

export const Main = (props: Props) => {
  return <MainContainer>{props.children}</MainContainer>;
};
