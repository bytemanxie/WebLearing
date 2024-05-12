<script setup>
  import NavBar from './cpns/home-nav-bar.vue'
  import SerachBox from './cpns/home-search-box.vue'


</script>

<template>
  <div class="home">
    <nav-bar/>
    <div class="banner">
      <img src="@/assets/image/home/banner.webp">
    </div>
    <serach-box/>
  </div>
</template>

<style lang="less" scoped>
  .home{
    img{
      width: 100%;
    }
  }
</style>