<template>
  <div>
    <van-nav-bar title="黑马程序员"> </van-nav-bar>
    <van-search
      v-model="key"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="search"
      @input="changeBlue"
    >
      <div slot="action" @click="search(key)">搜索</div>
    </van-search>
    <div id="search-box">
      <div v-if="showResultFlag" class="searchResult">
        11
      </div>
      <div v-if="!showResultFlag" class="beforeSearch">
        <div id="result-title">
          <span>历史搜索:</span>
          <span><van-icon name="delete"/></span>
        </div>
        <van-swipe-cell v-for="item in resultList" :key="item.id">
          <van-cell
            :border="false"
            :title="item.name"
            :value="'产品id:' + item.id"
          />
          <template slot="right">
            <van-button square type="primary" text="收藏结果" />
          </template>
        </van-swipe-cell>
      </div>
    </div>
    <Nav />
  </div>
</template>

<script>
import Nav from '../components/Nav'
export default {
  data() {
    return {
      key: '',
      resultList: [],
      showResultFlag: false
    }
  },
  methods: {
    async search(val) {
      if (this.key.trim().length === 0) {
        this.$toast('请输入搜索内容')
        return false
      }
      const res = await this.$http.get('/api/getprodlist')
      this.resultList = res.data.message
      console.log(val)
    },
    changeBlue() {
      if (this.key === '') {
        this.resultList = []
      }
    }
  },
  components: {
    Nav
  }
}
</script>

<style lang="less" scoped>
#search-box {
  margin: 0 3%;
  #result-title {
    display: flex;
    justify-content: space-between;
  }
  .result-li {
    background-color: #eee;
  }
}
</style>
