import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/SearchPage.vue')

  },
  {
    path: '/restaurant-details',
    name: 'restaurant-details',
    component: () => import('@/views/Restaurant.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

