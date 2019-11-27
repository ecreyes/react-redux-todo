import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        const { todos } = this.props;
        return (
            <ul>
                {todos.map((todo, index) =>
                    <Todo key={index} {...todo} />
                )}
            </ul>
        );
    }
}

export default TodoList;