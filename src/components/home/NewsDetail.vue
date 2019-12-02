<template>
  <div>
    <ReBack />
    <div id="article-box">
      <div id="title">
        {{ articleDetail.title }}
      </div>
      <div id="article-info">
        <span id="add-time">
          {{ articleDetail.add_time | dateFormat() }}
        </span>
        <span id="clickNum"> 浏览量 : {{ articleDetail.click }} </span>
      </div>
      <div id="content" v-html="articleDetail.content"></div>
    </div>
  </div>
</template>

<script>
import ReBack from '../ReBack'
export default {
  data() {
    return {
      articleDetail: {}
    }
  },
  created() {
    this.getArticle()
  },
  methods: {
    async getArticle() {
      let id = this.$store.state.detailId
      const res = await this.$http.get(`/api/getnew/${id}`)
      this.articleDetail = res.data.message[0]
      console.log(this.articleDetail)
    }
  },
  components: {
    ReBack
  }
}
</script>

<style lang="less" scope>
#article-box {
  margin: 0 6% 0;
  padding-top: 12px;
  #title {
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 24px;
  }
  #article-info {
    flex: 1;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #999;
  }
}
</style>
