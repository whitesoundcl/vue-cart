<script setup>
import CRIcon from "vue-material-design-icons/ChevronRight.vue";

defineProps({
  text: {
    type: String,
  },
});

</script>

<template>
  <div class="action-button__container">
    <span>{{text}}</span>
  </div>
</template>

<style scoped>
.action-button__container {
  width: 200px;
  padding: 10px;
  background-color: var(--marca-2);
  color: var(--marca-2-color);
  display: grid;
  justify-content: center;
  cursor: pointer;
  user-select: none;
}

.action-button__container:hover {
  background-color: var(--marca-1);
}

</style>
