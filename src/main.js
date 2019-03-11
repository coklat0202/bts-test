import Vue from 'vue'
import './plugins/vuetify'
import 'font-awesome/css/font-awesome.min.css'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  iconfont: 'fa4'
}).$mount('#app')
