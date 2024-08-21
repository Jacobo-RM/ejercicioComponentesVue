<template>
  <div>
    <CarList :cars="cars" @remove-car="removeCar" @select-car="selectCar" />
    <CarForm 
      @add-car="addCar" 
      @update-car="updateCar" 
      @cancel-update="cancelUpdate" 
      :marca="selectedMarca" 
      :modelo="selectedModelo" 
      :isUpdating="isUpdating" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CarList from './ListaCoches.vue';
import CarForm from './FormularioCoches.vue';

const cars = ref([
  { marca: 'Nissan', modelo: 'GT-R™' },
  { marca: 'Audi', modelo: 'S e-tron GT' },
  { marca: 'Lamborghini', modelo: 'Murcielago LP640-4 Coupé' }
]);

const selectedMarca = ref('');
const selectedModelo = ref('');
const isUpdating = ref(false);
const selectedIndex = ref(null);

const addCar = (newCar) => {
  cars.value.push(newCar);
};

const removeCar = (index) => {
  cars.value.splice(index, 1);
};

const selectCar = (car, index) => {
  selectedMarca.value = car.marca;
  selectedModelo.value = car.modelo;
  isUpdating.value = true;
  selectedIndex.value = index;
};

const updateCar = (updatedCar) => {
  if (selectedIndex.value !== null) {
    cars.value[selectedIndex.value] = updatedCar;
    cancelUpdate();
  }
};

const cancelUpdate = () => {
  selectedMarca.value = '';
  selectedModelo.value = '';
  isUpdating.value = false;
  selectedIndex.value = null;
};
</script>