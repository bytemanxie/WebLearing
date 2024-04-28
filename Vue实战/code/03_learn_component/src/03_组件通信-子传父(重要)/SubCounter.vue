<script>
  export default {
    methods: {
      sub(num) {
        this.$emit('sub', num)
      }
    }
  }
</script>

<template>
  <div class="sub">
    <button @click="sub(1)">-1</button>
    <button @click="sub(5)">-5</button>
    <button @click="sub(10)">-10</button>
  </div>
</template>

<style scoped>

</style>