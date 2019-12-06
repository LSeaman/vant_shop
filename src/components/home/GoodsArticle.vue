<template>
  <div id="ol">
    <!-- 标题文章盒子 -->
    <div id="article-box">
      <div id="title" v-html="goodsArticle.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsArticle: {}
    }
  },
  created() {
    let id = window.sessionStorage.getItem('detailId')
    this.getGoodsArticle(id)
  },
  methods: {
    async getGoodsArticle(id) {
      const res = await this.$http.get(`/api/goods/getdesc/${id}`)
      this.goodsArticle = res.data.message[0]
    }
  }
}
</script>

<style lang="less" scoped>
#ol {
  height: 100%;
}
</style>
