import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'vant/lib/index.css'
import vant from 'vant'

import { Toast } from 'vant'
import "./utils/rem"
import './api/mock'
import Banner from "./components/Banner/index.vue"
const app = createApp(App)
app.component('banner', Banner).use(router).use(store).use(vant).mount('#app')
app.config.globalProperties = {
    "$toast": Toast,
}
