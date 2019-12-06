<template>
  <div id="image-detail-box">
    <ReBack />
    <!-- 标题文章盒子 -->
    <div id="article-box">
      <div id="title">
        {{ imgDetailInfo.title }}
      </div>
      <div id="article-info">
        <span id="add-time">
          {{ imgDetailInfo.add_time }}
        </span>
        <span id="clickNum"> 浏览量 : {{ imgDetailInfo.click }} </span>
      </div>
      <!-- 图片展示区 -->
      <van-grid :border="false" :column-num="1" square>
        <van-grid-item
          v-for="(item, index) in imgDetailList"
          :key="index"
          @click="previewImage(index)"
        >
          <van-image :src="item.src" />
        </van-grid-item>
      </van-grid>
      <div id="content" v-html="imgDetailInfo.content"></div>
    </div>
    <Comments />
  </div>
</template>

<script>
import ReBack from '../ReBack'
import Comments from '../Comments'
export default {
  data() {
    return {
      imgDetailList: [],
      imgDetailInfo: {}
    }
  },
  created() {
    this.getImgDetailList()
  },
  methods: {
    async getImgDetailList() {
      let id = sessionStorage.getItem('detailId')
      const reslist = await this.$http.get(`/api/getthumimages/${id}`)
      this.imgDetailList = reslist.data.message
      const resInfo = await this.$http.get(`/api/getimageInfo/${id}`)
      this.imgDetailInfo = resInfo.data.message[0]
    },
    previewImage(index) {
      let srcList = []
      this.imgDetailList.forEach(item => {
        srcList.push(item.src)
      })
      console.log(srcList)
      this.$imagePreview({
        images: srcList,
        startPosition: index
      })
    }
  },
  components: {
    ReBack,
    Comments
  }
}
</script>

<style lang="less">
#image-detail-box {
  .van-grid-item__content {
    padding: 0;
    .van-image {
      height: 88%;
      width: 88%;
    }
  }
}
.van-image-preview__image {
  margin: auto;
  width: 100%;
}
</style>
