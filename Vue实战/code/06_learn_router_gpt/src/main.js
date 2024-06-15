import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 确保路由文件正确导入

const app = createApp(App);
app.use(router);
app.mount('#app');
