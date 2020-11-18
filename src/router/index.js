import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage/Index'
import Introduction from '@/components/MainPage/Introduction'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: MainPage
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: Introduction
    }
  ]
})
