<script setup>
  import tabbar from "@/assets/data/tabbar.js";
  import {getAssetURL} from "@/utils/load_assets.js";
  import {ref} from "vue";
  const curindex = ref(0);
  import {useRouter} from "vue-router";
  const router = useRouter();
  const itemClick = (index, item) => {
    curindex.value = index;
    router.push(item.path);
  }
</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="curindex" active-color='#ff9854'>
      <template v-for="(item, index) in tabbar" :key="index">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="curindex === index" :src="getAssetURL(item.imageActive)" alt="">
            <img v-else :src="getAssetURL(item.image)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>

  </div>


</template>

<style lang="less" scoped>
.tab-bar {
  :deep(.van-tabbar-item__icon){
    font-size: 50px;
  }
  image{
    height: 28px;
  }
}
</style>