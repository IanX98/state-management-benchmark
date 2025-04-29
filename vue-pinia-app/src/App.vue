<template>
  <div id="app">
    <h1>Gerenciamento de Veículos com Pinia</h1>
    <CreateVehicle />
    <ReadVehicle />
    <EditVehicle />
    <DeleteVehicle />
    <SearchRandomOne/>
  </div>
</template>

<script setup>
import CreateVehicle from './components/CreateVehicle.vue';
import ReadVehicle from './components/ReadVehicle.vue'
import EditVehicle from './components/EditVehicle.vue'
import DeleteVehicle from './components/DeleteVehicle.vue'
import SearchRandomOne from './components/SearchRandomOne.vue'
</script>

<style>
body {
  font-family: sans-serif;
  margin: 2rem;
}
</style>
