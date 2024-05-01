<template>
  <div>
    <h2>当前计数: {{ counter }}</h2>
    <button @click="counter++">+1</button>
    <button @click="name = name==='kobe' ? 'byte' : 'kobe'">修改name：{{name}}</button>
    <h2>当前数字: {{ numer }}</h2>
    <button @click="numer+=5">+5</button>
  </div>
</template>

<script>
import { watchEffect, watch, ref } from 'vue'

export default {
  setup() {
    const counter = ref(0)
    const name = ref("why")
    const numer = ref(0)

    watch(counter, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })

    // 1.watchEffect传入的函数默认会直接被执行
    // 2.在执行的过程中, 会自动的收集依赖(依赖哪些响应式的数据)
    const stopWatch = watchEffect(() => {
      console.log("-------", counter.value, name.value)

      // 判断counter.value > 10
      if (counter.value >= 10) {
        stopWatch()
      }
    })

    watchEffect(() =>{
      console.log("watchEffect", numer.value)
    })

    return {
      counter,
      name,
      numer
    }
  }
}
</script>

<style scoped>
</style>

