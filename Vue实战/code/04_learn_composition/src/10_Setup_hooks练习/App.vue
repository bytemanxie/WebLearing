<template>
  <about></about>
  <about></about>
  <home></home>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
</template>

<script>
import About from './views/AboutView.vue'
import Home from './views/HomeView.vue'

export default {

  components: {
    About,
    Home
  },
  setup() {

    return {
    }
  }
}
</script>

<style scoped>
.content {
  width: 3000px;
  height: 100px;
  background-color: orange;
}
</style>

