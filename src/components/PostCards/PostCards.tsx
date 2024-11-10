import styled from 'styled-components';
import PostCard from '../PostCard/PostCard';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useEffect, useState } from 'react';

import { POST_PER_PAGE } from '../../modules/modules';

const PostCardsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;
interface Props{
  page:number
}
function PostCards(props:Props) {
  const { posts } = useTypedSelector((state) => state.posts);
  const [pagePost,setPagePost] = useState({start:0,last:10});
  const {page} = props;


  useEffect(() =>{
    if(posts){
      if(page > 1){
        setPagePost({
          start:page*POST_PER_PAGE-POST_PER_PAGE,
          last:(page*POST_PER_PAGE>posts.length)? posts.length:page*POST_PER_PAGE,
        })
      }else{
        setPagePost(
          {start:0,last:10}
        )
      }
    }
  },[page]);
  

  return (
    <PostCardsContainer>
      {posts?.slice(pagePost.start,pagePost.last).map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </PostCardsContainer>
  );
}

export default PostCards;
