import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Radar from '@/components/Radar'
import P2pDevModeInfo from '@/components/P2pDevModeInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/radar',
      name: 'Radar',
      component: Radar
    },
    {
      path: '/P2pDevModeInfo',
      name: 'P2pDevModeInfo',
      component: P2pDevModeInfo
    }
  ]
})
