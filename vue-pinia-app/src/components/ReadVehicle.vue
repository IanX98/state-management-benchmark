<template>
  <div>
    <h3>Leitura de Veículos</h3>
    <button @click="load(1)" id="read-1">Ler 1 Registro</button>
    <button @click="load(100)" id="read-100">Ler 100 Registros</button>
    <button @click="load(1000)" id="read-1000">Ler 1000 Registros</button>
    <button @click="load(10000)" id="read-10000">Ler 10000 Registros</button>

    <p v-if="vehicleStore.loadTime" id="read-time">
      Tempo de leitura: {{ vehicleStore.loadTime.toFixed(2) }} ms
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

<script setup lang="ts">
import { useVehicleStore } from "../store/vehicleStore";

const vehicleStore = useVehicleStore();

function load(count: number) {
  vehicleStore.loadFromJson(count);
}
</script>
