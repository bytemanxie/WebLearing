<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function navigateHome() {
    router.push('/dashboard');
  }
</script>

<template>
  <div id="app">
    <h1>Vue Router Example</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/info">Info</router-link> |
      <router-link to="/dashboard">Dashboard</router-link>
    </nav>
    <div>
      <button @click="navigateHome">Go to Profile</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
nav a {
  padding: 10px;
  text-decoration: none;
}
</style>
