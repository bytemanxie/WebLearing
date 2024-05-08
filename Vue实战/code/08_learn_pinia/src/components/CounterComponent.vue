<template>
  <div>
    <h1>{{ counter.count }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <p>Double Count: {{ counter.doubleCount }}</p>
  </div>
</template>

<script setup>
  import useCounterStore from '../stores/counterStore'

  const counter = useCounterStore()



  const increment = counter.increment
  const decrement = counter.decrement
</script>

