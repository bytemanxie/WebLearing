<script>
import NavBar from './NavBar'
 export default {
   components: {
     NavBar
   },
   data() {
     return {
       position: 'left'
     }
   },
   methods: {
     changepos() {
       this.position = 'left'
     }
   }
 }
</script>

<template>
  <nav-bar>
    <template v-slot:left>
       返回
    </template>
    <template v-slot:center>
       标题
    </template>
    <template v-slot:right>
       更多
    </template>
  </nav-bar>
  <nav-bar>
    <template v-slot:[position]>
       <a href="#">注册</a>
    </template>
    <button @click="changepos">左</button>
    <button @click="position = 'center'">中</button>
    <button @click="position = 'right'">右</button>
  </nav-bar>
</template>

<style scoped>

</style>