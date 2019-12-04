<template>
  <footer id="nav-box">
    <div v-if="path !== '/newsdetail'">
      <!-- 标签栏 -->
      <van-tabbar
        v-model="active"
        @change="changeTabbar"
        :route="true"
        active-color="#07c160"
        inactive-color="#333"
      >
        <van-tabbar-item icon="home-o" to="/home" name="home"
          >首页</van-tabbar-item
        >
        <van-tabbar-item icon="manager" to="/user" name="user"
          >会员</van-tabbar-item
        >
        <van-tabbar-item icon="shopping-cart" to="/shopcart" name="shopcart"
          >购物车</van-tabbar-item
        >
        <van-tabbar-item icon="eye" to="/search" name="search"
          >搜索</van-tabbar-item
        >
      </van-tabbar>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      active: 0,
      routerPath: ''
    }
  },
  updated() {
    this.routerPath = this.$store.state.path
  },
  computed: {
    ...mapState(['tabsActiveName', 'path'])
  },
  methods: {
    changeTabbar(e) {
      this.$store.commit('StrChangeTabbar', e)
    }
  }
}
</script>

<style lang="less" scope>
#nav-box {
  height: 50px;
  background-color: #fff;
  margin-top: 10%;
}
</style>
