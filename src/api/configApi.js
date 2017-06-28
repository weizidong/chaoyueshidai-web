import ajax from './ajax'
const ROOT = '/rest/config/'
// 获取我的配置
export const getConfig = () => ajax.get(`${ROOT}mine`)
// 保存我的配置
export const saveConfig = (value) => ajax.post(`${ROOT}save`, {value})
