<script>
  import ControlTable from './ControlTable.vue'
  export default {
    components: {
      ControlTable
    }
  }
</script>

<template>
  <control-table :titles="['衣服', '鞋子', '裤子']"></control-table>
<!--  <control-table :titles="['流行', '最新', '优选']"></control-table>-->
</template>

<style scoped>

</style>