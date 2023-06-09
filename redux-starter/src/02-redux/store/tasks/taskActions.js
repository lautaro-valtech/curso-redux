import {
  ADD_TASK,
  REMOVE_TASK,
  MARK_TASK_AS_COMPLETE,
} from './taskActionTypes';

export const addTask = (taskDescription) => {
  return { type: ADD_TASK, payload: { taskDescription } };
};

export const removeTask = (taskId) => {
  return { type: REMOVE_TASK, payload: { taskId } };
};

export const markTaskAsComplete = (taskId) => {
  return { type: MARK_TASK_AS_COMPLETE, payload: { taskId } };
};

export const fetchTodo = () => async (dispatch, getState) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const task = await response.json();

  dispatch(addTask(task.title));
};
