import Vue from 'vue'
import VueRouter from 'vue-router'
import blog from '../components/blog/blog'
import admin from '../components/admin/admin'
import store from '../components/store/store'
import login from '../components/auth/login'
import register from '../components/auth/register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'blog',
    component: blog
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: '/store',
    name: 'store',
    component: store
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/store', '/login', '/register']
  const authRequired = !publicPages.includes(to.path)

  if (authRequired && !!this.$store.state.isUserLoggedIn) {
    return next('/')
  }
  next()
})

export default router
