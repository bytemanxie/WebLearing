<script setup>
  import NavBar from './cpns/home-nav-bar.vue'
  import SearchBox from './cpns/home-search-box.vue'
  import useHomeStore from '@/stores/modules/home';
  import HomeCategories from './cpns/home-categories.vue'
  import HomeContent from './cpns/home-content.vue'
  import useScroll from '@/hooks/useScroll'
  import {watch} from "vue";
  import SearchBar from '@/components/search-bar/search-bar.vue'
  import {computed} from "vue";

  const homeStore = useHomeStore()
  homeStore.fetchHotSuggestData()
  homeStore.fetchCategoriesData()
  homeStore.fetchHouselistData()

  // 默认加载更多
  // const moreBtnClick = () => {
  //   console.log("加载更多的数据")
  //   homeStore.fetchHouselistData()
  // }

  // 监听window窗口的滚动
  // 1.当我们离开页面时, 我们移除监听
  // 2.如果别的页面也进行类似的监听, 会编写重复代码
  window.addEventListener('scroll', ()=> {
    const clientHeight = document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    if (clientHeight + scrollTop >= scrollHeight) {
      homeStore.fetchHouselistData()
    }
  })

  const { isReachBottom, scrollTop } = useScroll()
  watch(isReachBottom, (newValue) => {
    if (newValue) {
      homeStore.fetchHouselistData().then(() => {
        isReachBottom.value = false
      })
    }
  })

  const isShowSearchBar = computed(() => {
    return scrollTop.value >= 360
  })

</script>

<template>
  <div class="home">
    <nav-bar/>
    <div class="banner">
      <img src="@/assets/image/home/banner.webp">
    </div>
    <search-box/>
    <home-categories />
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar :start-date="'09.19'" :end-date="'09.20'"/>
    </div>
    <home-content />
<!--    <button @click="moreBtnClick">加载更多</button>-->
  </div>
</template>

<style lang="less" scoped>
  .home{
    img{
      width: 100%;
    }
    padding-bottom: 60px;
  }
  .banner {
    img {
      width: 100%;
    }
  }
  .search-bar {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    background-color: #fff;
  }
</style>