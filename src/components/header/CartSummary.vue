<script setup>
import SearchBar from "./SearchBar.vue";
import CartIcon from "./CartIcon.vue";
import { getCartQty, getCartTotal, getCartProducts } from "../../common/functions";
import CartItem from "./CartItem.vue";
defineProps({
  cart: {
    type: Object,
  }
});
</script>

<template>
  <div class="cart-summary__main-container">
    <span>Resumen de compra</span>
    <CartItem v-for="product in getCartProducts(cart)" v-bind:key="product.data.id" :product="product"/>
    <div class="cart-summary__total">
      <span>Sub-total:</span>
      <span>{{getCartTotal(cart)}}</span>
    </div>
  </div>
</template>

<style scoped>

.cart-summary__total { 
  display: grid; 
  grid-auto-flow: column;

}
.cart-summary__main-container span {
  font-weight: 700;
}
.cart-summary__main-container {
  display: grid;
  position: fixed;
  padding: 10px;
  border: 3px solid var(--marca-1);
  color: black;
  /* height: 100px; */
  width: auto;
  z-index: 4;
  right: 0;
  top: 73px;
  background-color: white;
}

</style>
