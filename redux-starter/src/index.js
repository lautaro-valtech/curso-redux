import store from './04-redux-toolkit-slice/store/configureStore';
import {
  addTask,
  removeTask,
  markTaskAsComplete,
} from './04-redux-toolkit-slice/store/slices/tasks/taskSlice';
import { addEmployee } from './04-redux-toolkit-slice/store/slices/employees/employeeSlice';

const unsubscribe = store.subscribe(() => {
  console.log('Updated', store.getState());
});

// This addTask function recivies the payload as a parameter

store.dispatch(addTask({ taskDescription: 'Task 1' }));
store.dispatch(removeTask({ taskId: 1 }));
store.dispatch(addTask({ taskDescription: 'Task 2' }));
store.dispatch(markTaskAsComplete({ taskId: 2 }));

// unsubscribe()

store.dispatch(addEmployee({ name: 'Ernesto' }));
