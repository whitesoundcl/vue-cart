<script setup>
import ShoppingIcon from "vue-material-design-icons/Shopping.vue";
import { getCartQty } from "../../common/functions";
defineProps({
  cart: {
    type: Object,
  }
});
</script>

<template>
  <div class="cart-icon__container">
    <span class="cart-icon__qty-container">{{ getCartQty(cart) }}</span>
    <ShoppingIcon />
    <span>Bolsa</span>
  </div>
</template>
<style scoped>
.cart-icon__qty-container {
  background-color: var(--marca-2);
  color: var(--marca-1-color);
  border-radius: 100px;
  padding: 0 5px 0 5px;
  font-size: 12px;
}
.cart-icon__container {
  margin-right: 30px;
  padding: 5px;
  display: grid;
  justify-items: center;
  color: var(--secondary-1);
}

.cart-icon__container:hover {
  background-color: var(--secondary-2);
  color: var(--marca-1-color);
  border-radius: 10px;
}
</style>
