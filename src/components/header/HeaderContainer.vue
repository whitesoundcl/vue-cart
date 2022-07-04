<script setup>
import SearchBar from "./SearchBar.vue";
import CartIcon from "./CartIcon.vue";
import { getCartQty, getCartTotal } from "../../common/functions";
import CartSummary from "./CartSummary.vue";
import { ref, watch } from "vue";
defineProps({
  cart: {
    type: Object,
  }
});

const isShowingCart = ref(false);
watch(isShowingCart);
const toggleCart = () => {
  isShowingCart.value = !isShowingCart.value;
}
</script>

<template>
  <div class="header-container__main-container">
    <div class="header-container__logo-container">
      <h1>Pet Store</h1>
    </div>
    <div class="header-container__tools-container">
      <SearchBar />
      <CartIcon :cart="cart" @click="toggleCart"/>
      <CartSummary v-if="isShowingCart" :cart="cart" /> 
    </div>
  </div>
</template>

<style scoped>
.header-container__main-container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 300px auto;
  background-color: var(--marca-1);
  color: var(--marca-1-color);
}
.header-container__logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}

.header-container__tools-container {
  /* background-color: aliceblue; */
  display: grid;
  grid-auto-flow: column;
  justify-content: end;
  align-items: center;
  gap: 30px;
}
</style>
