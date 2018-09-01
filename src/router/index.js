import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/page/index'
import Train from '@/page/Home/data'


Vue.use(Router)

var router =  new Router({
  mode: 'history',
  routes: [
    {path: '/home',name: 'home',component: Home},
    {path: '/train',name: 'home',component: Train},    
    
  ]
})
export default router

