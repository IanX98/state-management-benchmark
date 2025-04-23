import { configureStore } from '@reduxjs/toolkit';
import readReducer from './readSlice';
import createReducer from './createSlice';
import deleteReducer from './deleteSlice'

export const store = configureStore({
  reducer: {
    read: readReducer,
    create: createReducer,
    delete: deleteReducer,
  },
});
