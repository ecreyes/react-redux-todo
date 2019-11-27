import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';
import {addTareaAction} from './actions/todo';

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(addTareaAction("Esta es una nueva tarea"));

unsubscribe();


ReactDOM.render(<App />, document.getElementById('root'));