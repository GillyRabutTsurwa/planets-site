import Home from "@/pages/index.vue";
import About from "@/pages/about/index.vue";
import Planet from "@/pages/planet/index.vue";

const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "About", path: "/about", component: About },
  { name: "Planet", path: "/:slug", component: Planet },
  {},
];

export default routes;
