<template>
  <div>
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="backHomePage()"
    />
    <div id="blockShopping">
      <van-image src="./img/shopCar.png" width="100" height="100"></van-image>
      <div>菩提本无树,何处惹尘埃</div>
    </div>
    <!-- 购物车导航栏 -->
    <van-submit-bar :price="0" button-text="提交订单" />
  </div>
</template>

<script>
export default {
  methods: {
    backHomePage() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scope>
#blockShopping {
  margin-top: 60px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
