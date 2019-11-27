import {ADD_TAREA,SET_FILTRO} from './index';

export const addTareaAction = (text)=>{
    return {type:ADD_TAREA,text}
}

export const setFiltroAction = (filtro)=>{
    return {type:SET_FILTRO,filtro}
}