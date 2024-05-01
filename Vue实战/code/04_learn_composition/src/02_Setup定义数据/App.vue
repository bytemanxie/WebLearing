<script>
  import {reactive, ref} from "vue";

  export default {
    setup(){
      const message = 'Hello Vue3'
      const account = reactive({
        account: 'byteman',
        password: '123456'
      })
      function changeme(){
        this.account.account = 'byteman2'
        this.account.password = '654321'
      }
      const Counter = ref(0)
      function decrement(){
        Counter.value--
      }
      return {
        message,
        account,
        changeme,
        Counter,
        decrement
      }
    }
  }
</script>

<template>
  <div>{{message}}</div>
  <div>{{account.account}}</div>
  <div>{{account.password}}</div>
  <button @click="changeme">change</button>
  <div>当前计数：{{Counter}}</div>
  <button @click="Counter++">+1</button>
  <button @click="decrement">-1</button>
</template>

<style scoped>

</style>