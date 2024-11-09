import styled from 'styled-components';
import spinner from '../../images/icons/spinner.gif';

const SpinnerWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

function Spinner() {
  return (
    <SpinnerWrapper>
      <img src={spinner}></img>
    </SpinnerWrapper>
  );
}

export default Spinner;
