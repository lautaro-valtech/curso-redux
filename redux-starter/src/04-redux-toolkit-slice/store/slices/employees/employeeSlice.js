import { createSlice } from '@reduxjs/toolkit';

let id = 0;

const employeeSlice = createSlice({
  name: 'employee',
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      return [...state, { id: ++id, name: action.payload.name }];
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
