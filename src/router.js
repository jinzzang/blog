import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import home from './components/Home.vue';
import Detail from './components/Detail.vue';
const routes = [
  {
    path:"/detail/:id",
    component:Detail
  },
  {
    path: "/List",
    component: List,
  },
  {
    path: "/",
    component: home,
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 