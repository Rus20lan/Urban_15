import { useEffect, useState } from 'react';
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

function App() {
  const [isModal, setIsModal] = useState(true);
  const dispatch: AppDispatch = useDispatch();
  const { loading } = useTypedSelector((state) => state.data);

  useEffect(() => {
    const loadData = async () => {
      await dispatch(getData());
      dispatch(accessPostsList());
    };
    loadData();
  }, []);

  return (
    <>
      <Header />
      <Main>
        {loading && <Spinner />}
        {!loading && <PostCards />}
      </Main>
      <Footer />
      <Modal isModal={isModal} />
    </>
  );
}

export default App;
