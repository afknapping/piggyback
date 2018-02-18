<template lang="pug">
  #app
    sui-menu(:widths="3")
      sui-menu-item
        router-link(to="/radar") Radar
      sui-menu-item Chat
      sui-menu-item Files
      sui-menu-item Whiteboard
      sui-menu-item
        router-link(to="/P2pDevModeInfo") p2p dev mode info

    router-view/

</template>

<script>
export default {
  name: 'App',
  data () {
    return { visible: true }
  },
  methods: {
    handleDismiss () {
      this.visible = false
      setTimeout(() => {
        this.visible = true
      }, 2000)
    }
  }
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  // margin-top: 60px

</style>
