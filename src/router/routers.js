import {ROOT} from '../constant'
export default [
  // 主页
  {
    path: `/`,
    redirect: `${ROOT}/home`,
  },
  // 后台登录
  {
    path: `/login`,
    redirect: `${ROOT}/manage/login`,
  },
  // 主页网站
  {
    path: `${ROOT}`,
    component: require('../view/Web.vue'),
    children: [
      {path: `${ROOT}/home`, component: require('../view/web/Home.vue'), name: 'home', meta: {title: '首页'}},
    ],
  },
  // 管理后台
  {
    path: `${ROOT}/manage`,
    component: require('../view/manage/Home.vue'),
    meta: {title: '管理后台'},
    children: [
      {path: `${ROOT}/manage/login`, component: require('../view/manage/login/Login.vue'), name: 'login', meta: {title: '登录'}},
      {path: `${ROOT}/manage/config`, component: require('../view/manage/config/ConfigEdit.vue'), name: 'configEdit', meta: {title: '设置'}},
    ],
  },
]
