import styled from 'styled-components';
import media from '../../images/media.png';
import menuIcon from '../../images/icons/point.svg';
import { useEffect, useRef, useState } from 'react';
import { IPost } from '../../interfaces/interfaces';
import { getFirstLetter, updateStringByNum } from '../../modules/modules';
import { useResize } from '../../hooks/useResize';
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { addLikePost, deletePost, isModalOpen, setEditPostID } from '../../redux/actionCreator';


const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  width: 360px;
  height: 480px;
  position: relative;
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  @media (max-width: 1440px) {
    width: 290px;
    height: 400px;
  }
`;
const CardHeader = styled.div`
  padding: 12px 4px 12px 16px;
  width: 100%;
  height: 72px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;
const HeaderWrapper = styled.div`
  max-width: 236px;
  width: 100%;
  max-height: 48px;
`;
const Avatar = styled.div`
  margin: 0;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: var(--m3-sys-light-primary);
  color: ;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  @media (max-width: 1440px) {
    width: 35px;
    height: 35px;
  }
`;
const AvaLеtter = styled.p`
  margin: 0;
  font-family: var(--font-roboto-r);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.01em;
  text-align: center;
  color: var(--m3-sys-light-background);
  cursor: pointer;
`;
const CardImg = styled.div`
  width: 100%;
  height: 188px;
`;
const CardInfo = styled.div`
  padding: 16px;
  width: 100%;
  height: 220px;
  box-sizing: border-box;
  @media (max-width: 1440px) {
    height: 140px;
  }
`;
const CardTitle = styled.h3`
  margin: 0;
  font-family: var(--font-roboto-r);
  font-size: 1rem;
  @media (max-width: 1440px) {
    overflow: scroll;
    height: 50px;
  }
`;
export const CardText = styled.p`
  font-family: var(--font-roboto-r);
  font-size: 0.88rem;
  color: #555;
  @media (max-width: 1440px) {
    height: 60px;
    margin-top: 10px;
    margin-bottom: 10px;
    overflow: scroll;
  }
`;
const MenuWrapper = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  flex: 0 0 auto;
  @media (max-width: 1440px) {
    width: 40px;
    height: 40px;
  }
`;
const MenuLink = styled.a`
  coursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const MenuList = styled.ul`
  width: 100px;
  position: absolute;
  top: 20px;
  right: 0px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  z-index: 100;
  background: var(--m3-sys-light-primary);
  border-radius: 12px;
  opacity: 1;
  @media (max-width: 1440px) {
    top: 14px;
  }
`;
const MenuItem = styled.li`
  list-style-type: none;
  width: 100%;
  padding: 6px 0px;
  user-select: none;
  &:active {
    transform: scale(1.2);
    opacity: 0.1;
  }
`;

function PostCard(props: IPost) {
  const [isOpen, setIsOpen] = useState(false);
  const { isDesktop, isLaptop } = useResize();
  const dispatch: AppDispatch = useDispatch();
  const ref: any = useRef();
  const { author, description, title, urlToImage, source, id, like } = props;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickEdit = (id:number) =>{
    dispatch(setEditPostID(id));
    dispatch(isModalOpen());

  }
  const handleClickDel = (id: number) => {
    dispatch(deletePost(id));
  };

  const handleClickLike = (id: number) => {
    dispatch(addLikePost(id));
  };

  return (
    <>
      <CardContainer
        style={
          like
            ? { backgroundColor: 'var(--like-post)' }
            : { backgroundColor: 'var(--m3-sys-light-surface-variant)' }
        }
      >
        <CardHeader>
          <Avatar>
            <AvaLеtter>{getFirstLetter(author)}</AvaLеtter>
          </Avatar>
          <HeaderWrapper>
            <CardTitle
              style={{ textAlign: 'left', height: '25px', overflow: 'hidden' }}
            >
              {author ? author : 'Anonymous'}
            </CardTitle>
            <CardText
              style={{
                textAlign: 'left',
                margin: '0',
                height: '25px',
                overflow: 'hidden',
              }}
            >
              {source.name}
            </CardText>
          </HeaderWrapper>
          <MenuWrapper>
            <MenuLink
              ref={ref}
              onClick={handleClick}
              style={
                isOpen
                  ? {
                      background: 'var(--m3-sys-light-primary)',
                      opacity: '1',
                      borderRadius: '12px 12px 0px 12px',
                    }
                  : {}
              }
            >
              <img
                src={menuIcon}
                alt="menu"
                style={
                  isOpen
                    ? {
                        transform: 'rotate(90deg)',
                        background: 'var(--m3-sys-light-primary)',
                      }
                    : { transform: 'rotate(0deg)' }
                }
              ></img>
            </MenuLink>
            {isOpen ? (
              <MenuList>
                <MenuItem>
                  <AvaLеtter data-ed onClick={()=>{
                    handleClickEdit(id);
                  }}>Edit</AvaLеtter>
                </MenuItem>
                <MenuItem>
                  <AvaLеtter
                    onClick={() => {
                      handleClickDel(id);
                    }}
                  >
                    Delete
                  </AvaLеtter>
                </MenuItem>
                <MenuItem>
                  <AvaLеtter
                    onClick={() => {
                      handleClickLike(id);
                    }}
                  >
                    {like ? 'Del favourites' : 'Add favourites'}
                  </AvaLеtter>
                </MenuItem>
              </MenuList>
            ) : null}
          </MenuWrapper>
        </CardHeader>

        <CardImg>
          <img
            src={urlToImage ? urlToImage : media}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            alt="Bad image"
          ></img>
        </CardImg>
        <CardInfo>
          <CardTitle>
            {/* {title} */}
            {isLaptop || isDesktop ? title : updateStringByNum(title, 100)}
          </CardTitle>
          <CardText>{description}</CardText>
        </CardInfo>
      </CardContainer>
    </>
  );
}

export default PostCard;
