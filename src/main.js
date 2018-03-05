
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from "vuex"
import store from "store"

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
