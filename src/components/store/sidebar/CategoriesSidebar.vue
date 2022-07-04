<script setup>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import CategoryItem from "./CategoryItem.vue";

defineProps({
  selectedCategory: {
    type: Number,
    required: true,
  },
  categories: {
    type: Array,
  },
});
</script>

<template>
  <div class="store-container__main-container">
    <div class="store-container__title-container">
      <h2>Categorías</h2>
      <MenuIcon />
    </div>
  </div>
  <CategoryItem
    v-for="category in categories"
    v-bind:key="category.id"
    :id="category.id"
    :name="category.name"
    :is-selected="category.id === selectedCategory"
  />
</template>

<style scoped>
.store-container__main-container {
}
.store-container__title-container {
  /* background-color: aqua; */
  display: grid;
  grid-template-columns: auto 30px;
  padding: 20px;
}
</style>
