import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: MainPage
    }
  ]
})
