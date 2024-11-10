
import { Action, ActionType } from "../actionTypes";

const initialState ={
    id:-1
}

interface State{
    id:number;
}


export const idReducer = (state:State = initialState, action:Action):State =>{
    switch(action.type){
        case ActionType.SET_EDIT_POST_ID:
            return {
                ...state,
                id: action.payload
            };
        default: return state;
    }
}