<template>
<div class="card">
    <div class="card-body">
        <div class="row">
        <div class="col-3">
            <img class="img-fluid" :src="user.photo" alt="">
        </div>
        <div class="col-9">
            <div>{{user.name}} </div>
            <div>粉丝数：{{user.fans}} </div>
            <button @click="follow" v-if="!user.is_followed" type="button" class="btn btn-secondary bt-sm">+ 关注</button>
            <button @click="unfollow" v-if="user.is_followed" type="button" class="btn btn-secondary bt-sm">取消关注</button>
        </div>
    </div>    
    </div>
</div>
    
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  user: {
    type: Object,
    required: true,
  },
})

// 定义事件发射器
const emit = defineEmits(['follow', 'unfollow'])

// 跟随函数
const follow = () => {
  emit('follow')
}

// 取消跟随函数
const unfollow = () => {
  emit('unfollow')
}
</script>

<style scoped>
    img{
        border-radius: 50%;
    }
</style>