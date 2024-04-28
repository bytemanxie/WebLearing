<script>
  export default {
    methods: {
      add(num) {
        this.$emit('add', num)
      }
    }
  }
</script>

<template>
  <div class="add">
    <button @click="add(1)">+1</button>
    <button @click="add(5)">+5</button>
    <button @click="add(10)">+10</button>
  </div>
</template>

<style scoped>

</style>