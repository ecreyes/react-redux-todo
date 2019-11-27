import { SHOW_ALL } from '../actions/index';
import { connect } from 'react-redux'
import TodoList from '../components/TodoList';


export const getTodoByFiltro = (todos, filtro) => {
    switch (filtro) {
        case SHOW_ALL:
            return todos;
        default:
            return todos;
    }
}


const mapStateToProps = (state) => {
    return {
        todos: getTodoByFiltro(state.todos, state.filtro)
    };
}


const VisibilidadTodoList = connect(
    mapStateToProps
)(TodoList);

export default VisibilidadTodoList;