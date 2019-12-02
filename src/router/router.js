import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import ShopCart from '../views/ShopCart.vue'
import Search from '../views/Search.vue'
import News from '../components/home/News.vue'
import Homepage from '../components/home/Homepage.vue'
import NewsDetail from '../components/home/NewsDetail.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: Home,
    redirect: '/homepage',
    children: [
      { path: '/homepage', component: Homepage },
      { path: '/news', component: News },
      { path: '/newsdetail', component: NewsDetail }
    ]
  },
  { path: '/user', component: User },
  { path: '/shopcart', component: ShopCart },
  { path: '/search', component: Search }
]

const router = new VueRouter({
  routes
})

export default router
