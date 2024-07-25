<template>
  <content-base>
    <div @click="open_user_profile(user.id)" class="card mb-2" v-for="user in users" :key="user.id">
      <div class="card-body ">
        <div class="row">
          <div class="col-1">
            <img class="img-fluid" :src="user.photo" alt="">
          </div>
          <div class="col-11">
            <div>{{user.username}} </div>
            <div>{{user.followerCount}}</div>
          </div>
        </div>
        
      </div>
    </div>
  </content-base>
</template>


<script setup>
import ContentBase from '../components/ContentBase.vue'
import {ref} from 'vue'
import axiosInstance from '@/services/axios.js'
import router from '@/router/index'
import {useStore} from "vuex";


const store = useStore()
let users = ref([])

axiosInstance.get('/myspace/userlist/').then(response => {
  users.value = response.data
  // console.log(users.value)
}).catch(error => {
  console.log(error)
})

const open_user_profile = userId => {
  if(store.state.user.is_login){
    router.push({
      name:'userprofile',
      params:{
        userId,
      }
    })
  }else{
    router.push({
      name:'login',
    })
  }
}

</script>

<style scoped>
  img{
    border-radius: 50%;
  }

  .card:hover{
    /*鼠标悬浮效果*/
    transform: scale(1.02);
  }
</style>