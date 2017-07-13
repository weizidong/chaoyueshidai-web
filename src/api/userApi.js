import md5 from 'md5'
import ajax from './ajax'
const ROOT = '/rest/user/'
// 登录
export const loginApi = ({tel = '', pwd = ''} = {}) => ajax.post(`${ROOT}login`, {tel, pwd: md5(pwd)})
// 注册
export const registApi = ({nickName = '', tel = '', pwd = ''} = {}) => ajax.post(`${ROOT}register`, {nickName, tel, pwd: md5(pwd)})
// 获取当前登录
export const mineApi = () => ajax.get(`${ROOT}mine`)
// 登出
export const logoutApi = () => ajax.get(`${ROOT}logout`)
// 登出
export const changePwdApi = (old = '', pwd = '') => ajax.post(`${ROOT}changePwd?old=${md5(old)}&pwd=${md5(pwd)}`)
