<script setup>
import { onMounted, ref, watch } from "vue";
import emitter from "../../services/EventEmitter";
import { EVENTS } from "../../constants";
import { fetchCategories, fetchProducts } from "../../services/products.service";
import CategoriesSidebar from "./sidebar/CategoriesSidebar.vue";
import PageBreadcrumbs from "./PageBreadcrumbs.vue";
import ProductCard from "./products/ProductCard.vue";
import ConfirmAdd from "./ConfirmAdd.vue";

const selectedCategory = ref(0);
const categories = ref([]);
const selectedCategoryProducts = ref([]);
const allProducts = ref([]);
const pagination = ref([0, 0]);

watch(categories);
watch(selectedCategory);
watch(selectedCategoryProducts);
watch(pagination);

onMounted(async () => {
  const fetchedCategories = await fetchCategories();
  const fetchedProducts = await fetchProducts();
  categories.value = fetchedCategories;
  allProducts.value = fetchedProducts;
  
});

emitter.on(EVENTS.CATEGORY_CHANGE, (id) => {
  selectedCategory.value = id;
  const filteredProducts = allProducts.value.filter(product => product.category.id === id)
  selectedCategoryProducts.value = filteredProducts;
  pagination.value = [0, filteredProducts.length >= 4 ? 4 : filteredProducts.length];
});

</script>

<template>
  <div class="store-container__main-container">
    <div class="store-container__categories-container">
      <CategoriesSidebar
        :categories="categories"
        :selected-category="selectedCategory"
      />
    </div>
    <div class="store-container__products-container">
      <PageBreadcrumbs
        :current-category="
          selectedCategory !== 0 ? categories[selectedCategory-1]?.name : ''
        "
      />
      <div class="store-container__products-list">
        <ProductCard
          v-for="(product, index) in selectedCategoryProducts"
          v-show="index >= pagination[0] && index < pagination[1]"
          v-bind:key="product.id"
          :product="product"
        />
      </div>
      <div>
        {{ pagination }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.store-container__main-container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 300px auto;
  height: calc(100vh);
}
.store-container__categories-container {
  border-right: 2px solid var(--marca-1);
}

.store-container__products-container {
  /* background-color: aliceblue; */
  display: grid;
  grid-template-rows: 5em auto auto;
  gap: 90px;
}

.store-container__products-list {
  display: grid;
  grid-auto-flow: column;
  gap: 0px;
  margin-left: 50px;
}
</style>
