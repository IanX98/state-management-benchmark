import { configureStore } from '@reduxjs/toolkit';
import readReducer from './readSlice';
import createReducer from './createSlice';
import deleteReducer from './deleteSlice'
import editReducer from './updateSlice';

export const store = configureStore({
  reducer: {
    read: readReducer,
    create: createReducer,
    delete: deleteReducer,
    edit: editReducer,
  },
});
