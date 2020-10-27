import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Home from '../views/Home.vue'
=======
>>>>>>> b86a53c149edc4b1cacbea1387916112fddb8487
import Index from '../views/Index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
<<<<<<< HEAD
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  }
=======
    name: 'index',
    component: Index
  },
>>>>>>> b86a53c149edc4b1cacbea1387916112fddb8487
]

const router = new VueRouter({
  routes
})

export default router
