import ajax from './ajax'
const ROOT = '/rest/user/'
// 登录
export const login = ({username = '', pwd = ''} = {}) => ajax.post(`${ROOT}login`, {username, pwd})
