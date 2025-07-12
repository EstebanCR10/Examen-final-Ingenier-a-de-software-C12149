import { createRouter, createWebHistory } from 'vue-router'
import Maquina from '@/components/maquina.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Maquina,
    },
  ],
})

export default router
