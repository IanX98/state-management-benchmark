import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const readJsonData = createAsyncThunk(
  'read/readJsonData',
  async (dataSet) => {
    const response = await fetch(`/${dataSet}`);
    
    const start = performance.now();
    const data = await response.json();
    const end = performance.now();
    const loadTime = end - start
    
    return { items: data, loadTime };
  }
);

const readSlice = createSlice({
  name: 'read',
  initialState: {
    items: [],
    status: 'idle',
    loadTime: null,
  },
  reducers: {
    clearReadData(state) {
      state.items = [];
      state.status = 'idle';
      state.loadTime = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(readJsonData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(readJsonData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.items;
        state.loadTime = action.payload.loadTime;
      });
  },
});

export const { clearReadData } = readSlice.actions;
export default readSlice.reducer;
