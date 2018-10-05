import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/page/index'
import m_Index from '@/page/manage//m_Index'
import m_From from '@/page/manage//m_From'
import Train from '@/page/Home/data'
import cen_index from '@/page/myCenter/cen_index'
import caseReport from '@/page/myCenter/caseReport'


Vue.use(Router)

var router =  new Router({
  mode: 'history',
  routes: [
    {path: '/home',name: 'home',component: Home},
    {path: '/m_Index',name: 'm_Index',component: m_Index},
    {path: '/m_From',name: 'm_From',component: m_From},
    {path: '/train',name: 'home',component: Train},
    {path: '/cen_index',name: 'cen_index',component: cen_index},
    {path: '/caseReport',name: 'cen_index',component: caseReport},
  ]
})
export default router

