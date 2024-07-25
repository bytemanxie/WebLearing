<template>
    <div class="card">
        <div class="card-body ">
            <div v-for="post in posts.posts" :key="post.id">
                <div class="card single-post">
                    <div class="card-body content">
                      {{post.content}}
                      <button type="button" class="btn btn-danger" @click="delete_a_post(post.id)">删除</button>
                    </div>
                </div>
            </div> 
        </div>
    </div>    
</template>

<script setup>
import { defineProps } from 'vue'
import { defineEmits } from 'vue'
import axiosInstance from "@/services/axios";
import {useStore} from 'vuex'

const store = useStore()
// 使用 defineProps 来定义 props
defineProps({
  posts: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['delete_a_post'])
const delete_a_post = (id) => {
  axiosInstance.delete('/myspace/post/', {
    data: {
      post_id: id
    },
    headers: {
      'Authorization': "Bearer " + store.state.user.access
    }
  }).then(response => {
        console.log(response)
        emit('delete_a_post', id) // 发射事件，推荐使用 kebab-case
      })
      .catch(error => {
        console.log(error)
      })
}

</script>

<style scoped>
.single-post{
    margin-bottom: 20px;
}

button{
  float: right;
}
</style>