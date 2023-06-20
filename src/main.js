import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
// eslint-disable-next-line no-unused-vars
import router from './router/index.js'

createApp(App).use(router).mount('#app')
