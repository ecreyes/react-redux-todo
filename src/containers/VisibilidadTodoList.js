import { SHOW_ALL, SHOW_COMPLETE, SHOW_NOT_COMPLETE } from '../actions/index';
import { connect } from 'react-redux'
import TodoList from '../components/TodoList';
import { completarTareaAction } from '../actions/todo';


export const getTodoByFiltro = (todos, filtro) => {
    switch (filtro) {
        case SHOW_ALL:
            return todos;
        case SHOW_COMPLETE:
            return todos.map((todo)=>{
                if(todo.complete){
                    return todo;
                }
            });
        case SHOW_NOT_COMPLETE:
            return todos.map((todo)=>{
                if(!todo.complete){
                    return todo;
                }
            });
        default:
            return todos;
    }
}


const mapStateToProps = (state) => {
    return {
        todos: getTodoByFiltro(state.todos, state.filtro)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(completarTareaAction(id));
        }
    };
}


const VisibilidadTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibilidadTodoList;