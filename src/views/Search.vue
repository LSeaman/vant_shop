<template>
  <div>
    <van-nav-bar title="黑马程序员"> </van-nav-bar>
    <van-search placeholder="请输入搜索关键词" show-action shape="round">
      <div slot="action">搜索</div>
    </van-search>
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
