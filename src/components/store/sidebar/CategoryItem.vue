<script setup>
import CRIcon from "vue-material-design-icons/ChevronRight.vue";
import { EVENTS } from "../../../constants";
import emitter from "../../../services/EventEmitter";

const props = defineProps({
  isSelected: {
    type: Boolean,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

const catClicked = () => {
  emitter.emit(EVENTS.CATEGORY_CHANGE, props.id);
};
</script>

<template>
  <div
    @click="catClicked"
    :class="[
      isSelected
        ? 'category-item__container category-item__container--selected'
        : 'category-item__container',
    ]"
  >
    <span>{{ name }}</span>
    <CRIcon />
  </div>
</template>

<style scoped>
.category-item__container {
  display: grid;
  grid-auto-flow: column;
  padding-left: 20px;
  justify-content: space-between;
  align-items: center;
}

.category-item__container--selected {
  border-left: 10px solid var(--marca-2);
}
.category-item__container:hover {
  border-left: 10px solid var(--marca-1);
}
</style>
