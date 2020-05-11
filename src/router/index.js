import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Home = () => import("../views/Home.vue");
const SearchPage = () => import("../views/SearchPage.vue");
const Restaurant = () => import("../views/Restaurant.vue");

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/search',
    name: 'search',
    component: SearchPage

  },
  {
    path: '/restaurant-details',
    name: 'restaurant-details',
    component: Restaurant

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

