<template>
  <div>
    <!-- 标题栏 -->
    <ReBack />
    <van-list finished-text="没有更多了">
      <van-card
        :thumb="item.img_url"
        v-for="item in newList"
        :key="item.id"
        @click="toDetails(item.id)"
      >
        <div slot="title">
          <span style="font-size: 16px">{{ item.title }}</span>
        </div>
        <div slot="tags" id="temp">
          <span>{{ item.add_time | dateFormat() }}</span>
          <span>点击 : {{ item.click }}</span>
        </div>
      </van-card>
    </van-list>
  </div>
</template>

<script>
import ReBack from '../ReBack'
export default {
  data() {
    return {
      newList: []
    }
  },
  created() {
    this.getNewList()
  },
  methods: {
    async getNewList() {
      const res = await this.$http.get('/api/getnewslist')
      this.newList = res.data.message
    },
    toDetails(id) {
      this.$store.commit('StrGetDetailID', id)
      this.$router.push('newsdetail')
    }
  },
  components: {
    ReBack
  }
}
</script>

<style lang="less" scope>
#temp {
  flex: 1;
  display: flex;
  > span {
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
  }
  :nth-child(1) {
    flex: 0 0 70%;
    align-items: flex-start;
  }
  :nth-child(2) {
    flex: 1 1 1;
    align-items: flex-end;
  }
}
</style>
