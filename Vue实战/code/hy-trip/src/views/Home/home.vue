<script setup>
  import NavBar from './cpns/home-nav-bar.vue'
  import SearchBox from './cpns/home-search-box.vue'
  import useHomeStore from '@/stores/modules/home';
  const homeStore = useHomeStore()
  homeStore.fetchHotSuggestData()

</script>

<template>
  <div class="home">
    <nav-bar/>
    <div class="banner">
      <img src="@/assets/image/home/banner.webp">
    </div>
    <search-box/>
  </div>
</template>

<style lang="less" scoped>
  .home{
    img{
      width: 100%;
    }
  }
</style>