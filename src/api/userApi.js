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
export const logout = () => ajax.get(`${ROOT}logout`)
