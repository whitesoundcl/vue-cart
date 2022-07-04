<script setup>
import { ref, watch } from "vue";
import ItemCounter from "./products/ItemCounter.vue";
import ActionButton from "./ActionButton.vue";
import emitter from "../../services/EventEmitter";
import { EVENTS } from "../../constants";
// import CRIcon from "vue-material-design-icons/ChevronRight.vue";

const props = defineProps({
  product: {
    type: Object,
  },
  qty: {
    type: Number,
  },
});

const selectedQty = ref(props.qty);
watch(selectedQty);

const addQty = () => {
  selectedQty.value += 1;
};

const removeQty = () => {
  selectedQty.value -= 1;
  if (selectedQty.value === 0) {
    selectedQty.value = 1;
  }
};

const addProductsToCart = () => {
  emitter.emit(EVENTS.CART_ADD_PRODUCTS, {
    product: props.product,
    qty: selectedQty.value,
  });
};

const close = () => {
  emitter.emit(EVENTS.CLOSE_CART_CONFIRMATION);
};
</script>

<template>
  <div class="confirm-add__container">
    <div class="confirm-add__content-container">
      <div class="confirm-add__title">
        <span>Producto agregado</span>
        <div @click="close">
          <span class="confirm-add__close">X</span>
        </div>
      </div>
      <div class="confirm-add__body">
        <div class="confirm-add__body-split">
          <div>
            <img class="confirm-add__image" :src="product.photo" />
          </div>
          <div class="confirm-add__item-details">
            <span>{{ product.name }}</span>
            <span>Cód. {{ product.code }}</span>
            <span>Precio: {{ product.price }}</span>
            <div class="confirm-add__qty-selector">
              <span>Cantidad:</span>
              <div>
                <ItemCounter
                  :qty="selectedQty"
                  @add-qty="addQty"
                  @substract-qty="removeQty"
                />
              </div>
            </div>
            <span>Sub-total</span>
          </div>
        </div>
        <div class="confirm-add__description">
          {{ product.description }}
        </div>
        <div class="confirm-add__action-buttons">
          <ActionButton text="Seguir comprando" @click="close"/>
          <ActionButton text="Agregar al carrito" @click="addProductsToCart"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.confirm-add__image {
  max-height: 300px;
}
.confirm-add__action-buttons {
  padding-top: 20px;
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
}
.confirm-add__description {
  max-height: 100px;
  overflow-y: scroll;
}

.confirm-add__item-details span {
  font-weight: 700;
}
.confirm-add__item-details {
  display: grid;
  gap: 25px;
  align-content: center;
}
.confirm-add__qty-selector {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 10px;
}
.confirm-add__body-split {
  display: grid;
  grid-auto-flow: column;
  align-items: start;
  justify-content: start;
}
.confirm-add__body {
  padding: 20px;
}
.confirm-add__close {
  color: red;
  padding: 10px;
  cursor: pointer;
}
.confirm-add__title {
  /* font-weight: 800; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 3px solid var(--marca-1);
}
.confirm-add__content-container {
  width: 40%;
  min-width: 550px;
  margin: 80px auto;
  border-radius: 10px;
  border: 3px solid var(--marca-1);
  background-color: white;
}

.confirm-add__container {
  background-color: red;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
  transition: all 0.3s;
}
</style>
