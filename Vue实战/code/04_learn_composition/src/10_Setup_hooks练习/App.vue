<template>
  <about></about>
  <about></about>

</template>

<script>
import About from './views/AboutView.vue'

export default {

  components: {
    About
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

