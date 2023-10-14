import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// 导入持久化的插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia() // 创建Pinia实例
const app = createApp(App) // 创建根实例

// createApp(App).mount('#app')
// createApp(App).use(pinia).mount('#app')
// app.use(pinia).mount('#app')
app.use(pinia.use(piniaPluginPersistedstate)) // pinia插件的安装配置
app.mount('#app') // 视图的挂载
