import 'babel-polyfill'
import Vue from 'vue'
import Router from 'vue-router'
import router from './router'
import ElementUI from 'element-ui'
import App from './App.vue'
import 'element-ui/lib/theme-default/index.css'
import 'style/base.scss'

Vue.use(ElementUI)
Vue.use(Router)
console.log('NODE_ENV:', process.env.NODE_ENV)
console.log('HOT:', process.env.HOT)
console.log('PORT:', process.env.PORT)
console.log('NODE:', process.env.NODE)
// console.log('router:', router)
const app = new Vue({
  el: '#root', template: '<App/>', router, components: {
    App
  }
  // render: (h) => h(App)
})
