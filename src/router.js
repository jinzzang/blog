import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import home from './components/Home.vue';
import Detail from './components/Detail.vue';
import Workers from './components/Workers.vue';
import Worker from './components/Worker.vue';

const routes = [
  {
    path:"/detail/:id",
    component:Detail
  },
  {
    path: "/List",
    component: List
  },
  {
    path:"/Workers",
    component:Workers
  },
  {
    path:"/Worker/:id",
    component:Worker
  },
  {
    path: "/",
    component: home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 