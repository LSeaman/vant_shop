<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  updated() {
    this.test()
  },
  methods: {
    test() {
      let path = this.$router.history.current.path
      window.sessionStorage.setItem('path', path)
      this.$store.commit('StrGetRouter', path)
    }
  }
}
</script>

<style lang="less"></style>
