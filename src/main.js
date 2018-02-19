// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMagnet from 'vue-magnet'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'
// var WebTorrent = require('webtorrent')
Vue.use(VueMagnet)
Vue.use(SuiVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
  }
})

// var client = new WebTorrent()
