import {ROOT, MANAGE} from '../constant'
export default [
  {title: '首页', path: `${ROOT}${MANAGE}`, icon: 'date'},
  {
    title: '项目案例管理',
    icon: 'example',
    children: [
      {title: '意向中项目', path: `${ROOT}${MANAGE}/example/1`},
      {title: '设计中项目', path: `${ROOT}${MANAGE}/example/2`},
      {title: '待开发项目', path: `${ROOT}${MANAGE}/example/3`},
      {title: '已交付项目', path: `${ROOT}${MANAGE}/example/4`},
    ],
  },
  {title: '设置', path: `${ROOT}${MANAGE}/config`, icon: 'date'},
]
