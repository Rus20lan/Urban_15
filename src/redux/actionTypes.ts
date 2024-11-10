import { IData, IPost } from '../interfaces/interfaces';

export enum ActionType {
  GET_DATA_PENDING = 'GET_DATA_PENDING',
  GET_DATA_SUCCESS = 'GET_DATA_SUCCESS',
  CREATE_POSTS_BY_ARTICLE = 'CREATE_POSTS_BY_ARTICLE',
  ADD_FAVOURITES_POST = 'ADD_FAVOURITES_POST',
  DELETE_POST = 'DELETE_POST',
  SET_EDIT_POST_ID = 'EDIT_POST_ID',
  IS_MODAL_OPEN = 'IS_MODAL_OPEN',
  UPDATE_POST = 'UPDATE_POST'
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

interface actionSetEditPostID{
  type:ActionType.SET_EDIT_POST_ID;
  payload:number;
}

interface actionModal{
  type: ActionType.IS_MODAL_OPEN;
}

interface actionUpdatePost{
  type:ActionType.UPDATE_POST;
  payload:IPost;
}

export type Action =
  | actionPending
  | actionSuccess
  | actionCreatePosts
  | actionDeletePost
  | actionLikePost | actionSetEditPostID | actionModal | actionUpdatePost;
