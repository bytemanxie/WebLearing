<script>
  export default {
    props:{
      messages:{
        type:String,
        default:'标题1'
      }
    },
    data(){
      return{
        counter:0
      }
    }
  }
</script>

<template>
  <h1>{{messages}} 当前计数为：{{counter}}</h1>
  <button @click="counter++">+1</button>
</template>

<style scoped>

</style>