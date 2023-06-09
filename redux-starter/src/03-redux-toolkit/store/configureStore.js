import { configureStore } from '@reduxjs/toolkit';

import taskReducer from './tasks';

const store = configureStore({ reducer: taskReducer });

export default store;
