import { combineReducers } from 'redux';
import { dataReducer } from './reducers/dataReducer';
import { postsReducer } from './reducers/postsReducer';
import { idReducer } from './reducers/idReducer';
import { modalReducer } from './reducers/modalReducer';

const reducers = combineReducers({
  data: dataReducer,
  posts: postsReducer,
  id: idReducer,
  isModal: modalReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
