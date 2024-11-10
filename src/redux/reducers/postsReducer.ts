import { IPost } from '../../interfaces/interfaces';
import { Action, ActionType } from '../actionTypes';

const initialState = {
  posts: null,
};

interface State {
  posts: IPost[] | null;
}

export const postsReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionType.CREATE_POSTS_BY_ARTICLE:
      return {
        ...state,
        posts: action.payload,
      };
    case ActionType.DELETE_POST:
      return {
        ...state,
        posts: state.posts?.filter(
          (post: IPost) => post.id !== action.payload
        )!,
      };
    case ActionType.ADD_FAVOURITES_POST:
      return {
        ...state,
        posts: state.posts?.map((post: IPost) => {
          if (post.id === action.payload) {
            post.like = !post.like;
          }

          return post;
        })!,
      };
      case ActionType.UPDATE_POST:
        return{
          ...state,
          posts: state.posts?.map((post:IPost)=>{
            if(post.id === action.payload.id){             
              post = action.payload;
            }
            return post;
          })!
        }
      default:
        return state;
  }
};
