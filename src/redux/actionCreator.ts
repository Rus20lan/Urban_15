import { Dispatch } from 'redux';
import { Action, ActionType } from './actionTypes';
import { getPosts } from '../services/fetch';
import store from './store';
import { IPost } from '../interfaces/interfaces';

export const getData = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_DATA_PENDING,
    });

    const data = await getPosts();

    dispatch({
      type: ActionType.GET_DATA_SUCCESS,
      payload: data,
    });
  };
};

export const accessPostsList = () => {
  return (dispatch: Dispatch<Action>) => {
    const state = store.getState();
    const posts = state?.data.data?.articles.map((datum, index) => {
      return { ...datum, id: index, like: false } as IPost;
    });
    dispatch({ type: ActionType.CREATE_POSTS_BY_ARTICLE, payload: posts! });
  };
};

export const deletePost = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.DELETE_POST, payload: id });
  };
};

export const addLikePost = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.ADD_FAVOURITES_POST, payload: id });
  };
};
