<script setup>
  const positionClick = () => {
    navigator.geolocation.getCurrentPosition(res => {
      console.log("获取位置成功:", res)
    }, err => {
      console.log("获取位置失败:", err)
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  }

  import {useRouter} from "vue-router";

  const router = useRouter()
  const cityclick = () => {
    router.push('/city')
  }
</script>

<template>
  <div class="location">
    <div class="city" @click="cityclick">广州</div>
    <div class="position" @click="positionClick">
      <span class="text">我的位置</span>
      <img src="@/assets/image/home/icon_location.png" alt="">
    </div>
  </div>
</template>

<style lang="less" scoped>
.location{
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city{
    flex: 1;
    color: #333;
    font-size: 15px;
  }

  .position{
    width: 74px;
    display: flex;
    align-items: center;

    .text{
      position: relative;
      bottom: 1px;
      font-size: 12px;
      color: #666;
    }

    img{
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
</style>