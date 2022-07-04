<script setup>

defineProps({
  qty: {
    type: Number,
  },
});

</script>

<template>
  <div class="item-counter__container">
    <div class="item-counter__number-container">
      <span @click="$emit('substract-qty')" class="item-counter__number-sign">-</span>
      <span>{{qty}}</span>
      <span @click="$emit('add-qty')" class="item-counter__number-sign">+</span>
    </div>

  </div>
</template>

<style scoped>
.item-counter__container {
  width: 90px;
  border: 1px solid var(--marca-1);
  user-select: none;
  height: 40px;
}

.item-counter__number-container {
  background-color: var(--marca-1-color);
  color: black;
  /* padding: 10px; */
  display: grid;
  grid-auto-flow: column;

}

.item-counter__number-container span {
  padding: 9px;
}
.item-counter__number-sign:hover {
  background-color: var(--marca-2);
  cursor: pointer;
}

</style>
