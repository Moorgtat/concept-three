import Vue from 'vue'
import VueRouter from 'vue-router'
import blog from '../components/blog/blog'
import userBoard from '@/components/user/userBoard'
import admin from '../components/admin/admin'
import shop from '../components/shop/shop'
import login from '../components/auth/login'
import register from '../components/auth/register'
import newPost from '@/components/admin/newPost'
import newProduct from '@/components/admin/newProduct'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'blog',
    component: blog
  },
  {
    path: '/userboard',
    name: 'userboard',
    component: userBoard,
    meta: { requiresUserAuth: true }
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
    meta: { requiresAdminAuth: true }
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
  },
  {
    path: '/newpost',
    name: 'newpost',
    component: newPost
  },
  {
    path: '/newproduct',
    name: 'newproduct',
    component: newProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAdminAuth)) {
    if (store.state.isAdminLoggedIn) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else if (to.matched.some(record => record.meta.requiresUserAuth)) {
    if (store.state.isUserLoggedIn) {
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
