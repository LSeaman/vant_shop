<template>
  <header id="header-box">
    <van-nav-bar
      left-text="返回"
      right-text="登录"
      left-arrow
      @click-left="onClickLeft()"
      @click-right="onClickRight()"
      fixed
    />
  </header>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$router.push('/user')
    }
  }
}
</script>

<style lang="less" scoped>
#header-box {
  height: 46px;
}
</style>
