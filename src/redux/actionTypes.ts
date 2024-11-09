import { IData, IPost } from '../interfaces/interfaces';

export enum ActionType {
  GET_DATA_PENDING = 'GET_DATA_PENDING',
  GET_DATA_SUCCESS = 'GET_DATA_SUCCESS',
  CREATE_POSTS_BY_ARTICLE = 'CREATE_POSTS_BY_ARTICLE',
  ADD_FAVOURITES_POST = 'ADD_FAVOURITES_POST',
  DELETE_POST = 'DELETE_POST',
}

// Типы для actions
interface actionPending {
  type: ActionType.GET_DATA_PENDING;
}
interface actionSuccess {
  type: ActionType.GET_DATA_SUCCESS;
  payload: IData;
}

interface actionCreatePosts {
  type: ActionType.CREATE_POSTS_BY_ARTICLE;
  payload: IPost[];
}

interface actionDeletePost {
  type: ActionType.DELETE_POST;
  payload: number;
}

interface actionLikePost {
  type: ActionType.ADD_FAVOURITES_POST;
  payload: number;
}

export type Action =
  | actionPending
  | actionSuccess
  | actionCreatePosts
  | actionDeletePost
  | actionLikePost;
