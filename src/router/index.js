import { createRouter, createWebHistory } from 'vue-router'
import TodoVuexStaticView from '../views/TodoVuexStaticView.vue'
import TodoVuexReusableView from '../views/TodoVuexReusableView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodoVuexStaticView
    },
    {
      path: '/reusable',
      name: 'reusable',
      component: TodoVuexReusableView
    }
  ]
})

export default router
