import Vue from 'vue'
import Router from 'vue-router'
import IndexProject from '@/components/IndexProject'
import IndexProcess from '@/components/IndexProcess'
import MonitorMap from '@/components/MonitorMap'
import MonitorCondition from '@/components/MonitorCondition'
import HistoryShow from '@/components/HistoryShow'
import Login from '@/components/Login'
import NewsShow from '@/components/NewsShow'
import WeatherReport from '@/components/WeatherReport'
import OfficialWeather from '@/components/OfficialWeather'
import Ownspace from '@/components/Own-space/Own-space'
import EditableTable from '@/components/Table/EditableTable'
import Error from '@/components/error-page/404'
import Map from '@/components/Map'
import DataInsert from '@/components/DataInsert'
import Messageboard from '@/components/MessageBoard'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/messageboard',
      name: 'Messageboard',
      component: Messageboard
    },
    {

      path: '/login',
      name: 'Login',
      component: Login
    },

    {
    path: '*',
      name: 'Error',
      component: Error
    },

    {
      path: '/index-project',
      name: 'IndexProject',
      component: IndexProject
    },
    {
      path: '/index-process',
      name: 'IndexProcess',
      component: IndexProcess
    },
    {
      path: '/monitor-map',
      name: 'MonitorMap',
      component: MonitorMap
    },
    {
      path: '/monitor-condition',
      name: 'MonitorCondition',
      component: MonitorCondition
    },
    {
      path: '/history-show',
      name: 'HistoryShow',
      component: HistoryShow
    },
    {
      path: '/weather-report',
      name: 'WeatherReport',
      component: WeatherReport
    },
    {
      path: '/newsShow',
      name: 'NewsShow',
      component: NewsShow
    },
    {
      path: '/official-weather',
      name: 'OfficialWeather',
      component: OfficialWeather
    },
    {

      path: '/ownspace',
      name: 'Ownspace',
      component: Ownspace
    },
    {

      path: '/editabletable',
      name: 'EditableTable',
      component: EditableTable
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/dataInsert',
      name: 'DataInsert',
      component: DataInsert
    }

  ]
})
