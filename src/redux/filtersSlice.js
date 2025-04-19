import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter: {
        reducer(_, action) {
          return action.payload;
        },
      },
  },
});
export const { setFilter } = filterSlice.actions;


export const filterReducer = filterSlice.reducer;
export default filterSlice.reducer;