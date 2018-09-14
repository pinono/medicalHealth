import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/index'    //首页
import sickIndex from '@/page/sick/index'   
import sickFrom from '@/page/sick/from'
import Train from '@/page/Home/data'    //训练、脑氧、血压、心率、指氧信息
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
import forgetPassword from '@/page/login/forgetPassword'   //忘记密码
import shareList from '@/page/Share/data.vue'     //医患风险列表
import shareDetail from '@/page/share/detail.vue'   //医患分享详情
import login from '@/page/Login/index.vue'     //登录、注册

Vue.use(Router)

var router =  new Router({
  mode: 'history',
  routes: [
    {path: '/home',name: 'home',component: Home},
    {path: '/sickIndex',name: 'sickIndex',component: sickIndex},
    {path: '/sickFrom',name: 'sickFrom',component: sickFrom},
    {path: '/train',name: 'home',component: Train},
    {path: '/memberCenter',name: 'memberIndex',component: memberIndex},
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
    {path: '/shareList',name: 'share',component: shareList},
    {path: '/shareDetail',name: 'shareDetail',component: shareDetail},
    {path: '/login',name: 'login',component: login},

  ]
})
export default router

