// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
import moment from 'vue-moment'

import '@/assets/css/reset.css'
import 'mint-ui/lib/style.css'
import 'lib-flexible'


Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(router)
Vue.use(VueAwesomeSwiper)
Vue.use(moment);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
