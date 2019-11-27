import React from 'react';

class Todo extends React.Component {
    render() {
        const { id, text, complete, onTodoClick } = this.props;
        return (
            <li
                style={{
                    textDecoration: complete ? 'line-through' : 'none'
                }}
                onClick={() => onTodoClick(id)}>
                {text}
            </li>
        );
    }
}

export default Todo;