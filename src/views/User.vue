<template>
  <div>
    <van-nav-bar
      title="会员界面"
      left-text="返回"
      left-arrow
      @click-left="backHomePage()"
    />
    <div id="undeveloped">
      <van-icon name="setting-o" size="32px" />
      <div>施工中</div>
    </div>
    <Nav />
  </div>
</template>

<script>
import Nav from '../components/Nav'
export default {
  methods: {
    backHomePage() {
      this.$router.push('/home')
    }
  },
  components: {
    Nav
  }
}
</script>

<style lang="less">
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
#undeveloped {
  height: 120px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .van-icon {
    animation: spin 2s linear infinite;
  }
}
</style>
