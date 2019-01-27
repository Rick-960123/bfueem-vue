/**
 * Created by zhaorui12 on 2017/12/14.
 */

import axios from 'axios'
import qs from 'qs'
axios.defaults.baseURL = 'http://123.57.12.101:3000';

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    let response
    if (error.response) {
      response = error.response
    } else if (error.request) {
      response = {status: 'RESPONSE_NO_RETURN', statusText: 'no response return', config: error.config}
    } else {
      response = {status: 'REQUEST_NO_SEND', statusText: 'no request', config: error.config}
    }
    return Promise.resolve(response)
  }
)
/**
 * 处理http状态, 200之外的响应, 重写数据内容, code值为-99999
 * @param response
 * @returns {*}
 */
function handleHttpStatus (response) {
  if (response.status === 200) {
    return response.data
  }
  let message = 'request url: "' + response.config.url + '", http status: ' + response.status + ', status text: "' + response.statusText + '"'
  message += response.data ? (', response data: "' + response.data + '"') : ''
  return {
    code: -9999,
    message: message
  }
}
/**
 * 处理系统异常code状态
 * @param data
 * @returns {*}
 */
function handleErrorCode (data) {
  if (data.code < 0) {
    console.log('网络错误, code: [' + data.code + '], message: [' + data.message + ']')
  }
  if (data.code === 1) {
    console.log('查询错误, code: [' + data.code + '], message: [后端查询报错]')
  }
  return data
}
export default {
  get: function (url, data) {
    let params = this.getParams(data)
    return axios({
      method: 'get',
      url: url + params,
      timeout: 2100000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(handleHttpStatus).then(handleErrorCode)
  },
  post: function (url, data) {
    return axios({
      method: 'post',
      url: url,
      data: qs.stringify(data),
      timeout: 2100000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(handleHttpStatus).then(handleErrorCode)
  },
  getParams: function (data) {
    let params = '?'
    if (data instanceof Object) {
      for (let key in data) {
        let param = key + '=' + data[key] + '&'
        params += param
      }
    }
    return params.substring(0, params.length - 1)
  }
}
