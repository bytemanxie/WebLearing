<script setup>
  // import tabbarData from '@/assets/data/tabbar.js'
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
    <template v-for="(item, index) in tabbar" :key="index">
      <div class="tab-bar-item"
           :class="{active: curindex === index}"
            @click="itemClick(index, item)"
      >
        <img v-if="curindex === index" :src="getAssetURL(item.imageActive)" alt="">
        <img v-else :src="getAssetURL(item.image)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
  .tab-bar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    flex: 1;
    border-top: 1px solid #ccc;
    height: 50px;

    .tab-bar-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      &.active {
        color: var(--primary-color);
      }
      img {
        width: 36px;
      }
      .text {
        font-size: 12px;
        margin-top: 2px;
      }
    }
  }
</style>