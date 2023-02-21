import { createApp } from "vue";
// NOTE: importing the router
import router from "./routes/router";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
// NOTE: getting vue to use our router
app.use(router);
app.mount("#app");
