<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const userId = computed(() => route.params.userId);
</script>

<template>
  <div>
    <h1>User Profile</h1>
    <p>User ID: {{ userId }}</p>
  </div>
</template>


<style scoped>

</style>