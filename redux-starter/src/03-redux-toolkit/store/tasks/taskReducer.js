import { createReducer } from '@reduxjs/toolkit';
import { addTask, removeTask, markTaskAsComplete } from './taskActions';

let id = 0;

export default createReducer([], {
  [addTask.type]: (state, action) => {
    state.push({
      id: ++id,
      task: action.payload.taskDescription,
      completed: false,
    });
  },
  [removeTask.type]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.taskId);
    state.splice(index, 1);
  },
  [markTaskAsComplete.type]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.taskId);
    state[index].completed = true;
  },
});
