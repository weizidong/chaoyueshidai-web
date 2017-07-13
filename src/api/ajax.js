import Axios from 'axios'
import {error} from '../actions'
// 全局默认设置 Global axios defaults
Axios.defaults.headers.post['Content-Type'] = 'application/json'
// 添加一个请求拦截器
Axios.interceptors.request.use((config) => {
  console.info('发送请求：', config.url, '\n参数:', config.data)
  if (process.env.NODE_ENV === 'development' || location.search.split(/[?&]/).indexOf('debug=WeiZiDong') !== -1) {
    config.url += config.url.indexOf('?') !== -1 ? '&debug=WeiZiDong' : '?debug=WeiZiDong'
  }
  return config
}, (error) => {
  console.log(error)
  // 当出现请求错误是做一些事
  return Promise.reject(error)
})

// 添加一个返回拦截器
Axios.interceptors.response.use((response) => {
  if (response.status !== 200) {
    console.log(response)
    const msg = '网络异常，请稍后重试...'
    error(msg)
    return Promise.reject({code: response.status, msg})
  }
  console.log('请求结果：', response.data)
  const {code, msg, data} = response.data
  if (!code) {
    return response.data
  } else if (code === 200) {
    return data || response.data
  } else if (code !== 200) {
    const data = {code: code || 500, msg: msg || '服务器异常！请稍后重试...'}
    error(data.msg)
    return Promise.reject(data)
  }
}, (error) => {
  console.log(error)
  // 对返回的错误进行一些处理
  return Promise.reject(error)
})
export default Axios
