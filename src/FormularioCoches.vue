<template>
  <h1>Formulario</h1>
  <form @submit.prevent="submitForm" class="car-form">
    <input id="marca" v-model="marca" placeholder="Marca" class="input-field" />
    <input id="modelo" v-model="modelo" placeholder="Modelo" class="input-field" />
    <div class="button-group">
      <button v-if="isUpdating" type="button" @click="updateCar" class="update-button">Actualizar</button>
      <button v-else type="submit" class="add-button">Agregar Coche</button>
      <button v-if="isUpdating" type="button" @click="cancelUpdate" class="cancel-button">Cancelar</button>
    </div>
  </form>
</template>

<script setup>
import { defineEmits, defineProps, ref, watch } from 'vue';

const props = defineProps({
  marca: String,
  modelo: String,
  isUpdating: Boolean
});

const emit = defineEmits(['add-car', 'update-car', 'cancel-update']);

const marca = ref(props.marca);
const modelo = ref(props.modelo);

watch(() => props.marca, (newVal) => {
  marca.value = newVal;
});

watch(() => props.modelo, (newVal) => {
  modelo.value = newVal;
});

const submitForm = () => {
  emit('add-car', { marca: marca.value, modelo: modelo.value });
  marca.value = '';
  modelo.value = '';
};

const updateCar = () => {
  emit('update-car', { marca: marca.value, modelo: modelo.value });
};

const cancelUpdate = () => {
  emit('cancel-update');
  marca.value = '';
  modelo.value = '';
};
</script>

<style scoped>
.car-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-field {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button-group {
  display: flex;
  gap: 10px;
}

.add-button, .update-button, .cancel-button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-button {
  background-color: #4CAF50;
  color: white;
}

.update-button {
  background-color: #2196F3;
  color: white;
}

.cancel-button {
  background-color: #f44336;
  color: white;
}

.add-button:hover {
  background-color: #45a049;
}

.update-button:hover {
  background-color: #0b7dda;
}

.cancel-button:hover {
  background-color: #da190b;
}
</style>