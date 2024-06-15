import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

createApp(App).mount('#app')
axios.post("http://123.207.32.32:1888/02_param/postjson", {
    data: {
        name: "coderwhy",
        password: 123456
    }
}).then(res => {
    console.log("res", res.data)
})

// // 2.发送get请求
// axios.get(`http://123.207.32.32:9001/lyric?id=500665346`).then(res => {
//   console.log(res)
//   console.log("res:", res.data.lrc)
// })
// axios.get("http://123.207.32.32:9001/lyric", {
//   params: {
//     id: 500665346
//   }
// }).then(res => {
//   console.log("res:", res.data.lrc)
// })