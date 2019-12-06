<template>
  <div>
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="backHomePage()"
    />
    <div id="blockShopping" v-if="blockFlag">
      <van-image src="./img/shopCar.png" width="100" height="100"></van-image>
      <div>本来无一物,何处惹尘埃</div>
    </div>
    <!-- 购物车 非空时 显示列表 -->
    <div v-if="!blockFlag">
      <van-swipe-cell v-for="(item, index) in cartList" :key="index">
        <div slot="default">
          <van-card
            :num="SetList[index].num"
            :price="item.sell_price"
            :title="item.title"
            :thumb="item.thumb_path"
          >
            <div slot="footer">
              <van-stepper
                v-model="SetList[index].num"
                @change="changeNumber"
              />
            </div>
          </van-card>
        </div>
        <template slot="right" style="display: flex">
          <van-button
            square
            type="danger"
            text="删除"
            @click="closeOrder(item.id)"
          />
        </template>
      </van-swipe-cell>
    </div>

    <!-- 购物车导航栏 -->
    <div id="cart-nav">
      <van-submit-bar :price="totalPrice" button-text="提交订单" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blockFlag: false,
      cartList: [],
      SetList: [],
      totalPrice: 0
    }
  },
  created() {
    let cartData = window.sessionStorage.getItem('cartData')
    if (cartData === null || cartData === '[]') {
      this.blockFlag = true
    }
    this.getCartData()
  },
  methods: {
    backHomePage() {
      this.$router.push('/home')
    },
    // 获取 sessionStorage 中的数据
    async getCartData() {
      this.SetList = JSON.parse(window.sessionStorage.getItem('cartData'))
      let idList = []
      this.SetList.forEach(item => {
        idList.push(item.id)
      })
      if (idList.length === 0) {
        this.cartList = []
        console.log(1)
      } else {
        const res = await this.$http.get(
          `/api/goods/getshopcarlist/${idList.join(',')}`
        )
        this.cartList = res.data.message
      }

      this.cartList.forEach((item, index) => {
        this.totalPrice += item.sell_price * this.SetList[index].num * 100
      })
    },
    // 当改变 步进器 内的数据时 触发函数 ,修改 sessionStorage
    changeNumber(value) {
      window.sessionStorage.setItem('cartData', JSON.stringify(this.SetList))
      this.totalPrice = 0
      this.cartList.forEach((item, index) => {
        this.totalPrice += item.sell_price * this.SetList[index].num * 100
      })
    },
    closeOrder(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="less" scope>
#blockShopping {
  margin-top: 60px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.van-swipe-cell__right {
  display: flex;
  .van-button {
    height: 100%;
  }
}
#cart-nav {
  height: 50px;
}
</style>
