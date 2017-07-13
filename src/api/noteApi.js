import ajax from './ajax'
const ROOT = '/rest/note/'
// 获取列表
export const findNoteApi = (type, {page, pageSize}, userid = -1) => ajax.post(`${ROOT}find/${type}/${userid}`, {page, pageSize})
// 根据Id获取
export const getNoteApi = (id) => ajax.get(`${ROOT}get/${id}`)
// 添加
export const addNoteApi = ({title, type, pic, content}) => ajax.post(`${ROOT}add`, {title, type, pic, content})
// 修改
export const updateNoteApi = (data) => ajax.post(`${ROOT}update`, data)
// 删除
export const delNoteApi = (id) => ajax.get(`${ROOT}delete/${id}`)
