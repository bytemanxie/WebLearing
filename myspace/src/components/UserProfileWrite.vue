<template>
    <div class="card mt-2">
        <div class="card-body">
            <label for="edit-post" class="form-label">编辑帖子</label>
            <textarea v-model="content" class="form-control" id="edit-post" rows="3"></textarea>
            <button @click="post_a_post" type="button" class="btn btn-primary mt-2">发帖</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineEmits } from 'vue'
import axiosInstance from '@/services/axios.js'
import { useStore } from "vuex";

// 定义响应式变量
let content = ref('')
const store = useStore()
// 直接定义 emit
const emit = defineEmits(['post-a-post'])

// 发布帖子的函数
console.log(store.state.user.access)
const post_a_post = () => {
  axiosInstance.post('/myspace/post/', {
    content: content.value
  }, {
    headers: {
      'Authorization': "Bearer " + store.state.user.access,
    }
  }).then(response => {
    console.log(response)
    emit('post_a_post', content.value)
    content.value = ''
  }).catch(error => {
    console.log(error)
  })
}

</script>

<style scoped>

</style>