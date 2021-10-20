import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cinemas',
    name: 'CinemaList',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cinema-list.vue')
  },
  {
    path: '/cinemas/:slug',
    name: 'CinemaDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cinema-details.vue')
  },
  {
    path: '/films',
    name: 'FilmList',
    component: () => import(/* webpackChunkName: "about" */ '../views/Films-list.vue')
  },
  {
    path: '/films/:slug',
    name: 'FilmDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/Films-details.vue')
  },
  {
    path: '/book/:slug',
    name: 'Book',
    component: () => import(/* webpackChunkName: "about" */ '../views/Booking-form.vue')
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: () => import(/* webpackChunkName: "about" */ '../views/My-tickets.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
