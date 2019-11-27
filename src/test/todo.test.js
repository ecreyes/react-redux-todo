import {ADD_TAREA} from '../actions/index';
import {addTareaAction} from '../actions/todo';
import {todos} from '../reducers/todo';

describe('todo acciones',()=>{
    it('agregar tarea',()=>{
        const res = {type:ADD_TAREA,text:"Una nueva tarea"};
        expect(addTareaAction("Una nueva tarea")).toEqual(res);
    });
});

describe('todo reducers',()=>{
    it('estado undefined',()=>{
        const state = undefined;
        const action = {};
        const nextState = [];
        expect(todos(state,action)).toEqual(nextState);
    });

    it('ADD_TAREA first',()=>{
        const state = [];
        const action = addTareaAction("Una nueva tarea");
        const nextState = [{text:"Una nueva tarea",complete:false}];
        expect(todos(state,action)).toEqual(nextState);
    });

    it('ADD_TAREA second',()=>{
        const state = [{text:"Una nueva tarea",complete:false}];
        const action = addTareaAction("Una segunda tarea");
        const nextState = [{text:"Una nueva tarea",complete:false},{text:"Una segunda tarea",complete:false}];
        expect(todos(state,action)).toEqual(nextState);
    });
});