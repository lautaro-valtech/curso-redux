import { configureStore } from '@reduxjs/toolkit';

import taskReducer from './slices/tasks/taskSlice';
import employeeReducer from './slices/employees/employeeSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
});

export default store;
