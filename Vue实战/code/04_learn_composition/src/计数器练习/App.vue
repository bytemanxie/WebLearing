<script>
  import CounterView from './CounterView.vue';
  export default {
    components: {
      CounterView
    },
    data() {
      return {
        t1:'正文',
        t2:'about'
      }
    }
  }

</script>

<template>
  <hr>
  <counter-view :messages="t1"></counter-view>
  <hr>
  <counter-view :messages="t2"></counter-view>
</template>

<style scoped>

</style>