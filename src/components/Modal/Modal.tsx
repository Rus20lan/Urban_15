import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { CardText } from '../PostCard/PostCard';

type Props = {
  isModal: boolean;
};

const ModalSubstrate = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalDialog = styled.div`
  max-width: 500px;
  margin: 40px auto;
`;

const ModalBody = styled.div`
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  padding: 40px;
  background-color: var(--m3-sys-light-surface-variant);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  max-height: 80vh;
  overflow-y: auto;
`;

const ModalFieldsWrapper = styled.div`
  height: 64%;
`;

const ModalTextArea = styled.textarea`
  resize: none;
  box-sizing: border-box;
  padding: 12px;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  width: 100%;
`;
const ModalBtn = styled.button`
  display: block;
  max-width: 102px;
  width: 100%;
  height: 40px;
  padding: 10px 24px;
`;

const Modal: FC<Props> = ({ isModal }) => {
  if (!isModal) {
    return null;
  }
  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const modalRoot = document.getElementById('modal')!;

  console.log(modalRoot);
  return createPortal(
    <ModalSubstrate>
      <ModalDialog>
        <ModalBody>
          <ModalFieldsWrapper>
            <ModalTextArea>sfdfsf</ModalTextArea>
            <ModalTextArea>sdgdfgggggggggggggfsf</ModalTextArea>
          </ModalFieldsWrapper>
          <ModalBtn
            style={{
              background: 'var(--m3-sys-light-inverse-primary)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-roboto-r)',
                letterSpacing: '0.02em',
              }}
            >
              Accept
            </span>
          </ModalBtn>
        </ModalBody>
      </ModalDialog>
    </ModalSubstrate>,

    modalRoot
  );
};

export default Modal;
