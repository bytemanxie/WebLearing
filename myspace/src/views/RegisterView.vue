<template>
  <content-base>
    <div class="row justify-content-center">
      <div class="col-3">
        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">用户名</label>
            <input v-model="username" class="form-control" id="exampleInputEmail1">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">密码</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label">确认密码</label>
            <input v-model="passwd_confirm" type="password" class="form-control" id="exampleInputPassword2">
          </div>
          <div class="error-message">{{error_message}} </div>
          <button type="submit" class="btn btn-primary">登录</button>
        </form>
      </div>
    </div>


  </content-base>
</template>


<script setup>
import ContentBase from '../components/ContentBase.vue'
import {ref} from 'vue'
// import {useStore} from 'vuex'
// import router from '@/router/index.js'
import axiosInstance from "@/services/axios";

// const store = useStore()


let username = ref('')
let password = ref('')
let error_message = ref('')
let passwd_confirm = ref('')

const register = () => {
  // 注意这里直接使用变量值，不要用引号包围
  axiosInstance.post('/myspace/user/', {
    username: username.value, // 使用变量的值而不是字符串
    password: password.value, // 使用变量的值而不是字符串
    password_confirm: passwd_confirm.value, // 使用变量的值而不是字符串
  }).then(response => {
    console.log(response.data) // 成功响应后的操作
  }).catch(error => {
    console.log(error) // 错误处理
  })

  // 输出变量的当前值，用于调试
  console.log(username.value, password.value, passwd_confirm.value)
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