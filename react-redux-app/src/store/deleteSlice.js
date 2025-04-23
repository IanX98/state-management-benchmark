import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

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
});

export const { deleteRows } = deleteSlice.actions;
export default deleteSlice.reducer;
