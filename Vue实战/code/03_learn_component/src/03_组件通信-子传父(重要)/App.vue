<script>
  import AddCounter from './AddCounter.vue'
  import SubCounter from './SubCounter.vue'
  export default {
    components: {
      AddCounter,
      SubCounter
    },
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      add(num) {
        this.counter += num
      },
      sub(num) {
        this.counter -= num
      }
    }
  }
</script>

<template>
  <h1>我是标题</h1>
  <h2>当前计数：{{counter}}</h2>
  <add-counter @add="add"></add-counter>
  <sub-counter @sub="sub"></sub-counter>
</template>

<style scoped>

</style>