import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        const { todos, onTodoClick } = this.props;
        return (
            <ul>
                {todos.map((todo) =>
                    <Todo key={todo.id} {...todo} onTodoClick={onTodoClick} />
                )}
            </ul>
        );
    }
}

export default TodoList;