// import Vue from 'vue'
import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import router from './router'
import ElementUI from 'element-ui'
import App from './App'
import 'element-ui/lib/theme-default/index.css'
import 'style/base.scss'

Vue.use(ElementUI)
Vue.use(Router)

console.log('router:', router)
var app = new Vue({
  el: '#root',
  router
  // render: (h) => h(App)
})
