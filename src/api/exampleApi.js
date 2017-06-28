import ajax from './ajax'
const ROOT = '/rest/example/'
// 获取列表
export const findExample = (type, {page, pageSize}) => ajax.post(`${ROOT}find/${type}`, {page, pageSize})
