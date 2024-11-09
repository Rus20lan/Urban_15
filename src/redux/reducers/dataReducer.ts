import { IData } from '../../interfaces/interfaces';
import { Action, ActionType } from '../actionTypes';

const initialState = {
  data: null,
  loading: false,
};

interface State {
  data: IData | null;
  loading: boolean;
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
    default:
      return state;
  }
};
