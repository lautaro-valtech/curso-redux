//! This is how to create reducers and actions nowadays.

import { createSlice } from '@reduxjs/toolkit';

let id = 0;

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: ++id,
        task: action.payload.taskDescription,
        completed: false,
      });
    },
    removeTask: (state, action) => {
      const indexOfTaskToRemove = state.findIndex(
        (task) => task.id === action.payload.taskId
      );
      state.splice(indexOfTaskToRemove, 1);
    },
    markTaskAsComplete: (state, action) => {
      const indexOfTaskToComplete = state.findIndex(
        (task) => task.id === action.payload.taskId
      );
      state[indexOfTaskToComplete].completed = true;
    },
  },
});

console.log(taskSlice);

export const { addTask, removeTask, markTaskAsComplete } = taskSlice.actions;
export default taskSlice.reducer;
