<template>
  <div>
    <ReBack />
    <!-- 文章盒子 -->
    <div id="article-box">
      <div id="title">
        {{ articleDetail.title }}
      </div>
      <div id="article-info">
        <span id="add-time">
          {{ articleDetail.add_time }}
        </span>
        <span id="clickNum"> 浏览量 : {{ articleDetail.click }} </span>
      </div>
      <div id="content" v-html="articleDetail.content"></div>
    </div>
    <!-- 评论区 -->
    <van-divider
      :style="{
        color: '#666',
        borderColor: '#666',
        padding: '0 16px',
        fontSize: '18px'
      }"
      >评论区</van-divider
    >
    <van-list
      id="content-aera"
      :offset="30"
      :immediate-check="false"
      v-model="loading"
      :finished="finished"
      @load="loadMore"
      finished-text="没有更多了"
    >
      <div slot="default" v-for="(item, index) in commentsList" :key="index">
        <div>
          <span id="floor"> 第{{ index }}楼 </span>
          <span id="username"> 用户: {{ item.user_name }} </span>
          <!-- <span id="time"> 发表时间: {{ item.add_time | dateFormat() }} </span> -->
        </div>
        <div>{{ item.content }}</div>
      </div>
    </van-list>
    <!-- 评论编辑区 -->
    <Comments />
  </div>
</template>

<script>
import ReBack from '../ReBack'
import Comments from '../Comments'
export default {
  data() {
    return {
      articleDetail: {},
      loading: false,
      finished: false,
      commentsList: [],
      commentsPage: 1
    }
  },
  created() {
    let id = window.sessionStorage.getItem('detailId')
    this.getArticle(id)
  },
  methods: {
    // 获取新闻数据
    async getArticle(id) {
      const res = await this.$http.get(`/api/getnew/${id}`)
      this.articleDetail = res.data.message[0]
    },
    async getComments(id) {
      const res = await this.$http.get(
        `/api/getcomments/${id}?pageindex=${this.commentsPage}`
      )
      return res.data.message
    },
    // 加载更多
    async loadMore() {
      let id = window.sessionStorage.getItem('detailId')
      let data = await this.getComments(id)
      if (data.length === 0) {
        this.finished = true
        return false
      }
      this.commentsList.push(...data)
      this.commentsPage++
      // 加载状态结束
      this.loading = false
    }
  },
  components: {
    ReBack,
    Comments
  }
}
</script>

<style lang="less">
#article-box {
  margin: 0 6% 16%;
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
#content-aera {
  padding: 0 6% 6%;
  > div {
    height: 72px;
    margin-bottom: 2%;
    > :nth-child(1) {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #666;
    }
    > :nth-child(2) {
      display: flex;
      height: 64%;
      align-items: flex-end;
      margin-bottom: 2%;
    }
  }
}
</style>
