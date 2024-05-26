<script setup>
  import TabBar from './components/tab-bar/tab-bar_03.vue'
  import {useRoute} from "vue-router";
  import Loading from "@/components/loading/loading.vue"
  const route = useRoute()
</script>

<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <tab-bar v-if="!route.meta.hideTabBar"/>
<!--     <tab-bar/>-->
    <loading/>
  </div>
</template>

<style scoped>

</style>