// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import router from './router'
import store from './store/store'
import echarts from 'echarts'
import http from './common/http.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { Button,Swipe , SwipeItem , Lazyload} from 'vant'
import '../config/axios'
import 'element-ui/lib/theme-chalk/index.css'
import elementui from 'element-ui'

Vue.use(elementui)
Vue.use(Button).use(Swipe).use(SwipeItem).use(Lazyload)
Vue.config.productionTip = false
Vue.prototype.$echarts=echarts
Vue.prototype.$http = http
Vue.prototype.HOST = 'abc'
Vue.use(VueAwesomeSwiper)
var $ = window.$ = window.jQuery =  require('jquery')
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()
Vue.use(iView)
window.Bus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
