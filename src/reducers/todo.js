import {ADD_TAREA} from '../actions/index';

/*
    action example: {type:ADD_TAREA,text:"una tarea"}
*/
export const todos = (state = [], action) => {
    switch(action.type){
        case ADD_TAREA:
            return [...state,{text:action.text,complete:false}];
        default:
            return state;
    }
}