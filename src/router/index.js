import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')


Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      //设置显示true为显示，false为不显示
      keepAlive: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      //设置显示true为显示，false为不显示
      keepAlive: true
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      //设置显示true为显示，false为不显示
      keepAlive: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      //设置显示true为显示，false为不显示
      keepAlive: true
    }
  },
  {
    path: '/detail',
    component: Detail,
    meta: {
      //设置显示true为显示，false为不显示
      keepAlive: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
