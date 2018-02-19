<template lang='pug'>
  sui-container#WebTorrent
    h1 WebTorrent Demo
    //- p {{ client }}
    p sintelLink: {{ sintelLink }}
    p
      | {{ sintelLink }}
      img(v-magnet="sintelLink + '&path=poster.jpg'")

</template>

<style lang="sass">
  img
    max-width: 100%
</style>

<script>

var WebTorrent = require('webtorrent')
var client = new WebTorrent()

var sintelLink = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sintelLink: sintelLink,
      client: client
      // client.add(torrentId, function (torrent) { })
    }
  }
}

</script>
