<template>
  <h1>Lista de coches</h1>
  <ul class="car-list">
    <li v-for="(car, index) in cars" :key="index" @click="selectCar(car, index)" class="car-item">
      <span class="car-text">{{ car.marca }} {{ car.modelo }}</span>
      <button @click.stop="confirmRemoveCar(index)" class="remove-button">eliminar</button>
    </li>
  </ul>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
  cars: Array
});

const emit = defineEmits(['remove-car', 'select-car']);

const removeCar = (index) => {
  emit('remove-car', index);
};

const confirmRemoveCar = (index) => {
  if (confirm('¿Está seguro de que desea eliminar este coche?')) {
    removeCar(index);
  }
};

const selectCar = (car, index) => {
  emit('select-car', car, index);
};
</script>

<style scoped>
.car-list {
  list-style-type: none;
  padding: 0;
}

.car-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  cursor: pointer;
}

.car-item:hover {
  background-color: #f0f0f0;
}

.car-text {
  flex: 1;
  margin-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.remove-button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.remove-button:hover {
  background-color: #ff1a1a;
}
</style>