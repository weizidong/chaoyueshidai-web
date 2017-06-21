import ajax from './ajax'
const ROOT = '/rest/user/'
export const login = ({username = '', pwd = ''} = {}) => {
  ajax.post(`${ROOT}login`, {username, pwd})
}
