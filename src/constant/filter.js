import moment from 'moment'
export const dateFilter = (date, pattern = 'YYYY-MM-DD HH:mm') => date ? moment(date).format(pattern) : '无'
