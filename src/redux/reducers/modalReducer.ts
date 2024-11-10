import { Action, ActionType } from "../actionTypes";


const initalState = {
    isModal:false
}

interface State{
    isModal:boolean;
}

export const modalReducer = (state:State = initalState, action:Action):State =>{
    switch(action.type){
        case ActionType.IS_MODAL_OPEN:
            return{
                ...state,
                isModal: !state.isModal
            }
        default: return state;
    }
}