import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import todoApp from './reducers/index';

const store = createStore(todoApp,devToolsEnhancer(
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  ));
export default store;