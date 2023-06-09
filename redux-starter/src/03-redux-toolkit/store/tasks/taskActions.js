import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction('ADD_TASK'); // return a function
export const removeTask = createAction('REMOVE_TASK');
export const markTaskAsComplete = createAction('MARK_TASK_AS_COMPLETE');

//* addTask() will return:
//*     {type: 'ADD_TASK', payload: undefined}
