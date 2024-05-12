<script setup>
  import TabBar from './components/tab-bar/tab-bar_03.vue'
  import {useRoute} from "vue-router";
  const route = useRoute()
</script>

<template>
  <router-view/>
<!--  <router-link to="/home">首页</router-link>-->
<!--  <router-link to="/message">消息</router-link>-->
<!--  <router-link to="/order">订单</router-link>-->
<!--  <router-link to="/profile">profile</router-link>-->
<!--  <router-link to="/favor">收藏</router-link>-->
<!--  <tab-bar v-if="!route.meta.hideTabBar" />-->
  <tab-bar/>
</template>

<style scoped>

</style>