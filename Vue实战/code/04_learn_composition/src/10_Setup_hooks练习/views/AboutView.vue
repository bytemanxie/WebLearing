<template>
  <h2>About计数: {{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <button @click="add5">+5</button>

  <button @click="popularClick">首页-流行</button>
  <button @click="hotClick">首页-热门</button>
  <button @click="songClick">首页-歌单</button>
</template>

<script>
import useCounter from '../hooks/useCounter'
import useTitle from '../hooks/useTitle'

export default {
  setup() {
    // 2.修改标题
    const { title } = useTitle("首页")

    // 3.监听按钮的点击
    function popularClick() {
      title.value = "首页-流行"
    }
    function hotClick() {
      title.value = "首页-热门"
    }
    function songClick() {
      title.value = "首页-歌单"
    }
    return {
      ...useCounter(),
      popularClick,
      hotClick,
      songClick,

    }
  }
}
</script>

<style scoped>
</style>

