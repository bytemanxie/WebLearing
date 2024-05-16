<script setup>
  import {useRouter} from "vue-router";
  import {ref} from "vue";
  import {computed} from "vue";

  // import {getCityAll} from '@/services'
  import useCityStore from "@/stores/modules/city.js";
  import {storeToRefs} from "pinia";
  import CityGroup from './cpns/city-group.vue'

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
  // console.log(allCities)
  const currentGroup = computed(() => allCities.value[tabActive.value])
</script>

<template>
  <div class="city top-page">
    <div class="top">
      <van-search
          v-model="searchVal"
          shape="round"
          placeholder="城市/区域/位置"
          show-action
          @click="cancelClick"
      />
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- <city-group :group-data="currentGroup" />
      <city-group :group-data="currentGroup" /> -->
      <template v-for="(value, key, index) in allCities">
        <!-- <h2 v-show="tabActive === key">{{ value.title }}</h2> -->
        <city-group v-show="tabActive === key" :group-data="value" />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .city{
    //--van-tabs-line-height:35px;

    //.top{
    //  position: fixed;
    //  top: 0;
    //  left: 0;
    //  right: 0;
    //}
    //.content{
    //  margin-top: 98px;
    //}
    .top {
      position: relative;
      z-index: 9;
    }
    .content{
      height: calc(100vh - 98px);
      overflow-y: auto;
    }
  }

</style>