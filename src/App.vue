```vue
<template>
  <div>
    <CarList :cars="cars" @toggle-details="toggleDetails" @remove-car="removeCar" />
    <CarForm @add-car="addCar" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CarList from './ListaCoches.vue';
import CarForm from './FormularioCoches.vue';

const cars = ref([
  { marca: 'Nissan', modelo: 'GT-R™', showDetails: false },
  { marca: 'Audi', modelo: 'S e-tron GT', showDetails: false },
  { marca: 'Lamborghini', modelo: 'Murcielago LP640-4 Coupé', showDetails: false }
]);

const addCar = (newCar) => {
  cars.value.push(newCar);
};

const toggleDetails = (index) => {
  cars.value[index].showDetails = !cars.value[index].showDetails;
};

const removeCar = (index) => {
  cars.value.splice(index, 1);
};
</script>