import Vue from 'vue'
import VueRouter from 'vue-router'
import User from './modules/user'
import Main from '../views/main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [User],
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
