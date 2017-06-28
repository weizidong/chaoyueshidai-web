import {ROOT} from '../constant'
export default [
  // 主页
  {
    path: `/`,
    redirect: `${ROOT}/home`,
  },
  // 后台登录
  {path: `${ROOT}/login`, component: require('../view/manage/login/Login.vue'), name: 'login', meta: {title: '登录'}},
  // 主页网站
  {
    path: `${ROOT}`,
    component: require('../view/web/Web.vue'),
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
      {path: `${ROOT}/manage/config`, component: require('../view/manage/config/ConfigEdit.vue'), name: 'configEdit', meta: {title: '设置'}},
      {path: `${ROOT}/manage/example/:type`, component: require('../view/manage/example/ExampleList.vue'), name: 'exampleList', meta: {title: '项目案例'}},
      {path: `${ROOT}/manage/example/:type/:id`, component: require('../view/manage/example/ExampleEdit.vue'), name: 'exampleEdit', meta: {title: '修改项目案例'}},
      {path: `${ROOT}/manage/note/:type`, component: require('../view/manage/note/NoteList.vue'), name: 'noteList', meta: {title: '日志笔记'}},
      {path: `${ROOT}/manage/note/:type/:id`, component: require('../view/manage/note/NoteEdit.vue'), name: 'noteEdit', meta: {title: '修改日志笔记'}},
    ],
  },
]
