import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/pokemon"
  },
  {
    path: "/pokemon",
    name: "Home",
    component: () => import("@/views/PokedexViews.vue")
  },
  {
    path: "/pokemon/:id",
    name: "PokeDetails",
    component: () => import("@/views/PokemonDetailsViews.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
