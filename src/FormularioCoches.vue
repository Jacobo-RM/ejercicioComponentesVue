<template>
    <form @submit.prevent="submitForm">
      <label for="marca">Marca:</label>
      <input id="marca" v-model="marca" type="text" required />
  
      <label for="modelo">Modelo:</label>
      <input id="modelo" v-model="modelo" type="text" required />
  
      <button type="submit">Agregar Coche</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { defineEmits } from 'vue';
  
  const emit = defineEmits(['add-car']);
  
  const marca = ref('');
  const modelo = ref('');
  
  const submitForm = () => {
    const newCar = {
      marca: marca.value,
      modelo: modelo.value,
      showDetails: false
    };
    emit('add-car', newCar);
    marca.value = '';
    modelo.value = '';
  };
  </script>
  
  <style scoped>
  label {
    margin-top: 10px;
  }
  
  input {
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    margin-top: 15px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>