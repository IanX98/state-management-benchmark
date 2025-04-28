import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';

export const loadEditDataset = createAsyncThunk(
  'edit/loadDataset',
  async (count) => {
    const response = await fetch(`/${count}-dataset.json`);
    const data = await response.json();
    return data;
  }
);

const editSlice = createSlice({
  name: 'edit',
  initialState: {
    items: [],
    status: 'idle',
    editTime: null,
    editedCount: 0,
  },
  reducers: {
    editRows(state, action) {
      const count = action.payload;
      const start = performance.now();

      for (let i = 0; i < count && i < state.items.length; i++) {
        state.items[i] = {
          ...state.items[i],
          model: faker.vehicle.model(),
          plate: faker.vehicle.vin(),
          capacity: faker.number.int({ min: 2, max: 7 }),
          lastMaintenance: faker.date.past().toLocaleDateString(),
        };
      }

      state.editTime = performance.now() - start;
      state.editedCount = Math.min(count, state.items.length);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadEditDataset.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadEditDataset.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.editTime = null;
        state.editedCount = 0;
      });
  },
});

export const { editRows } = editSlice.actions;
export default editSlice.reducer;
