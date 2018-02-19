import Vue from 'vue'
import Router from 'vue-router'

import Radar from '@/components/Radar'
import P2pDevModeInfo from '@/components/P2pDevModeInfo'
import HelloWorld from '@/components/HelloWorld'
import WebTorrentDemo from '@/components/WebTorrentDemo'


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
