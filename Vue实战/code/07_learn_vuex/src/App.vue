<template>
  <div id="app">
    <h1>{{ count }}</h1>
    <h1>{{ dbcount }}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()

  // 使用 computed 使其响应式
  const count = computed(() => store.getters.getCount)
  const dbcount = computed(() => store.getters.getDoubleCount)
  // 定义一个方法触发 Vuex action
  const increment = () => {
    store.dispatch('increment')
  }
</script>

<style>
/* Add your styles here */
</style>
