import ajax from './ajax'
const ROOT = '/rest/user/'
// 登录
export const login = ({username = '', pwd = ''} = {}) => ajax.post(`${ROOT}login`, {username, pwd})
// 获取当前登录
export const mine = () => ajax.get(`${ROOT}mine`)
// 登出
export const logout = () => ajax.get(`${ROOT}logout`)
