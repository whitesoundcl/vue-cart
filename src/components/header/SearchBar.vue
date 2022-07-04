<script setup>
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";
</script>

<template>
  <div class="search-bar__main-container">
    <div class="search-bar__icon-container">
      <MagnifyIcon />
    </div>
    <input type="text" placeholder="Buscador de Producto y Categorias" />
  </div>
</template>
<style scoped>
.search-bar__main-container {
  display: grid;
  grid-auto-flow: column;
}
.search-bar__main-container input {
  border-radius: 0 15px 15px 0;
  border: 0px;
  width: 250px;
  height: 30px;
  color: var(--secondary-1-color);
  background-color: var(--secondary-1);
}

.search-bar__main-container input:focus {
  outline: none;
}
.search-bar__icon-container {
  background-color: var(--secondary-1);
  color: var(--secondary-1-color);
  display: flex;
  align-items: flex-end;
  border-radius: 15px 0 0 15px;
  padding-left: 5px;
}
</style>
