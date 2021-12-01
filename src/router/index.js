import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bible from "../views/Bible.vue"
import DnC from "../views/DandC.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bible',
    name: 'Bible',
    component: Bible
  },

  {
    path: '/dnc',
    name: 'DandC',
    component: DnC
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
