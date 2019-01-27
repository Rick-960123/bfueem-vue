/**
 * Created by xxx on 2018/10/9.
 */
import axios from 'axios'
import store from '../src/store/store'
// 配置默认的host
axios.defaults.baseURL="'https://bird.ioliu.cn/v1"
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  store.state.GlobalObject.isShow=false;
  store.state.GlobalObject.isLoading=true;
  return config
}, function (error) {
  return Promise.reject(error)
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
 store.state.GlobalObject.isLoading=false
  store.state.GlobalObject.isShow=true
  　return response
}, function (error) {
  alert("暂无数据")
  return Promise.reject(error)
});
