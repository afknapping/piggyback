import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Radar from '@/components/Radar'
import P2pDevModeInfo from '@/components/P2pDevModeInfo'
import WebTorrentDemo from '@/components/WebTorrentDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/radar',
      component: Radar
    },
    {
      path: '/P2pDevModeInfo',
      component: P2pDevModeInfo
    },
    {
      path: '/WebTorrentDemo',
      component: WebTorrentDemo
    }
  ]
})
