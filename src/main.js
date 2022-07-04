import { createApp } from "vue";

import App from "./App.vue";

createApp(App, {
  data() {
    return {
      count: 0,
    };
  },
}).mount("#app");
