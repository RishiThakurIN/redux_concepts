import { SET_NAME } from "../actions/PostAction"

const initialName={
    name:'',
}

export const NameReducer=(state=initialName,action)=>{
    if(action.type===SET_NAME){
        return {
            ...state,
            name:action.payload
        }
    }
    return state;
}