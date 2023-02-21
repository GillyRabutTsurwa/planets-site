import { createApp } from "vue";
// NOTE: import pinia
import { createPinia } from "pinia";
import router from "./routes/router";
import "./style.css";
import App from "./App.vue";

//NOTE: instantiate pinia
const pinia = createPinia();

const app = createApp(App);
// NOTE: use pinia
app.use(pinia);
app.use(router);
app.mount("#app");
