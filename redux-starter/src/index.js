import store from './03-redux-toolkit/store/configureStore';
import {
  addTask,
  removeTask,
  markTaskAsComplete,
} from './03-redux-toolkit/store/tasks';

const unsubscribe = store.subscribe(() => {
  console.log('Updated', store.getState());
});

// This addTask function recivies the payload as a parameter
store.dispatch(addTask({ taskDescription: 'Task 1' }));
store.dispatch(removeTask({ taskId: 1 }));
store.dispatch(addTask({ taskDescription: 'Task 2' }));
store.dispatch(markTaskAsComplete({ taskId: 2 }));
