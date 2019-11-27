import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibilidadTodoList from '../containers/VisibilidadTodoList';

class App extends React.Component {
	render() {
		return (
			<div>
				<AddTodo/>
				<VisibilidadTodoList/>
			</div>
		);
	}
}

export default App;
