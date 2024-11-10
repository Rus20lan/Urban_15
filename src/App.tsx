import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Main } from './components/Main/Main';
import PostCards from './components/PostCards/PostCards';
import Spinner from './components/Spinner/Spinner';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import { accessPostsList, getData } from './redux/actionCreator';
import { AppDispatch } from './redux/store';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { getTotalPageCount } from './modules/modules';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

function App() {
  const [page, setPage] = useState(1);
  const { id } = useTypedSelector((state) => state.id);
  const { isModal } = useTypedSelector((state) => state.isModal);
  const { posts } = useTypedSelector((state) => state.posts);
  const dispatch: AppDispatch = useDispatch();
  const { loading, error } = useTypedSelector((state) => state.data);

  const findPost = (id: number) => {
    if (id !== -1) {
      return posts?.find((post) => post.id === id);
    } else {
      return null;
    }
  };

  const memoPost = useMemo(() => findPost(id), [id]);

  useEffect(() => {
    const loadData = async () => {
      await dispatch(getData());
      if (error) dispatch(accessPostsList());
      // dispatch(accessPostsList());
    };
    loadData();
  }, []);

  const handleNextPageClick = useCallback(() => {
    const current = page;
    const next = current + 1;
    const total = posts ? getTotalPageCount(posts.length) : current;

    setPage(next <= total ? next : current);
  }, [page, posts]);

  const handlePrevPageClick = useCallback(() => {
    const current = page;
    const prev = current - 1;

    setPage(prev > 0 ? prev : current);
  }, [page]);

  return (
    <>
      <Header
        onNextPageClick={handleNextPageClick}
        onPrevPageClick={handlePrevPageClick}
        disable={{
          left: page === 1,
          right: page === getTotalPageCount(posts ? posts.length : 1),
        }}
      />
      <Main>
        {loading && <Spinner />}
        {error && !!!posts ? <ErrorMessage message={error} /> : ''}
        {!loading && <PostCards page={page} />}
      </Main>
      {!loading && <Footer />}
      {isModal && <Modal post={memoPost} />}
    </>
  );
}

export default App;
