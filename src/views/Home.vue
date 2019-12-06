<template>
  <div style="height: 100%">
    <router-view></router-view>
    <!-- 导航栏组件(自定义) -->
    <Nav />
  </div>
</template>

<script>
import Nav from '../components/Nav'
export default {
  components: {
    Nav
  }
}
</script>

<style lang="less" scope></style>
