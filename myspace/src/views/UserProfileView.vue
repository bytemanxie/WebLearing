<template>
  <content-base>
    <div class="row">
      <div class="row">
        <div class="col-3">
          <user-profile-info @follow="follow" @unfollow="unfollow" :user="user"  />
          <user-profile-write @post_a_post="post_a_post"/>
        </div>
        <div class="col-9">
          <user-profile-posts :posts="post"/>
        </div>
      </div>
    </div>  
  </content-base>
</template>

<script>
import ContentBase from '../components/ContentBase.vue'
import UserProfileInfo from '../components/UserProfileInfo.vue'
import UserProfilePosts from '../components/UserProfilePosts.vue'
import UserProfileWrite from '../components/UserProfileWrite.vue'
import {reactive} from 'vue'

export default {
  name: 'UserProfile',
  components:{
    ContentBase,
    UserProfileInfo,
    UserProfilePosts,
    UserProfileWrite,
  },
  setup(){
    const user = reactive({
      name:'byteman',
      first_name:'zhijie',
      last_name:'xie',
      fans:0,
      is_followed:false,
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

    const post_a_post = (content)=>{
      console.log(content)
      ++post.count
      post.posts.unshift({
        id:post.count,
        userid:1,
        content:content,
      }) 
    }

    return{
      user,
      follow,
      unfollow,
      post,
      post_a_post,
    }
  },
  
}
</script>