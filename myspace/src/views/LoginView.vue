<template>
  <content-base>
    <div class="row justify-content-center">
      <div class="col-3">
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">用户名</label>
            <input v-model="username" class="form-control" id="exampleInputEmail1">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">密码</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="error-message">{{error_message}} </div>
          <button type="submit" class="btn btn-primary">登录</button>
        </form>
      </div> 
    </div>
      
    
  </content-base>
</template>


<script>
import ContentBase from '../components/ContentBase.vue'
import {ref} from 'vue'
import {useStore} from 'vuex'
import router from '@/router/index.js'

export default {
  name: 'LoginView',
  components:{
     ContentBase
  },
  setup(){
    const store = useStore()


    let username = ref('')
    let password = ref('')
    let error_message = ref('')

    const login = () => {
      store.dispatch('login', {
        username: username.value,
        password: password.value,
        success(){
          // console.log('登录成功')
          router.push({name: 'userlist'})
        },
        error(){
          error_message.value = '用户名或密码错误'
        }
      })
    }

    return {
      username,
      password,
      error_message,
      login,
    }
  }
}
</script>

<style scoped>
  .error-message{
    color: red;
  }
  button{
    width: 100%;
  }
</style>