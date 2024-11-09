import styled from 'styled-components';
import PostCard from '../PostCard/PostCard';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const PostCardsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

function PostCards() {
  const { posts } = useTypedSelector((state) => state.posts);

  return (
    <PostCardsContainer>
      {posts?.slice(0, 10).map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </PostCardsContainer>
  );
}

export default PostCards;
