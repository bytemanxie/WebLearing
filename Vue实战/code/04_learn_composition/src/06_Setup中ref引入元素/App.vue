<template>
  <!-- 1.获取元素 -->
  <h2 ref="titleRef">我是标题</h2>
  <h3 ref="h3Ref">byteman</h3>
  <button ref="btnRef">按钮</button>


  <!-- 2.获取组件实例 -->
  <show-info ref="showInfoRef"></show-info>

  <button @click="getElements">获取元素</button>
</template>

<script>
import { ref, onMounted } from 'vue'
import ShowInfo from './ShowInfo.vue'

export default {
  components: {
    ShowInfo
  },
  setup() {
    const titleRef = ref()
    const h3Ref = ref(null)
    const btnRef = ref()

    const showInfoRef = ref()


    // mounted的生命周期函数
    onMounted(() => {
      console.log(titleRef.value)
      console.log(btnRef.value)
      console.log(showInfoRef.value)
      console.log(h3Ref.value)
      showInfoRef.value.showInfoFoo()
    })

    function getElements() {
      // console.log(titleRef.value)
      console.log(btnRef.value, h3Ref.value)
    }

    return {
      titleRef,
      btnRef,
      showInfoRef,
      getElements,
      h3Ref
    }
  }
}
</script>

<style scoped>
</style>

