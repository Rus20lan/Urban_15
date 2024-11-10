import styled from 'styled-components';

interface Props {
  message: string;
}
const ErrorWrapper = styled.div`
  width: auto;
  height: auto;
  margin: 0 auto;
`;
const ErrorText = styled.h2`
  font-family: var(--font-roboto-r);
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 150%;
  letter-spacing: 0.01em;
  text-align: center;
  color: #213547;
`;

const ErrorMessage = (props: Props) => {
  const { message } = props;
  return (
    <ErrorWrapper>
      <ErrorText>{message}</ErrorText>
    </ErrorWrapper>
  );
};

export default ErrorMessage;
