<template>
  <div>
    <!-- 通过动态组件来显示不同的子组件 -->
    <component :is="currentComponent"></component>
    <button @click="toggleComponent">Toggle Component</button>
  </div>
</template>

<script>
import FirstComponent from './FirstComponent.vue';
import SecondComponent from './SecondComponent.vue';

export default {
  data() {
    return {
      currentComponent: 'FirstComponent' // 默认显示的组件
    };
  },
  components: {
    FirstComponent,
    SecondComponent
  },
  methods: {
    toggleComponent() {
      // 点击按钮切换组件
      this.currentComponent = this.currentComponent === 'FirstComponent' ? 'SecondComponent' : 'FirstComponent';
    }
  }
}
</script>
