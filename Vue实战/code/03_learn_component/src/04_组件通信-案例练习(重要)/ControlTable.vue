<script>
  export default {
    data(){

    },
    props: {
      titles: {
        type: Array,
        default: () => []
      }
    },
  }
</script>

<template>
  <div class="table-control">
    <template v-for="item in titles" :key="item">
      <div class="table-control-item">
        <span>{{item}}</span>
      </div>
    </template>
  </div>
</template>

<style scoped>
  .table-control{
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
  }
  .table-control-item{
    flex: 1;
  }
</style>