import { createApp } from 'vue'
import App from './App.vue'
import store from './store' // 确保路径正确

const app = createApp(App)
app.use(store)
app.mount('#app')
