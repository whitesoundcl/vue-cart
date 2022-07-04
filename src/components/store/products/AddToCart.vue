<script setup>
import { ref, watch } from "vue";
import CartPlusIcon from "vue-material-design-icons/CartPlus.vue";
import emitter from "../../../services/EventEmitter";
import { EVENTS } from "../../../constants";
import ItemCounter from "./ItemCounter.vue";

const props = defineProps({
  currentProduct: {
    type: Object,
  },
});
const qty = ref(1);
watch(qty);
const substractQty = () => {
  qty.value = qty.value - 1 === 0 ? 1 : qty.value - 1;
};

const openCartConfirm = () => {
  emitter.emit(EVENTS.OPEN_CART_CONFIRMATION, {
    product: props.currentProduct,
    qty,
  });
};
</script>

<template>
  <div class="add-to-cart__container">
    <ItemCounter :qty="qty" @add-qty="qty++" @substract-qty="substractQty" />
    <div @click="openCartConfirm" class="add-to-cart__logo-container">
      <CartPlusIcon />
    </div>
  </div>
</template>

<style scoped>
.add-to-cart__container {
  display: grid;
  grid-auto-flow: column;
  align-content: center;
  justify-content: center;
}

.add-to-cart__logo-container {
  background-color: var(--marca-1);
  padding: 5px;
  cursor: pointer;
}

.add-to-cart__logo-container:hover {
  background-color: var(--marca-2);
}
</style>
