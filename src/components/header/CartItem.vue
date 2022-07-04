<script setup>
import { EVENTS } from "../../constants";
import emitter from "../../services/EventEmitter";
import ItemCounter from "../store/products/ItemCounter.vue";
const props = defineProps({
  product: {
    type: Object,
  },
});

const addQty = () => {
  emitter.emit(EVENTS.CART_ADD_PRODUCTS, {
    product: props.product.data,
    qty: 1,
  });
};

const substractQty = () => {
  emitter.emit(EVENTS.CART_REMOVE_PRODUCT, {
    product: props.product.data,
    qty: 1,
  });
};
</script>

<template>
  <div class="cart-item__container">
    <div class="cart-item__description">
      <span>{{ product.data.name }}</span>
      <span>{{ product.data.price }}</span>
    </div>
    <ItemCounter
      @add-qty="addQty"
      @substract-qty="substractQty"
      :qty="product.qty"
    />
    <span class="cart-item__sub-total"
      >Sub-total: {{ product.data.price * product.qty }}
    </span>
  </div>
</template>
<style scoped>
.cart-item__sub-total {
  padding: 10px;
}
.cart-item__description {
  width: 300px;
  display: grid;
  gap: 5px;
  padding: 0 10px 0 10px;
}
.cart-item__container {
  margin-right: 30px;
  padding: 5px;
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
}
</style>
