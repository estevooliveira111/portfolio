import VueClipboard from 'vue-clipboard2'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).use(VueClipboard).mount('#app')
