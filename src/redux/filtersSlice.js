import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filteredContact(state, action) {
      return action.payload;
    },
  },
});

export const { filteredContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
