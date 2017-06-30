import {ROOT} from '../constant'
export default [
  // 主页
  {
    path: `/:userid`,
    redirect: `${ROOT}/:userid/home`,
  },
  // 后台登录
  {path: `${ROOT}/login`, component: resolve => require(['../view/manage/login/Login.vue'], resolve), name: 'login', meta: {title: '登录'}},
  // 主页网站
  {
    path: `${ROOT}/:userid`,
    component: resolve => require(['../view/web/Web.vue'], resolve),
    children: [
      {path: `${ROOT}/:userid/home`, component: resolve => require(['../view/web/home/Home.vue'], resolve), name: 'home', meta: {title: '首页'}},
      {path: `${ROOT}/:userid/example/:type`, component: resolve => require(['../view/web/example/Example.vue'], resolve), name: 'example', meta: {title: '项目案例'}},
      {path: `${ROOT}/:userid/note/:type`, component: resolve => require(['../view/web/note/Note.vue'], resolve), name: 'note', meta: {title: '日子笔记'}},
      {path: `${ROOT}/:userid/me`, component: resolve => require(['../view/web/me/Me.vue'], resolve), name: 'me', meta: {title: '关于我'}},
    ],
  },
  // 管理后台
  {
    path: `${ROOT}/manage`,
    component: resolve => require(['../view/manage/Manage.vue'], resolve),
    children: [
      {path: `${ROOT}/manage/home`, component: resolve => require(['../view/manage/home/Home.vue'], resolve), name: 'manage', meta: {title: '后台管理'}},
      {path: `${ROOT}/manage/config`, component: resolve => require(['../view/manage/config/ConfigEdit.vue'], resolve), name: 'configEdit', meta: {title: '设置'}},
      {path: `${ROOT}/manage/example/:type`, component: resolve => require(['../view/manage/example/ExampleList.vue'], resolve), name: 'exampleList', meta: {title: '项目案例'}},
      {path: `${ROOT}/manage/example/:type/:id`, component: resolve => require(['../view/manage/example/ExampleEdit.vue'], resolve), name: 'exampleEdit', meta: {title: '修改项目案例'}},
      {path: `${ROOT}/manage/note/:type`, component: resolve => require(['../view/manage/note/NoteList.vue'], resolve), name: 'noteList', meta: {title: '日志笔记'}},
      {path: `${ROOT}/manage/note/:type/:id`, component: resolve => require(['../view/manage/note/NoteEdit.vue'], resolve), name: 'noteEdit', meta: {title: '修改日志笔记'}},
    ],
  },
]
