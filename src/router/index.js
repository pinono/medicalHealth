import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/index'
import sickIndex from '@/page/sick/index'
import sickFrom from '@/page/sick/from'
import Train from '@/page/Home/data'
import memberIndex from '@/page/member/index'
import caseReport from '@/page/member/caseReport'
import familyIndex from '@/page/member/familyIndex'
import deviceInfo from '@/page/member/deviceInfo'
import addFamily from '@/page/member/addFamily'
import basicInfo from '@/page/member/basicInfo'
import problem from '@/page/member/problem'
import followUpInfo from '@/page/member/followUpInfo'
import trainingReport from '@/page/member/trainingReport'
import history from '@/page/member/history'
import stroke from '@/page/member/stroke'
import forgetPassword from '@/page/Login/forgetPassword'
import share from '@/page/Share/data.vue'
import shareDetail from '@/page/Share/detail.vue'
import login from '@/page/Login/index.vue'

Vue.use(Router)

var router =  new Router({
  mode: 'history',
  routes: [
    {path: '/home',name: 'home',component: Home},
    {path: '/sickIndex',name: 'sickIndex',component: sickIndex},
    {path: '/sickFrom',name: 'sickFrom',component: sickFrom},
    {path: '/train',name: 'home',component: Train},
    {path: '/memberIndex',name: 'memberIndex',component: memberIndex},
    {path: '/caseReport',name: 'cen_index',component: caseReport},
    {path: '/familyIndex',name: 'familyIndex',component: familyIndex},
    {path: '/deviceInfo',name: 'deviceInfo',component: deviceInfo},
    {path: '/addFamily',name: 'addFamily',component: addFamily},
    {path: '/basicInfo',name: 'basicInfo',component: basicInfo},
    {path: '/problem',name: 'problem',component: problem},
    {path: '/followUpInfo',name: 'followUpInfo',component: followUpInfo},
    {path: '/trainingReport',name: 'trainingReport',component: trainingReport},
    {path: '/history',name: 'history',component: history},
    {path: '/stroke',name: 'stroke',component: stroke},
    {path: '/forgetPassword',name: 'forgetPassword',component: forgetPassword},
    {path: '/share',name: 'share',component: share},
    {path: '/shareDetail',name: 'shareDetail',component: shareDetail},
    {path: '/login',name: 'login',component: login},

  ]
})
export default router

