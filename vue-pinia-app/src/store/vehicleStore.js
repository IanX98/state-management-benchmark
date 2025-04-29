import { defineStore } from "pinia";
import { faker } from "@faker-js/faker";

export const useVehicleStore = defineStore("vehicle", {
  state: () => ({
    vehicles: [],
    creationTime: 0,
    loadTime: 0,
    editTime: 0,
    editedCount: 0,
    deleteTime: 0,
    deletedCount: 0,
  }),
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

    async loadFromJson(count) {
      const start = performance.now();

      try {
        const response = await fetch(`/${count}-dataset.json`);
        this.vehicles = await response.json();
        const end = performance.now();
        this.loadTime = end - start;
      } catch (error) {
        console.error("Erro ao carregar JSON:", error);
        this.vehicles = [];
        this.loadTime = 0;
      }
    },

    editVehicles(count) {
      const start = performance.now();

      for (let i = 0; i < count && i < this.vehicles.length; i++) {
        this.vehicles[i] = {
          ...this.vehicles[i],
          model: faker.vehicle.model(),
          plate: faker.vehicle.vin(),
          capacity: faker.number.int({ min: 2, max: 7 }),
          lastMaintenance: faker.date.past().toLocaleDateString(),
        };
      }

      const end = performance.now();
      this.editTime = end - start;
      this.editedCount = Math.min(count, this.vehicles.length);
    },

    deleteVehicles(count) {
      const start = performance.now();

      this.vehicles.splice(0, count);

      const end = performance.now();
      this.deleteTime = end - start;
      this.deletedCount = count;
    },

    clear() {
      this.vehicles = [];
      this.creationTime = 0;
      this.loadTime = 0;
      this.editTime = 0;
      this.deletedCount = 0;
      this.deleteTime = 0;
      this.editedCount = 0;
    },
  },
});
