import React from 'react';

class TodoList extends React.Component{
    render(){
        const todos = this.props.todos;
        console.log(todos);
        return(
            <ul>
                <li>primer texto</li>
                <li>segundo texto</li>
                <li>tercero texto</li>
            </ul>
        );
    }
}

export default TodoList;