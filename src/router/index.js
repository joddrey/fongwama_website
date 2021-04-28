import { createRouter, createWebHistory } from 'vue-router'
import Accueuil from '../views/Accueuil.vue'

const routes = [
  {
    path: '/',
    name: 'Accueuil',
    component: Accueuil
  },
  {
    path: '',
    name: '',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
