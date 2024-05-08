<script setup>
  import tabbar from './components/tab-bar/tab-bar.vue'
</script>

<template>
  <router-view/>
  <router-link to="/home">首页</router-link>
  <router-link to="/message">消息</router-link>
  <router-link to="/order">订单</router-link>
  <router-link to="/profile">profile</router-link>
  <router-link to="/favor">收藏</router-link>
  <tabbar/>
</template>

<style scoped>

</style>