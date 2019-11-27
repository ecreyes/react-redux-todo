import React from 'react';
import {addTareaAction} from '../actions/todo';
import { connect } from 'react-redux'

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:""
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChange(e){
        this.setState({
            text:e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.dispatch(addTareaAction(this.state.text));
        e.target.reset();
        this.setState({
            text:""
        });
    }



    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleTextChange} placeholder="añadir tarea"/>
                <input type="submit" value="añadir"/>
            </form>
        );
    }
}

AddTodo = connect()(AddTodo);

export default AddTodo;