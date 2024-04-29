<script>
  export default {
    data(){
      return {
        cur: -1
      }
    },
    props: {
      titles: {
        type: Array,
        default: () => []
      }
    },
    emits: ['change'],
    methods: {
      itemClick(index){
        this.cur = index
        this.$emit('change', index)
      }
    },
  }
</script>

<template>
  <div class="table-control">
    <template v-for="(item, index) in titles" :key="item">
      <div class="table-control-item" @click="itemClick(index)" :class="{active: index === this.cur}">
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
  .table-control-item.active{
    color: red;
    font-weight: bold;
  }
  .table-control-item.active span {
    border-bottom: 3px solid red;
    padding: 8px;
  }

</style>