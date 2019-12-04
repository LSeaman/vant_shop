<template>
  <div id="comments-box">
    <span>
      <input type="text" />
    </span>
    <span>
      <van-icon name="like-o" size="26" />
    </span>
    <span>
      <van-icon name="chat-o" size="26" />
    </span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
#comments-box {
  border-top: 1px #eee solid;
  display: flex;
  width: 100%;
  height: 7%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: #fff;
  > span {
    flex: 1;
  }
  > span:nth-child(1) {
    display: flex;
    flex: 0 0 64%;
    > input {
      flex: 1;
      margin: 12px;
      padding-left: 12px;
      border: none;
      background-color: #ddd;
      border-radius: 100px;
    }
  }
  > span:nth-child(n + 2) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
  }
}
</style>
