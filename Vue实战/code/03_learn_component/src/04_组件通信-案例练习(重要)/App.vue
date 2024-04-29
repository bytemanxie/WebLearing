<script>
  import ControlTable from './ControlTable.vue'
  export default {
    components: {
      ControlTable
    },
    data(){
      return{
        cur: -1,
        pagecontend: ['衣服页面', '鞋子页面', '裤子页面']
      }
    },
    methods: {
      tablecontent(index){
        // console.log(index)
        this.cur = index
      }
    }
  }
</script>

<template>
  <control-table :titles="['衣服', '鞋子', '裤子']" @change="tablecontent"></control-table>
<!--  <control-table :titles="['流行', '最新', '优选']"></control-table>-->
  <h2>{{pagecontend[this.cur]}}</h2>
</template>

<style scoped>

</style>