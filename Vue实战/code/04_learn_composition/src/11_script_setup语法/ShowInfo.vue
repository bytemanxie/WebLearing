<template>
  <div>ShowInfo: {{ name }}-{{ age }}</div>
  <button @click="showInfoBtnClick">showInfoButton</button>
  <button @click="showWrongBtnClick">showWrongButton</button>
</template>

<script setup>
  // 定义props
  defineProps({
    name: {
      type: String,
      default: "默认值"
    },
    age: {
      type: Number,
      default: 0
    }
  })

  // 绑定函数, 并且发出事件
  const emits = defineEmits(["infoBtnClick", "wrongBtnClick"])
  function showInfoBtnClick() {
    emits("infoBtnClick", "showInfo内部发生了点击")
  }

  function showWrongBtnClick() {
    emits("wrongBtnClick", "showInfo内部发生了错误点击")
  }

  // 定义foo的函数
  function foo() {
    console.log("foo function")
  }
  defineExpose({
    foo
  })

</script>

<style scoped>
</style>

