<template>
  <content-base>
    <div class="row">
      <div class="row">
        <div class="col-3">
          <user-profile-info @follow="follow" @unfollow="unfollow" :user="user"  />
          <user-profile-write v-if="is_me" @post_a_post="post_a_post" />
        </div>
        <div class="col-9">
          <user-profile-posts :posts="post" @delete_a_post="delete_a_post"/>
        </div>
      </div>
    </div>  
  </content-base>
</template>

<script setup>
import ContentBase from '../components/ContentBase.vue'
import UserProfileInfo from '../components/UserProfileInfo.vue'
import UserProfilePosts from '../components/UserProfilePosts.vue'
import UserProfileWrite from '../components/UserProfileWrite.vue'
import axiosInstance from '@/services/axios.js'
import {reactive} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from "vuex";
import {computed, onMounted} from 'vue'

const store = useStore()
const router = useRoute()
// console.log(router.params.userId)
const userId = router.params.userId

const user = reactive({
  name:'byteman',
  first_name:'zhijie',
  last_name:'xie',
  username:'',
  fans:0,
  is_followed:false,
  id:1,
  follower:0,
})

// console.log(store.state.user.access)
axiosInstance.get('/myspace/getinfo/', {
  params:{
    user_id: userId,
  },
  headers:{
    'Authorization': "Bearer " + store.state.user.access
  }
}).then(response => {
  const data = response.data
  user.name = data.username
  user.id = data.id
  user.photo = data.photo
  user.follower = data.followerCount
  user.is_followed = data.is_followed
})

axiosInstance.get('/myspace/post/', {
  params:{
    user_id: userId,
  },
  headers:{
    'Authorization': "Bearer " + store.state.user.access
  }
}).then(response => {
  console.log(response.data)
  const data = response.data
  post.posts = data
  post.count = data.length
}).catch(error => {
  console.log(error)
})

const post = reactive({
  count:3,
  posts:[
    {
      id:1,
      userid:1,
      content:'vue学习',
    },
    {
      id:2,
      userid:1,
      content:'react学习',
    },
    {
      id:3,
      userid:1,
      content:'小程序学习',
    },
  ]
})

const follow = ()=>{
  if(user.is_followed) return
  user.is_followed = true
  ++user.fans
}

const unfollow = ()=>{
  if(!user.is_followed) return
  user.is_followed = false
  --user.fans
}

const post_a_post = (content)=> {
  console.log(content)
  post.count++
  post.posts.unshift({
    id: post.count,
    userid: 1,
    content: content,
  })
}

const delete_a_post = (id) => {
  post.posts = post.posts.filter(post => post.id !== id)
  post.count = post.posts.length
}

const is_me = computed(() => {
  return store.state.user.id === parseInt(userId)
})

onMounted(() => {
  console.log(store.state.user.id, userId)
  console.log(is_me.value)
})

</script>