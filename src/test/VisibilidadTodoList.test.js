import { SHOW_ALL, SHOW_COMPLETE, SHOW_NOT_COMPLETE } from "../actions";
import {getTodoByFiltro} from '../containers/VisibilidadTodoList';

describe("test de getTodoByFiltro",()=>{
    it("test SHOW_ALL",()=>{
        const todos = [{id:1,text:"primera tarea",complete:false},{id:2,text:"segunda tarea",complete:true}];
        const filtro = SHOW_ALL;
        const res = todos;
        expect(getTodoByFiltro(todos,filtro)).toEqual(res);        
    });

    it("test SHOW_COMPLETE",()=>{
        const todos = [{id:1,text:"primera tarea",complete:false},{id:2,text:"segunda tarea",complete:true}];
        const filtro = SHOW_COMPLETE;
        const res = [{id:2,text:"segunda tarea",complete:true}];
        expect(getTodoByFiltro(todos,filtro)).toEqual(res);
    });

    it("test SHOW_NOT_COMPLETE",()=>{
        const todos = [{id:1,text:"primera tarea",complete:false},{id:2,text:"segunda tarea",complete:true}];
        const filtro = SHOW_NOT_COMPLETE;
        const res = [{id:1,text:"primera tarea",complete:false}];
        expect(getTodoByFiltro(todos,filtro)).toEqual(res);
    });
});