<script setup>
  import  {useRoute} from "vue-router";
  const route = useRoute()
  console.log(route.params.id)
</script>

<template>
  <div class="detail top-page">
    <h2>{{ $route.params.id }}</h2>
  </div>
</template>

<style scoped>

</style>