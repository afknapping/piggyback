// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Vuex from 'vuex'
Vue.use(Vuex)
import App from './App'
import store from './store'
import router from './router'
import VueMagnet from 'vue-magnet'
Vue.use(VueMagnet)
import SuiVue from 'semantic-ui-vue'
Vue.use(SuiVue)
import 'semantic-ui-css/semantic.min.css'
import components from '@/components/customElementComponents'

var WebTorrent = require('webtorrent')
// var WebTorrent = require('webtorrent')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// var client = new WebTorrent()
