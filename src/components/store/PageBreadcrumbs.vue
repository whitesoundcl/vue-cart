<script setup>
import CRIcon from "vue-material-design-icons/ChevronRight.vue";

defineProps({
  currentCategory: {
    type: String,
  },
});

</script>

<template>
  <div class="page-breadcrumbs__main-container">
    <div class="page-breadcrumbs__title-container">
      <h2>{{ currentCategory }}</h2>
    </div>
    <div class="page-breadcrumbs__breadcrumbs-container">
      <span>Home</span>
      <CRIcon />
      <span>Products</span>
      <CRIcon />
      <span>{{ currentCategory }}</span>
    </div>
  </div>
</template>

<style scoped>
.page-breadcrumbs__title-container {
  padding: 20px 0 0 20px;
}
.page-breadcrumbs__breadcrumbs-container {
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  padding-left: 10px;
}

.page-breadcrumbs__breadcrumbs-container span {
  font-size: 15px;
}
</style>
