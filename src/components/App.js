import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibilidadTodoList from '../containers/VisibilidadTodoList';
import FooterContainer from '../containers/FooterContainer';

class App extends React.Component {
	render() {
		return (
			<div>
				<AddTodo/>
				<VisibilidadTodoList/>
				<FooterContainer/>
			</div>
		);
	}
}

export default App;
