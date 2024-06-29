<template>
<div class="card">
    <div class="card-body">
        <div class="row">
        <div class="col-3">
            <img class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/220177_lg_5ce662610f.jpg" alt="">
        </div>
        <div class="col-9">
            <div>{{fullName}} </div>
            <div>粉丝数：{{user.fans}} </div>
            <button @click="follow" v-if="!user.is_followed" type="button" class="btn btn-secondary bt-sm">+ 关注</button>
            <button @click="unfollow" v-if="user.is_followed" type="button" class="btn btn-secondary bt-sm">取消关注</button>
        </div>
    </div>    
    </div>
</div>
    
</template>

<script>
import {computed} from 'vue'
export default {
    name:'UserProfileinfo',
    props:{
        user:{
            type:Object,
            required:true,
        },
    },
    setup(props, context){
        let fullName = computed(() => `${props.user.first_name} ${props.user.last_name}`)

        const follow = () => {
            context.emit('follow')
        }

        const unfollow = () => {
            context.emit('unfollow')
        }

        return({
            fullName,
            follow,
            unfollow
        })
    }
}
</script>

<style scoped>
    img{
        border-radius: 50%;
    }
</style>