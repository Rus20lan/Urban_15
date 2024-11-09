import { combineReducers } from 'redux';
import { dataReducer } from './reducers/dataReducer';
import { postsReducer } from './reducers/postsReducer';

const reducers = combineReducers({
  data: dataReducer,
  posts: postsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
