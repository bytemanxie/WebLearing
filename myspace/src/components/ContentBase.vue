<template>
  <div class="home">
    <div class="container mt-2">
      <div class="card">
          <div class="card-body">
            <slot></slot>
          </div>
        </div>
  </div>
  </div>
</template>


<script>
export default {
  name: 'ContentBase',
  components:{
     
  }
}
</script>

<style scoped>

</style>