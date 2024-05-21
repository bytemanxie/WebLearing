<script setup>
  import TabBar from './components/tab-bar/tab-bar_03.vue'
  import {useRoute} from "vue-router";
  const route = useRoute()
</script>

<template>
  <div class="app">
    <router-view/>
    <tab-bar v-if="!route.meta.hideTabBar"/>
<!--     <tab-bar/>-->
  </div>
</template>

<style scoped>

</style>