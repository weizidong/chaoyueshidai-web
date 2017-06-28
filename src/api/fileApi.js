import ajax from './ajax'
const ROOT = '/rest/file/'
// 上传
export const upload = ({file}) => {
  const data = new FormData()
  data.append('file', file)
  return ajax.post(`${ROOT}upload`, data)
}
// 删除
export const delFile = ({username = '', pwd = ''} = {}) => ajax.post(`${ROOT}upload`, {username, pwd})
