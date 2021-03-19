import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Home')
    },
    {
      path: '/about',
      component: () => import('@/pages/About')
    },
    {
      path: '/order',
      component: () => import('@/pages/Order')
    },
  ]
})

export default router
