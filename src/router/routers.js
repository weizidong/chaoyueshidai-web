import {ROOT} from '../constant'
export default [
  // 主页
  {
    path: `/`,
    redirect: `${ROOT}/home`,
  },
  // 后台登录
  {path: `${ROOT}/login`, component: require('../view/login/Login.vue'), name: 'login', meta: {title: '管理后台登录'}},
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
    component: require('../view/Manage.vue'),
    children: [
      {path: `${ROOT}/manage/home`, component: require('../view/manage/Home.vue'), name: 'manage', meta: {title: '管理后台'}},
    ],
  },
]
