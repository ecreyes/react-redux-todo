import {ADD_TAREA,SHOW_ALL,COMPLETAR_TAREA, SET_FILTRO} from '../actions/index';
let id = 0;

/*
    action example: {type:ADD_TAREA,text:"una tarea"}
*/
export const todos = (state = [], action) => {
    switch(action.type){
        case ADD_TAREA:
            return [...state,{id:++id,text:action.text,complete:false}];
        case COMPLETAR_TAREA:
            return state.map((todo)=>{
                if(todo.id === action.index){
                    return {id:todo.id,text:todo.text,complete:true};
                }
                return todo;
            });
        default:
            return state;
    }
}


/*
    action example: {type:SET_FILTRO,filtro:SHOW_ALL}
*/
export const filtro = (state=SHOW_ALL,action)=>{
    switch(action.type){
        case SET_FILTRO:
            return action.filtro;
        default:
            return state;
    }
}