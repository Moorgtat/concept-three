import Vue from 'vue'
import VueRouter from 'vue-router'
import blog from '../components/blog/blog'
import userBoard from '@/components/user/userBoard'
import admin from '../components/admin/admin'
import shop from '../components/shop/shop'
import login from '../components/auth/login'
import register from '../components/auth/register'
import postAdd from '@/components/admin/postAdd'
import productAdd from '@/components/admin/productAdd'
import postEdit from '@/components/admin/postEdit'
import productEdit from '@/components/admin/productEdit'
import postView from '@/components/admin/postView'
import productView from '@/components/admin/productView'
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
    meta: { requiresAdminAuth: true },
    children: [
      {
        path: '/postview',
        name: 'postView',
        component: postView,
        meta: { requiresAdminAuth: true }
      },
      {
        path: '/postadd',
        name: 'postAdd',
        component: postAdd,
        meta: { requiresAdminAuth: true }
      },
      {
        path: '/postedit/:postId',
        name: 'postEdit',
        component: postEdit,
        meta: { requiresAdminAuth: true }
      },
      {
        path: '/productview',
        name: 'productView',
        component: productView,
        meta: { requiresAdminAuth: true }
      },
      {
        path: '/productadd',
        name: 'productAdd',
        component: productAdd,
        meta: { requiresAdminAuth: true }
      },
      {
        path: '/productedit',
        name: 'productEdit',
        component: productEdit,
        meta: { requiresAdminAuth: true }
      }]
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
