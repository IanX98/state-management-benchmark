import { faker } from '@faker-js/faker';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const generateLocalRows = createAsyncThunk(
  'data/generateLocalRows',
  // eslint-disable-next-line no-unused-vars
  async (amount = 1000, thunkAPI) => {
    const start = performance.now();

    const rows = Array.from({ length: amount }, (_, i) => ({
      id: i + 1,
      model: faker.vehicle.model(),
      plate: faker.vehicle.vin(),
      capacity: faker.number.int({ min: 2, max: 7 }),
      lastMaintenance: faker.date.past().toLocaleDateString(),
    }));

    const end = performance.now();

    return { items: rows, loadTime: end - start };
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    status: 'idle',
    loadTime: null,
  },
  reducers: {
    clearData(state) {
      state.items = [];
      state.status = 'idle';
      state.loadTime = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateLocalRows.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(generateLocalRows.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.items;
        state.loadTime = action.payload.loadTime;
      });
  },
});

export const { clearData } = dataSlice.actions;

export default dataSlice.reducer;
