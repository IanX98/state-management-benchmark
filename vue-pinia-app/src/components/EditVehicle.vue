<template>
  <div>
    <h3>Edição de registros</h3>
    <button @click="edit(1)" id="edit-1">Editar 1 linha</button>
    <button @click="edit(100)" id="edit-100">Editar 100 linhas</button>
    <button @click="edit(1000)" id="edit-1000">Editar 1000 linhas</button>
    <button @click="edit(10000)" id="edit-10000">Editar 10000 linhas</button>
    <p v-if="vehicleStore.editTime > 0">
      Tempo de edição: {{ vehicleStore.editTime.toFixed(2) }} ms<br />
      Linhas editadas: {{ vehicleStore.editedCount }}
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
function edit(count) {
  vehicleStore.editVehicles(count);
}
</script>
