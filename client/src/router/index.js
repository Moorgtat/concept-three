import Vue from 'vue'
import VueRouter from 'vue-router'
import blog from '../components/blog/blog'
import userBoard from '@/components/user/userBoard'
import admin from '../components/admin/admin'
import adminView from '@/components/admin/adminView'
import shop from '../components/shop/shop'
import login from '../components/auth/login'
import register from '../components/auth/register'
import postAdd from '@/components/admin/postAdd'
import productAdd from '@/components/admin/productAdd'
import postEdit from '@/components/admin/postEdit'
import productEdit from '@/components/admin/productEdit'
import postView from '@/components/admin/postView'
import productView from '@/components/admin/productView'
import userView from '@/components/admin/userView'
import orderView from '@/components/admin/orderView'
import store from '../store/index'
import post from '@/components/blog/post'
import cart from '@/components/shop/cart'
import cartX from '@/components/shop/cartX'

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
        path: '/adminview',
        name: 'adminView',
        component: adminView,
        meta: { requiresAdminAuth: true }
      },
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
      },
      {
        path: '/userview',
        name: 'userView',
        component: userView,
        meta: { requiresAdminAuth: true }
      },
      {
        path: '/orderview',
        name: 'orderView',
        component: orderView,
        meta: { requiresAdminAuth: true }
      }
    ]
  },
  {
    path: '/shop',
    name: 'shop',
    component: shop
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/cartx',
    name: 'cartX',
    component: cartX
  },
  {
    path: '/post',
    name: 'post',
    component: post
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
    if (store.state.auth.isAdminLoggedIn) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else if (to.matched.some(record => record.meta.requiresUserAuth)) {
    if (store.state.auth.isUserLoggedIn) {
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
