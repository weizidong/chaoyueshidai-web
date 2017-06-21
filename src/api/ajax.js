import Axios from 'axios'
// 全局默认设置 Global axios defaults
Axios.defaults.headers.post['Content-Type'] = 'application/json'
// 添加一个请求拦截器
Axios.interceptors.request.use((config) => {
  console.info('发送请求：', config.url, '\n参数:', config.data)
  console.log(config)
  // 在请求发送之前做一些事
  return config
}, (error) => {
  console.log(error)
  // 当出现请求错误是做一些事
  return Promise.reject(error)
})

// 添加一个返回拦截器
Axios.interceptors.response.use((response) => {
  // 对返回的数据进行一些处理
  console.log(response)
  return response
}, (error) => {
  console.log(error)
  // 对返回的错误进行一些处理
  return Promise.reject(error)
})
export default Axios
