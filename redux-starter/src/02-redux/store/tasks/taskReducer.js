import {
  ADD_TASK,
  REMOVE_TASK,
  MARK_TASK_AS_COMPLETE,
} from './taskActionTypes';

let id = 0;

export const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.taskDescription,
          complete: false,
        },
      ];
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.taskId);
    case MARK_TASK_AS_COMPLETE:
      return state.map((task) =>
        task.id === action.payload.taskId ? { ...task, complete: true } : task
      );
    default:
      return state;
  }
};
