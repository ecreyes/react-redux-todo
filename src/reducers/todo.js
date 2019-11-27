import {ADD_TAREA,SHOW_ALL} from '../actions/index';

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

export const filtro = (state=SHOW_ALL,action)=>{
    switch(action.type){
        default:
            return state;
    }
}