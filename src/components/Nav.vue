<template>
  <!-- 标签栏 -->
  <van-tabbar v-model="active" @change="changeTabbar" :route="true">
    <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="manager" to="/user">会员</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart" to="/shopcart"
      >购物车</van-tabbar-item
    >
    <van-tabbar-item icon="eye" to="/search">搜索</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      active: 0
    }
  },
  computed: {
    ...mapState(['tabsActive'])
  },
  methods: {
    changeTabbar(e) {
      this.$store.commit('StrChangeTabbar', e)
    }
  }
}
</script>
