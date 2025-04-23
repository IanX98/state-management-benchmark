import { configureStore } from '@reduxjs/toolkit';
import readReducer from './readSlice';
import createReducer from './createSlice';

export const store = configureStore({
  reducer: {
    read: readReducer,
    create: createReducer,
  },
});
