<template>
  <div class="comments-box">
    <van-popup
      :closeable="true"
      @close="cloesFild"
      v-model="show"
      round
      position="bottom"
      :style="{ height: '36%' }"
    >
      <van-cell-group style="margin-top: 10%; width: 100%">
        <van-field
          v-model="message"
          rows="4"
          autosize
          label="评论"
          type="textarea"
          placeholder="请发表友善的评论"
        >
        </van-field>
        <van-row style="margin-top: 6%" gutter="2">
          <van-col offset="15">
            <van-button type="primary">转发</van-button>
          </van-col>
          <van-col>
            <van-button type="info">发表</van-button>
          </van-col>
        </van-row>
      </van-cell-group>
    </van-popup>
    <div v-if="!focusFlag" class="uncomments">
      <span class="text">
        <input type="text" @focus="show = true" />
      </span>
      <span>
        <van-icon name="like-o" size="26" />
      </span>
      <span>
        <van-icon name="chat-o" size="26" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      focusFlag: false,
      show: false
    }
  },
  methods: {
    cloesFild() {
      this.focusFlag = false
    }
  }
}
</script>

<style lang="less" scoped>
.comments-box {
  border-top: 1px #eee solid;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: #fff;
  .uncomments {
    display: flex;
    .text {
      display: flex;
      flex: 0 0 75%;
      input {
        flex: 100%;
        margin: 12px;
        padding-left: 12px;
        border: none;
        background-color: #ddd;
        border-radius: 100px;
      }
    }
    > :nth-child(n + 2) {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #999;
    }
  }
}
</style>
