import { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { isModalOpen, updatePost } from '../../redux/actionCreator';
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import style from './modal.module.css';
import { IPost } from '../../interfaces/interfaces';
import { getQuery } from '../../modules/modules';


type Props = {
  post: IPost | null | undefined;
}

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
  @media (max-width: 1440px) {
    max-width: 400px;
    margin: 20px auto;
  }
  @media (max-width: 1024px) {
    max-width: 350px;
  }
`;

const ModalBody = styled.div`
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  padding: 40px;
  background-color: var(--m3-sys-light-surface-variant);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  max-height: auto;
  overflow-y: auto;
  @media (max-width: 1440px) {
    padding: 20px;
  }
  @media (max-width: 1024px) {
    padding: 10px;
  }
`;

const ModalFieldsWrapper = styled.div`
  height: 64%;
`;

const ModalBtn = styled.button`
  display: block;
  max-width: 102px;
  width: 100%;
  height: 40px;
  
`;

const Modal:FC <Props>= ({post}) => {
  const ref:any  = useRef();
  const [editPost, setEditPost] = useState(getQuery(post));
  const {isModal} = useTypedSelector((state)=>state.isModal);
  const dispatch: AppDispatch = useDispatch();
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      
      const el = event.target as HTMLElement;
      if (ref.current && !ref.current.contains(event.target) && !el.dataset.ed) {
        dispatch(isModalOpen());
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isModal]);

  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);


  const handleClickOk = () =>{
    dispatch(isModalOpen());
    console.log(editPost, post?.author);
    dispatch(updatePost({...post!, ...editPost}))
    console.log(post?.id);
  }
  const handleClickCancel = () =>{
    dispatch(isModalOpen());
  }

  const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
    console.log(e.target.name, e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    if(name === 'source'){
      let source = editPost.source;
      source.name = value;
      setEditPost(
        {...editPost, source}
      )
      
    }else if(name === 'author'){
        setEditPost({...editPost, author:value})
    }else{
      setEditPost(
        Object.assign({},editPost,{[name]:value})
      )


    }
  }

  const modalRoot = document.getElementById('modal')!;

  return isModal&& createPortal(<ModalSubstrate>
    <ModalDialog >
      <ModalBody ref={ref} data-name className={style.modalBody}>
        <ModalFieldsWrapper className={style.modalFieldsWrapper}>
          <p className={style.fieldName}>Author</p>
          <textarea onChange={handleChange} className={style.modalTextArea} name='author' value={editPost.author?editPost.author:''}></textarea>
          <p className={style.fieldName}>Source name</p>
          <textarea onChange={handleChange} className={style.modalTextArea} name='source' value={editPost.source.name}></textarea>
          <p className={style.fieldName}>Title</p>
          <textarea onChange={handleChange} className={style.modalTextArea} name='title' value={editPost.title}></textarea>
          <p className={style.fieldName}>Description</p>
          <textarea onChange={handleChange} className={`${style.modalTextArea} ${style.increaseAuto}`} name='description' value={editPost.description}></textarea>
          <p className={style.fieldName}>Url to Image</p>
          <textarea onChange={handleChange} className={style.modalTextArea} name='urlToImage' value={editPost.urlToImage}></textarea>
        </ModalFieldsWrapper>
        <div className={style.modalBtnsWrapper}>
        <ModalBtn className={style.modalBtn} onClick={handleClickOk}>
          <span className={style.modalBtnSpan}>
            Accept
          </span>
        </ModalBtn>
        <ModalBtn className={style.modalBtn} style={{background:'var(--m3-sys-light-error)'}} onClick={handleClickCancel}>
          <span className={style.modalBtnSpan}>
          cancel
          </span>
        </ModalBtn>
        </div>
      </ModalBody>
    </ModalDialog>
  </ModalSubstrate>
    ,

    modalRoot
  );
};

export default Modal;

