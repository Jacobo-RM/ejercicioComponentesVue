<template>
  <header>
    <h1>COCHES</h1>
  </header>
    <section>
      <h2>Lista de coches</h2>
      <ul>
        <li>Coche 1</li>
        <li>Coche 2</li>
        <li>Coche 3</li>
      </ul>
    </section>
    <section>
      <h2>Formulario</h2>
      <form>
        <label for="marca">Marca</label>
        <input type="text" id="marca" name="marca">
        <label for="modelo">Modelo</label>
        <input type="text" id="modelo" name="modelo">
        <label for="color">Color</label>
        <input type="text" id="color" name="color">
        <button type="submit">Añadir coche</button>
      </form>
    </section>

</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
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
</style>
