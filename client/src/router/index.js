import Vue from 'vue'
import VueRouter from 'vue-router'
import blog from '../components/blog/blog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'blog',
    component: blog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
