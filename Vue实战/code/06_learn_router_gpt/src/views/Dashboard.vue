<script setup>

</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <nav>
      <router-link to="/dashboard/profile">Profile</router-link> |
      <router-link to="/dashboard/settings">Settings</router-link>
    </nav>
    <router-view></router-view> <!-- 子路由渲染的位置 -->
  </div>
</template>

<style scoped>

</style>