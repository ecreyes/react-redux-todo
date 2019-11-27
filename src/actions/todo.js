import {ADD_TAREA,SET_FILTRO, COMPLETAR_TAREA} from './index';

export const addTareaAction = (text)=>{
    return {type:ADD_TAREA,text};
}

export const setFiltroAction = (filtro)=>{
    return {type:SET_FILTRO,filtro};
}


export const completarTareaAction = (index)=>{
    return {type:COMPLETAR_TAREA,index};
}