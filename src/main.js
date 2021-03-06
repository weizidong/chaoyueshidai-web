import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
})
