import { defineStore } from "pinia";
import { faker } from "@faker-js/faker";

export const useVehicleStore = defineStore("vehicle", {
  state: () => ({ vehicles: [], creationTime: 0 }),
  actions: {
    createVehicles(count) {
      const start = performance.now();

      this.vehicles = Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        model: faker.vehicle.model(),
        plate: faker.vehicle.vin(),
        capacity: faker.number.int({ min: 2, max: 7 }),
        lastMaintenance: faker.date.past().toLocaleDateString(),
      }));

      const end = performance.now();
      this.creationTime = end - start;
    },
    clear() {
      this.vehicles = [];
      this.creationTime = 0;
    },
  },
});
