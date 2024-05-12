<script setup>
  import {useRouter} from "vue-router";
  import {ref} from "vue";

  import {getCityAll} from '@/services'

  const router = useRouter()
  const cancelClick = () => {
    router.back()
  }
  const searchVal = ref("")
  const tabActive = ref(0)

  getCityAll().then(res => {
    console.log(res)
  })
</script>

<template>
  <div class="city top-page">
    <van-search
        v-model="searchVal"
        shape="round"
        placeholder="城市/区域/位置"
        show-action
        @click="cancelClick"
    />
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <van-tab title="国内·港澳台">内容 1</van-tab>
      <van-tab title="海外">内容 2</van-tab>
    </van-tabs>

  </div>
</template>

<style scoped>
  .city{
    --van-tabs-line-height:35px;
  }
</style>