// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'mint-ui/lib/style.css'
import router from './router'
import Mint from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
import moment from 'vue-moment'
import echarts from 'echarts'

import '@/assets/css/reset.css'
import 'lib-flexible'

Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(router)
Vue.use(VueAwesomeSwiper)
Vue.use(moment)
Vue.prototype.$echarts = echarts
window.SETDOMAIN = 'cn';
window.HOST = 'http://60.205.180.79:8002';
/* eslint-disable no-new */


//格式化
Date.prototype.Format = function (fmt) { 
  var o = {
      "M+": this.getMonth() + 1, //月份 
      "d+": this.getDate(), //日 
      "h+": this.getHours(), //小时 
      "m+": this.getMinutes(), //分 
      "s+": this.getSeconds(), //秒 
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
      "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o){
    if (new RegExp("(" + k + ")").test(fmt)) 
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
}
  return fmt;
}


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


