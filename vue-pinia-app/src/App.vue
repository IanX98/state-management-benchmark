<template>
  <div id="app">
    <h1>Gerenciamento de Veículos com Pinia</h1>
    <CreateVehicle />
    <ReadVehicle />
    <EditVehicle />
  </div>
</template>

<script setup>
import CreateVehicle from './components/CreateVehicle.vue';
import ReadVehicle from './components/ReadVehicle.vue'
import EditVehicle from './components/EditVehicle.vue'
</script>

<style>
/* estilo básico opcional */
body {
  font-family: sans-serif;
  margin: 2rem;
}
</style>
