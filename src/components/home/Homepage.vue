<template>
  <div>
    <!-- 弹出层 -->
    <van-popup v-model="show" position="left" style="height: 100%; width: 96px">
      <van-image
        round
        width="64px"
        height="64px"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </van-popup>
    <!-- 导航栏 -->
    <van-nav-bar id="nav-box-home" title="黑马程序员">
      <van-icon name="bars" slot="left" @click="show = true" />
    </van-nav-bar>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white" style="height: 200px">
      <van-swipe-item v-for="item in swipeList" :key="item.id">
        <img :src="item.img" alt="" class="swipe-img-box" />
      </van-swipe-item>
    </van-swipe>
    <!-- 首页宫格 -->
    <van-grid :column-num="3" square :border="false">
      <van-grid-item
        id="grid-item"
        v-for="(item, index) in navimgList"
        :key="item.id"
        icon="photo-o"
        :to="item.router"
      >
        <van-image :src="navimgList[index].url" />
        <p style="margin: 8px">{{ item.text }}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipeList: [],
      navimgList: [
        {
          id: 1,
          url: './img/menu1.png',
          text: '新闻资讯',
          router: 'news'
        },
        {
          id: 2,
          url: './img/menu2.png',
          text: '图片分享',
          router: 'image'
        },
        {
          id: 3,
          url: './img/menu3.png',
          text: '商品购买',
          router: 'mall'
        },
        {
          id: 4,
          url: './img/menu4.png',
          text: '留言反馈',
          router: ''
        },
        {
          id: 5,
          url: './img/menu5.png',
          text: '视频专区',
          router: ''
        },
        {
          id: 6,
          url: './img/menu6.png',
          text: '联系我们',
          router: ''
        }
      ],
      active: 0,
      // 弹出层
      show: false
    }
  },
  created() {
    this.getSwipeList()
  },
  methods: {
    // 获取 轮播图 数据
    async getSwipeList() {
      const { data: res } = await this.$http.get('/api/getlunbo')
      this.swipeList = res.message
    }
    // 当点击 宫格 将 编程式导航 到指定路由
    // 将 原有的 将 路由地址 传给 后台
  }
}
</script>

<style lang="less" scope>
.header-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: #fff;
}
.swipe-img-box {
  height: 200px;
  width: 100%;
}
#grid-item {
  .van-grid-item__content {
    padding: 0;
  }
}
.van-image {
  width: 50%;
  height: 50%;
}
.van-popup {
  display: flex;
  justify-content: center;
  > .van-image {
    margin-top: 24px;
  }
}
</style>
