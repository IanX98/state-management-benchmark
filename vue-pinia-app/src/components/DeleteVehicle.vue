<template>
  <div>
    <h3>Remoção de registros</h3>
    <button @click="remove(1)" id="delete-1">Remover 1 linha</button>
    <button @click="remove(100)" id="delete-100">Remover 100 linhas</button>
    <button @click="remove(1000)" id="delete-1000">Remover 1000 linhas</button>
    <button @click="remove(10000)" id="delete-10000">Remover 10000 linhas</button>
    <p v-if="vehicleStore.deleteTime > 0">
      Tempo de remoção: {{ vehicleStore.deleteTime.toFixed(2) }} ms<br />
      Linhas removidas: {{ vehicleStore.deletedCount }}
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
        <tr v-for="v in vehicleStore.vehicles" :key="v.id">
          <td>{{ v.id }}</td>
          <td>{{ v.model }}</td>
          <td>{{ v.plate }}</td>
          <td>{{ v.capacity }}</td>
          <td>{{ v.lastMaintenance }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { useVehicleStore } from "../store/vehicleStore";
const vehicleStore = useVehicleStore();
function remove(count) {
  vehicleStore.deleteVehicles(count);
}
</script>
