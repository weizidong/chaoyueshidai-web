import ajax from './ajax'
const ROOT = '/rest/file/'
// 上传
export const upload = ({username = '', pwd = ''} = {}) => ajax.post(`${ROOT}upload`, {username, pwd})
