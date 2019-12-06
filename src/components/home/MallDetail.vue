<template>
  <div>
    <ReBack />
    <div id="goods-detail-box" style="height: 100%">
      <div class="swipe">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(item, index) in goodsSwipeData" :key="index">
            <van-image :src="item.src"></van-image>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="info">
        <div
          v-text="goodsInfo.title"
          class="title-box"
          style="align-items: center"
        ></div>
        <div>
          <div class="price">
            <span
              style="color: #ff6767"
              v-text="'销售价: ¥' + goodsInfo.sell_price"
            ></span>
            <span
              style="text-decoration: line-through"
              v-text="'市场价: ¥' + goodsInfo.market_price"
            ></span>
          </div>
          <div class="num">
            <span>数量</span>
            <span><van-stepper v-model="number"/></span>
          </div>
          <div class="status">
            <span><van-button type="info">立即购买</van-button></span>
            <van-button type="danger" @click="addToCart">加入购物车</van-button>
          </div>
        </div>
      </div>
      <div class="info-detail">
        <div
          class="title-box"
          style="justify-content: center; font-size: 18px;  align-items: center"
        >
          商品参数
        </div>
        <div
          class="title-box"
          style="flex-direction: column; height: max-content"
        >
          <div
            class="margin-o"
            v-text="'商品货号: ' + goodsInfo.goods_no"
          ></div>
          <div
            class="margin-o"
            v-text="'库存情况: ' + goodsInfo.stock_quantity"
          ></div>
          <div
            class="margin-o"
            v-text="'上架时间: ' + goodsInfo.add_time"
          ></div>
        </div>
        <div>
          <van-button
            class="large-btn"
            plain
            type="info"
            size="large"
            to="/goodsarticle"
            >图文详情</van-button
          >
          <van-button class="large-btn" plain type="warning" size="large"
            >商品评论</van-button
          >
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import ReBack from '../ReBack'
export default {
  data() {
    return {
      goodsInfo: {},
      goodsSwipeData: [],
      number: 1
    }
  },
  created() {
    let id = window.sessionStorage.getItem('detailId')
    this.getGoodsDetail(id)
    this.getGoodsSwipeData(id)
  },
  methods: {
    async getGoodsDetail(id) {
      const res = await this.$http.get(`/api/goods/getinfo/${id}`)
      this.goodsInfo = res.data.message[0]
    },
    // 获取轮播数据
    async getGoodsSwipeData(id) {
      const res = await this.$http.get(`/api/getthumimages/${id}`)
      this.goodsSwipeData = res.data.message
    },
    // 当点击商品详情页的 添加到购物车将数据存储到sessionStorage内
    addToCart() {
      if (window.sessionStorage.getItem('cartData') === null) {
        window.sessionStorage.setItem('cartData', '[]')
      }
      let cartData = JSON.parse(window.sessionStorage.getItem('cartData'))
      // 调用处理数据 函数
      this.dealData(cartData)
      window.sessionStorage.setItem(`cartData`, JSON.stringify(cartData))
      this.$store.commit('StrSaveCartData', cartData)
    },
    // 处理数据 函数
    dealData(arr) {
      let i = 0
      do {
        // 当 sessionStorage 内的 cartData 中存在相同 id 的商品时 , 就进行数量叠加
        // 否则 创建一个新的 对象 添加到数组中
        if (arr.length === 0) {
          arr.push({
            id: this.goodsInfo.id,
            num: this.number
          })
          return
        } else if (arr[i].id === this.goodsInfo.id) {
          arr[i].num += this.number
          return
        } else if (i === arr.length - 1) {
          arr.push({
            id: this.goodsInfo.id,
            num: this.number
          })
          return
        }
        i++
      } while (i < arr.length)
    }
  },
  components: {
    ReBack
  }
}
</script>

<style lang="less" scoped>
.title-box {
  height: 60px;
  display: flex;
  border-bottom: 1px solid #eee;
}
.margin-o {
  margin: 1% 0;
}
.van-swipe,
.van-swipe-item {
  height: 100%;
}
.van-image {
  height: 100%;
  width: 100%;
}
#goods-detail-box {
  margin: 0 auto;
  width: 94%;
  height: 100%;
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 3%;
    border: 1px #eee solid;
    border-radius: 6px;
  }
  .swipe {
    flex: 0 0 30%;
  }
  .info {
    flex: 0 0 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    > :nth-child(2) {
      flex: 75%;
      display: flex;
      flex-direction: column;
      > div {
        flex: 1;
      }
    }
    > div {
      margin: 6px 12px;
      .num,
      .price,
      .status {
        display: flex;
        flex-direction: row;
        > span {
          margin-right: 12px;
        }
      }
    }
  }
  .info-detail {
    flex: 0 0 26%;
    padding: 6px 12px;
  }
  .large-btn {
    margin-top: 3%;
  }
}
</style>
