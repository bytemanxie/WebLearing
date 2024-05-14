<script setup>
  import {useRouter} from "vue-router";
  import {ref} from "vue";

  // import {getCityAll} from '@/services'
  import useCityStore from "@/stores/modules/city.js";
  import {storeToRefs} from "pinia";

  const router = useRouter()
  const cancelClick = () => {
    router.back()
  }
  const searchVal = ref("")
  const tabActive = ref(0)

  // const allcity = ref({})
  // getCityAll().then(res => {
  //   console.log(res)
  //   allcity.value = res.data
  // })

  const cityStore = useCityStore()
  cityStore.fetchAllCitiesData()
  const { allCities } = storeToRefs(cityStore)
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
      <template v-for="(value, key, index) in allCities" :key="key">
        <van-tab :title="value.title"></van-tab>
      </template>
    </van-tabs>

  </div>
</template>

<style scoped>
  .city{
    --van-tabs-line-height:35px;
  }
</style>