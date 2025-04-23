import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadSearchDataset = createAsyncThunk(
  'search/loadSearchDataset',
  async (count) => {
    const response = await fetch(`/${count}-dataset.json`);
    const data = await response.json();
    return data;
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    items: [],
    foundItem: null,
    status: 'idle',
    searchTime: null
  },
  reducers: {
    searchRandomItem: (state) => {
      const start = performance.now();
      if (state.items.length > 0) {
        const index = Math.floor(Math.random() * state.items.length);
        state.foundItem = state.items[index];
      }
      const end = performance.now();
      state.searchTime = end - start;
    },
    clearSearch: (state) => {
      state.items = [];
      state.foundItem = null;
      state.status = 'idle';
      state.searchTime = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSearchDataset.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadSearchDataset.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      });
  }
});

export const { searchRandomItem, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
