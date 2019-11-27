import { combineReducers } from 'redux';
import {todos,filtro} from './todo';

const todoApp = combineReducers({
    filtro,
    todos
});

export default todoApp;