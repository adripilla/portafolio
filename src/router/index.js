// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/AboutView.vue';
import Pruebas from '../views/PruebasView';

const routes = [
  {
    path: '/p',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Pruebas',
    component: Pruebas
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
