import {ADD_TAREA,SHOW_ALL,SET_FILTRO} from '../actions/index';
import {addTareaAction,setFiltroAction} from '../actions/todo';
import {todos,filtro} from '../reducers/todo';

describe('todo acciones',()=>{
    it('agregar tarea',()=>{
        const res = {type:ADD_TAREA,text:"Una nueva tarea"};
        expect(addTareaAction("Una nueva tarea")).toEqual(res);
    });

    it('listar todas las tareas',()=>{
        const res = {type:SET_FILTRO,filtro:SHOW_ALL};
        expect(setFiltroAction(SHOW_ALL)).toEqual(res);
    });
});

describe('todo reducers',()=>{
    it('todos estado undefined',()=>{
        const state = undefined;
        const action = {};
        const nextState = [];
        expect(todos(state,action)).toEqual(nextState);
    });

    it('todos ADD_TAREA first',()=>{
        const state = [];
        const action = addTareaAction("Una nueva tarea");
        const nextState = [{text:"Una nueva tarea",complete:false}];
        expect(todos(state,action)).toEqual(nextState);
    });

    it('todos ADD_TAREA second',()=>{
        const state = [{text:"Una nueva tarea",complete:false}];
        const action = addTareaAction("Una segunda tarea");
        const nextState = [{text:"Una nueva tarea",complete:false},{text:"Una segunda tarea",complete:false}];
        expect(todos(state,action)).toEqual(nextState);
    });

    it('filtro estado undefined',()=>{
        const state = undefined;
        const action = {};
        const nextState = SHOW_ALL;
        expect(filtro(state,action)).toEqual(nextState);
    });
});