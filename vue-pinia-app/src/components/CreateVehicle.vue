<template>
  <div>
    <h3>Criação de Veículos</h3>
    <button @click="create(1)" id="create-1">Criar 1 Registro</button>
    <button @click="create(100)" id="create-100">Criar 100 Registros</button>
    <button @click="create(1000)" id="create-1000">Criar 1000 Registros</button>
    <button @click="create(10000)" id="create-10000">Criar 10000 Registros</button>
    <p v-if="vehicleStore.creationTime">
      Tempo: {{ vehicleStore.creationTime.toFixed(2) }} ms
    </p>

    <table v-if="vehicleStore.vehicles.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Modelo</th>
          <th>Placa</th>
          <th>Capacidade</th>
          <th>Última Manutenção</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vehicle in vehicleStore.vehicles" :key="vehicle.id">
          <td>{{ vehicle.id }}</td>
          <td>{{ vehicle.model }}</td>
          <td>{{ vehicle.plate }}</td>
          <td>{{ vehicle.capacity }}</td>
          <td>{{ vehicle.lastMaintenance }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { useVehicleStore } from "../store/vehicleStore";
const vehicleStore = useVehicleStore();
const create = (count) => {
  vehicleStore.createVehicles(count);
};
</script>
