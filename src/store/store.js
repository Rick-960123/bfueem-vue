/**
 * Created by zhaorui12 on 2018/3/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
// import TradingArea from './modules/TradingArea'
import GlobalObject from './modules/GlobalObject'
// import Marker from './modules/Marker'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {

    GlobalObject
  }
})
