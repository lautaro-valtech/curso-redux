import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { taskReducer } from './tasks';

const store = createStore(
  taskReducer,
  // applyMiddleware(thunk),
  devToolsEnhancer({ trace: true })
);

export default store;
