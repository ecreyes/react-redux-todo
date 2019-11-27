import React from 'react';

class Todo extends React.Component{
    render(){
        const {text,complete} = this.props;
        return(
            <li>{text}</li>
        );
    }
}

export default Todo;