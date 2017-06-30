import ajax from './ajax'
const ROOT = '/rest/example/'
// 获取列表
export const findExample = (type, {page, pageSize}, userid = -1) => ajax.post(`${ROOT}find/${type}/${userid}`, {page, pageSize})
// 根据Id获取
export const getExample = (id) => ajax.get(`${ROOT}get/${id}`)
// 添加
export const addExample = (type, {topic, url, pic, legend}) => ajax.post(`${ROOT}add/${type}`, {topic, url, pic, legend})
// 修改
export const updateExample = (data) => ajax.post(`${ROOT}update`, data)
// 删除
export const delExample = (id) => ajax.get(`${ROOT}delete/${id}`)
