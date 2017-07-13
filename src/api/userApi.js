import md5 from 'md5'
import ajax from './ajax'
const ROOT = '/rest/user/'
let mine = null
// 登录
export const loginApi = ({tel = '', pwd = ''} = {}) => ajax.post(`${ROOT}login`, {tel, pwd: md5(pwd)})
// 注册
export const registApi = ({nickName = '', tel = '', pwd = ''} = {}) => ajax.post(`${ROOT}register`, {nickName, tel, pwd: md5(pwd)})
// 获取当前登录
export const mineApi = () => new Promise((resolve) => {
  if (!mine) {
    ajax.get(`${ROOT}mine`).then((user) => {
      mine = user
      resolve(mine)
    })
  } else {
    resolve(mine)
  }
})
// 登出
export const logoutApi = () => ajax.get(`${ROOT}logout`)
// 修改密码
export const changePwdApi = (old = '', pwd = '') => ajax.post(`${ROOT}changePwd?old=${md5(old)}&pwd=${md5(pwd)}`)
// 修改密码
export const updateUserApi = (data) => ajax.post(`${ROOT}update`, data)
