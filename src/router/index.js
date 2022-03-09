import { createRouter, createWebHistory } from "vue-router";
import Orders from "../views/Orders.vue";
import Menu from "../views/Menu.vue";
import Catalog from "../views/Catalog.vue";


const routes = [
  {
    path: "/orders",
    name: "orders",
    component: Orders,
    props : true,
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu,
    props : true,
  },
  {
    path: "/catalog",
    name: "catalog",
    component: Catalog,
    props : true,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
