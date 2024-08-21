<template>
  <header>
    <h1>cochesguapos.com</h1>
  </header>
  <div class="container">
    <div class="formulario">
      <h2>Añadir coche</h2>
      <form @submit.prevent="addCoche">
        <label for="marca">Marca</label>
        <input type="text" id="marca" v-model="newCoche.marca">

        <label for="modelo">Modelo</label>
        <input type="text" id="modelo" v-model="newCoche.modelo">

        <label for="anio">Año</label>
        <input type="number" id="anio" v-model="newCoche.anio">

        <label for="color">Color</label>
        <input type="text" id="color" v-model="newCoche.color">

        <label for="combustible">Tipo de Combustible</label>
        <select id="combustible" v-model="newCoche.combustible">
          <option value="Gasolina">Gasolina</option>
          <option value="Diésel">Diésel</option>
          <option value="Eléctrico">Eléctrico</option>
          <option value="Híbrido">Híbrido</option>
        </select>

        <label for="puertas">Número de Puertas</label>
        <input type="number" id="puertas" v-model="newCoche.puertas">

        <label for="imagen">Imagen</label>
        <input type="file" id="imagen" @change="subirImagen">
        <img v-if="imagePreview" :src="imagePreview" alt="Vista previa de la imagen" class="imagenPreview">

        <button type="submit">Añadir coche</button>
      </form>
    </div>

    <div class="lista">
      <ul>
        <li v-for="item in coches" :key="item.id" class="cochesItems" @click="selectCoche(item)">
          <div class="cocheInfo">
            <span>{{ item.marca }} ({{ item.modelo }})</span>
            <button class="eliminar" @click.stop="deleteCoche(item.id)">X</button>
          </div>
          <img v-if="item.imagen" :src="item.imagen" alt="Imagen del coche" class="imagenCoche">
        </li>
      </ul>
    </div>
  </div>

  <div v-if="showModal" class="modal">
    <div class="modalContenedor">
      <span class="close" @click="showModal = false">&times;</span>
      <h2>{{ cocheSeleccionado.marca }} ({{ cocheSeleccionado.modelo }})</h2>
      <p>Año: {{ cocheSeleccionado.anio }}</p>
      <p>Color: {{ cocheSeleccionado.color }}</p>
      <p>Combustible: {{ cocheSeleccionado.combustible }}</p>
      <p>Puertas: {{ cocheSeleccionado.puertas }}</p>
      <img v-if="cocheSeleccionado.imagen" :src="cocheSeleccionado.imagen" alt="Imagen del coche" class="imagenCoche">
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const showModal = ref(false);
    const cocheSeleccionado = ref(null);
    const newCoche = ref({
      marca: '',
      modelo: '',
      anio: '',
      color: '',
      combustible: '',
      puertas: '',
      imagen: ''
    });

    const coches = ref([
      { id: 1, marca: 'Toyota', modelo: 'Corolla', anio: 2020, color: 'Rojo', combustible: 'Gasolina', puertas: 4, imagen: require('@/assets/toyotaCorolla.png') },
      { id: 2, marca: 'Honda', modelo: 'Odyssey', anio: 2019, color: 'Azul', combustible: 'Diésel', puertas: 5, imagen: require('@/assets/odyssey.png') },
      { id: 3, marca: 'DC', modelo: 'Batmobile', anio: 2022, color: 'Negro', combustible: 'Eléctrico', puertas: 2, imagen: require('@/assets/batmobile.png') }
    ]);

    const addCoche = () => {
      const newId = coches.value.length ? coches.value[coches.value.length - 1].id + 1 : 1;
      coches.value.push({ id: newId, ...newCoche.value });
      newCoche.value = { marca: '', modelo: '', anio: '', color: '', combustible: '', puertas: '', imagen: '' };
    };

    const deleteCoche = (id) => {
      coches.value = coches.value.filter(coche => coche.id !== id);
    };

    const subirImagen = (event) => {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          newCoche.value.imagen = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Por favor, selecciona un archivo de imagen.');
      }
    };

    const selectCoche = (coche) => {
      cocheSeleccionado.value = coche;
      showModal.value = true;
    };

    return { showModal, cocheSeleccionado, newCoche, coches, addCoche, deleteCoche, subirImagen, selectCoche };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  justify-content: center;

}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modalContenedor {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.formulario {
  width: 40%;
  display: flex;
  padding: auto;
  flex-direction: column;
  border: 2px solid black;
}

.formulario form {
  display: flex;
  flex-direction: column;
}

.formulario label,
.formulario input,
.formulario button,
.formulario img {
  margin-bottom: 5px;
  width: 100%;
  max-width: 300px;
  align-self: center;
}

#combustible {
  width: 20%;
  align-self: center;
}

.formulario input,
.formulario select,
.formulario button {
  padding: 5px;
  margin-bottom: 10px;
}

.cocheInfo span {
  display: block;
}


.lista {
  width: 40%;
}

.cochesItems {
  list-style-type: none;
  margin: 10px 0;
  padding: 10px;
  width: 40%;
  ;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cocheInfo {
  display: flex;
  flex-direction: column;
}

.imagenCoche {
  width: 200px;
  margin-left: 2vw;
  height: auto;
}

.imagenPreview {
  width: 100px;
  height: auto;
  margin-top: 10px;
}

.eliminar {
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 5px;
}
</style>