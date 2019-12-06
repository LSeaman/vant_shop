<template>
  <div>
    <ReBack />
    <div id="mall-box">
      <van-list>
        <div class="my-row">
          <div
            class="my-col"
            v-for="item in goodsList"
            :key="item.id"
            @click="toGoodsDetail(item.id)"
          >
            <div class="goods-img">
              <van-image :src="item.img_url"></van-image>
            </div>
            <div
              class="goods-name van-multi-ellipsis--l2"
              v-text="item.title"
            ></div>
            <div class="goods-info">
              <div class="goods-price">
                <div class="sell-price" v-text="'¥' + item.sell_price"></div>
                <div
                  class="price-before"
                  v-text="'¥' + item.market_price"
                ></div>
              </div>
              <div class="goods-sell">
                <div>热卖中</div>
                <div v-text="'剩余' + item.stock_quantity"></div>
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import ReBack from '../ReBack'
export default {
  data() {
    return {
      goodsList: []
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    async getGoodsList() {
      const res = await this.$http.get('/api/getgoods?pageindex=1')
      this.goodsList = res.data.message
      console.log(res.data.message)
    },
    // 点击前往商品详情页
    toGoodsDetail(id) {
      this.$store.commit('StrGetDetailID', id)
      this.$router.push('/malldetail')
    }
  },
  components: {
    ReBack
  }
}
</script>

<style lang="less" scoped>
#mall-box {
  margin: 0 3%;
  .my-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .my-col {
      flex: 0 0 48%;
      display: flex;
      flex-direction: column;
      height: 350px;
      margin-bottom: 3%;
      border: 1px solid #eee;
      .goods-img {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0 0 72%;
        .van-image {
          height: 80%;
          flex: 0 0 90%;
        }
      }
      .goods-name {
        box-sizing: border-box;
        padding: 2%;
        font-size: 14px;
      }
      .goods-info {
        flex: 0 0 12%;
        background-color: #eee;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
        display: flex;
        flex-direction: column;
        > div {
          flex: 1;
          display: flex;
          justify-content: space-around;
          :nth-child(2) {
            text-decoration: line-through;
          }
          :nth-child(1) {
            color: red;
          }
          > div {
            flex: 0 0 36%;
            display: flex;
            justify-content: start;
            align-items: center;
          }
        }
        .goods-sell {
          font-size: 12px;
          :nth-child(2) {
            text-decoration: none;
          }
          :nth-child(1) {
            color: red;
          }
        }
      }
    }
  }
}
</style>
