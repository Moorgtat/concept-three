import Vue from 'vue'
import VueRouter from 'vue-router'
import blog from '../components/blog/blog'
import admin from '../components/admin/admin'
import shop from '../components/shop/shop'
import login from '../components/auth/login'
import register from '../components/auth/register'
import store from '../store/index'

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
    component: admin,
    meta: { requiresAuth: true }
  },
  {
    path: '/shop',
    name: 'shop',
    component: shop
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
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.isAdminLoggedIn) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})

export default router
