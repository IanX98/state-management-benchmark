import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

export const loadDeleteDataset = createAsyncThunk(
  "delete/loadDataset",
  async (count) => {
    const response = await fetch(`/${count}-dataset.json`);
    const data = await response.json();
    return data;
  }
);

const generateData = (count) => {
  return Array.from({ length: count * 2 }, (_, i) => ({
    id: i + 1,
    model: faker.vehicle.model(),
    plate: faker.vehicle.vin(),
    capacity: faker.number.int({ min: 2, max: 7 }),
    lastMaintenance: faker.date.past().toLocaleDateString(),
  }));
};

const initialState = {
  items: [],
  deleteTime: null,
};

const deleteSlice = createSlice({
  name: "delete",
  initialState,
  reducers: {
    generateData(state, action) {
      const count = action.payload;
      state.items = generateData(count);
    },
    deleteRows(state, action) {
      const count = action.payload;
      const start = performance.now();
      state.items = state.items.slice(count);
      const end = performance.now();
      state.deleteTime = end - start;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadDeleteDataset.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadDeleteDataset.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      });
  },
});

export const { deleteRows } = deleteSlice.actions;
export default deleteSlice.reducer;
