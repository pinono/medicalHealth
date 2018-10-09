import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/index'
import manageIndex from '@/page/manage/index'
import manageFrom from '@/page/manage/from'
import Train from '@/page/Home/data'
import enterIndex from '@/page/myCenter/index'
import caseReport from '@/page/myCenter/caseReport'
import familyIndex from '@/page/myCenter/familyIndex'
import deviceInfo from '@/page/myCenter/deviceInfo'
import addNewFamily from '@/page/myCenter/addNewFamily'
import personalInfo from '@/page/myCenter/personalInfo'
import showProblem from '@/page/myCenter/showProblem'
import followUpInfo from '@/page/myCenter/followUpInfo'
import forgetPassword from '@/page/member/forgetPassword'
import share from '@/page/Share/data.vue'
import shareDetail from '@/page/Share/detail.vue'
import login from '@/page/Login/index.vue'

Vue.use(Router)

var router =  new Router({
  mode: 'history',
  routes: [
    {path: '/home',name: 'home',component: Home},
    {path: '/manageIndex',name: 'manageIndex',component: manageIndex},
    {path: '/manageFrom',name: 'manageFrom',component: manageFrom},
    {path: '/train',name: 'home',component: Train},
    {path: '/enterIndex',name: 'enterIndex',component: enterIndex},
    {path: '/caseReport',name: 'cen_index',component: caseReport},
    {path: '/familyIndex',name: 'familyIndex',component: familyIndex},
    {path: '/deviceInfo',name: 'deviceInfo',component: deviceInfo},
    {path: '/addNewFamily',name: 'addNewFamily',component: addNewFamily},
    {path: '/personalInfo',name: 'personalInfo',component: personalInfo},
    {path: '/showProblem',name: 'showProblem',component: showProblem},
    {path: '/followUpInfo',name: 'followUpInfo',component: followUpInfo},
    {path: '/forgetPassword',name: 'forgetPassword',component: forgetPassword},
    {path: '/share',name: 'share',component: share},
    {path: '/shareDetail',name: 'shareDetail',component: shareDetail},
    {path: '/login',name: 'login',component: login},

  ]
})
export default router

