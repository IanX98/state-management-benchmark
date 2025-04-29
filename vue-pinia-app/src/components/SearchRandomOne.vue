<template>
  <div>
    <h3>Buscar Registro Aleatório</h3>
    <button @click="find">Buscar</button>
    <p v-if="vehicleStore.searchTime > 0">
      Tempo de busca: {{ vehicleStore.searchTime.toFixed(2) }} ms
    </p>

    <div v-if="vehicleStore.selectedVehicle">
      <h4>Registro Encontrado:</h4>
      <p><strong>ID:</strong> {{ vehicleStore.selectedVehicle.id }}</p>
      <p><strong>Modelo:</strong> {{ vehicleStore.selectedVehicle.model }}</p>
      <p><strong>Placa:</strong> {{ vehicleStore.selectedVehicle.plate }}</p>
      <p>
        <strong>Capacidade:</strong> {{ vehicleStore.selectedVehicle.capacity }}
      </p>
      <p>
        <strong>Última Manutenção:</strong>
        {{ vehicleStore.selectedVehicle.lastMaintenance }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { useVehicleStore } from "../store/vehicleStore";
const vehicleStore = useVehicleStore();
function find() {
  vehicleStore.findRandomVehicle();
}
</script>
