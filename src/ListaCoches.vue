<template>
    <section>
      <h1>Coches</h1>
      <ul>
        <li v-for="(car, index) in cars" :key="index" class="car-item">
          <div class="car-details" @click="toggleDetails(index)">
            <span>{{ car.marca }}</span>
            <ul v-if="car.showDetails">
              <li>Marca: {{ car.marca }}</li>
              <li>Modelo: {{ car.modelo }}</li>
            </ul>
          </div>
          <div class="car-actions">
            <button @click="removeCar(index)" class="remove-btn">X</button>
          </div>
        </li>
      </ul>
    </section>
  </template>
  
  <script setup>
  import { toRefs } from 'vue';
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    cars: {
      type: Array,
      required: true
    }
  });
  
  const emit = defineEmits(['toggle-details', 'remove-car']);
  const { cars } = toRefs(props);
  
  const toggleDetails = (index) => {
    emit('toggle-details', index);
  };
  
  const removeCar = (index) => {
    emit('remove-car', index);
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0 0 30px 0;
  }
  
  .car-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .car-details {
    flex-grow: 1;
    cursor: pointer;
  }
  
  .car-details ul {
    margin-top: 10px;
    padding-left: 20px;
    background-color: #e0e0e0;
    border-radius: 5px;
  }
  
  .car-actions {
    margin-left: 20px;
  }
  
  .remove-btn {
    padding: 5px 10px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1em;
    line-height: 1;
  }
  
  .remove-btn:hover {
    background-color: #ff1a1a;
  }
  </style>