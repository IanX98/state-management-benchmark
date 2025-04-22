import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSingleData = createAsyncThunk(
  'data/singleSmall',
  async () => {
    const response = await fetch('/single-dataset.json');
    return response.json();
  }
);

export const fetchSmallData = createAsyncThunk(
  'data/fetchSmall',
  async () => {
    const response = await fetch('/small-dataset.json');
    return response.json();
  }
);

export const fetchMediumData = createAsyncThunk(
  'data/fetchMedium',
  async () => {
    const response = await fetch('/medium-dataset.json');
    return response.json();
  }
);

export const fetchLargeData = createAsyncThunk(
  'data/fetchLarge',
  async () => {
    const response = await fetch('/large-dataset.json');
    return response.json();
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    status: 'idle'
  },
  reducers: {
    clearData(state) {
      state.items = [];
      state.status = 'idle';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSmallData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMediumData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLargeData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSingleData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchSmallData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchMediumData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchLargeData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      });
  }
});

export const { clearData } = dataSlice.actions;
export default dataSlice.reducer;
