// NOTE: this is generically called index.js, mais ce sera mon truc de le nommer router.js
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

//NOTE: create router
const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

export default router;
