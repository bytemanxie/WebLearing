import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import 'normalize-css'
import router from "@/router/index.js";
import pinia from "@/stores/index.js";
import "./assets/css/index.css"

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
