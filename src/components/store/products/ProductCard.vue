<script setup>
import AddToCart from "./AddToCart.vue";


defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="product-card__container">
      <div>
        <img class="product-card__image" :src="product.photo" />
      </div>
      <div>
        <span>{{ product.name }}</span>
        <div>{{ product.price }}</div>
        <div>
          <AddToCart :current-product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card__container {
  /* border: 1px solid red; */
  background-color: var(--secondary-1);
  color: var(--secondary-1-color);
  border-radius: 10px;
  padding: 5px;
  width: 200px;
  display: grid;
  grid-template-rows: 300px;
  height: auto;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.5);
}

.product-card__image {
  border-radius: 5px;
  max-width: 190px;
  max-height: 300px;
}
</style>
