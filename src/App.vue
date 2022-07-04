<script setup>
// import TheWelcome from "./components/TheWelcome.vue";
import HeaderContainer from "./components/header/HeaderContainer.vue";
import StoreContainer from "./components/store/StoreContainer.vue";
import emitter from "./services/EventEmitter";
import ConfirmAdd from "./components/store/ConfirmAdd.vue";
import { EVENTS } from "./constants";
import { ref, watch } from "vue";

const qty = ref(0);
const product = ref({});
const cart = ref({});
const isConfirmingProduct = ref(false);

watch(isConfirmingProduct);
watch(qty);
watch(cart);

emitter.on("*", (type, e) => console.log(type, e));

emitter.on(EVENTS.OPEN_CART_CONFIRMATION, (e) => {
  qty.value = e.qty;
  product.value = e.product;
  isConfirmingProduct.value = true;
});

emitter.on(EVENTS.CLOSE_CART_CONFIRMATION, () => {
  isConfirmingProduct.value = false;
});

emitter.on(EVENTS.CART_ADD_PRODUCTS, (e) => {
  if (cart.value[e.product.id]) {
    cart.value[e.product.id].qty += e.qty;
  } else {
    cart.value[e.product.id] = { data: e.product, qty: e.qty };
  }
  isConfirmingProduct.value = false;
});

emitter.on(EVENTS.CART_REMOVE_PRODUCT, (e) => {
  cart.value[e.product.id].qty -= e.qty;
  if (cart.value[e.product.id].qty === 0) {
    delete cart.value[e.product.id];
  }
});

</script>

<template>
  <ConfirmAdd v-if="isConfirmingProduct" :product="product" :qty="qty" />
  <header>
    <HeaderContainer :cart="cart" />
  </header>
  <main>
    <!-- <TheWelcome /> -->
    <StoreContainer />
  </main>
</template>

<style>
@import "./assets/base.css";
</style>
