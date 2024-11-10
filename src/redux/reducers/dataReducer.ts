import { IData } from '../../interfaces/interfaces';
import { Action, ActionType } from '../actionTypes';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

interface State {
  data: IData | null;
  loading: boolean;
  error: string | null;
}

export const dataReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionType.GET_DATA_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case ActionType.GET_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
