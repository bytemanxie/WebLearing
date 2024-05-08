<script setup>

</script>

<template>
  <div class="tab-bar">
    <div class="tab-bar-item">
      <img src="@/assets/image/tabbar/tab_home.png" alt="">
      <span class="text">首页</span> 
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/image/tabbar/tab_favor.png" alt="">
      <span class="text">收藏</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/image/tabbar/tab_message.png" alt="">
      <span class="text">消息</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/image/tabbar/tab_order.png" alt="">
      <span class="text">订单</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .tab-bar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    flex: 1;
    border-top: 1px solid #ccc;
    height: 50px;
    .tab-bar-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        width: 36px;
      }
      .text {
        font-size: 12px;
        margin-top: 2px;
      }
    }
  }
</style>