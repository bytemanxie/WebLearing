<template>
  <div class="app">
    <h2>App Message: {{ message }}</h2>
    <home></home>
    <cate-gory v-if="isShowCategory"></cate-gory>
    <button @click="isShowCategory = !isShowCategory">切换Category</button>
  </div>
</template>

<script>
import eventBus from './utils/event-bus'
import Home from './HomeView.vue'
import Category from './CateGory.vue'
import CateGory from "@/09_事件总线的使用(掌握)/CateGory.vue";

export default {
  components: {
    CateGory,
    Home,
    Category,
  },
  data() {
    return {
      message: "Hello App",
      isShowCategory: true
    }
  },
  created() {
    // fetch()

    // 事件监听
    eventBus.on("whyEvent", (name, age, height) => {
      console.log("whyEvent事件在app中监听", name, age, height)
      this.message = `name:${name}, age:${age}, height:${height}`
    })
  }
}
</script>

<style scoped>
</style>

