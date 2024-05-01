<template>
  <div>{{message}}</div>
  <button @click="change">change</button>
</template>

<script>
import { onMounted, onUpdated, onUnmounted, ref, onBeforeUpdate } from 'vue'

export default {
  beforeCreate() {

  },
  // created() {

  // },
  // beforeMount() {

  // },
  // mounted() {

  // },
  // beforeUpdate() {

  // },
  // updated() {

  // }
  setup() {
    // 在执行setup函数的过程中, 你需要注册别的生命周期函数
    onMounted(() => {
      console.log("onmounted")
    })
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate")
    })
    onUpdated(() => {
      console.log("onUpdated")
    })
    onUnmounted(() => {
      console.log("onUnmounted")
    })
    const message = ref('hello world')
    const change = () => {
      message.value = 'hello vue3'
    }

    return {
      message,
      change
    }
  }
}
</script>

<style scoped>
</style>

