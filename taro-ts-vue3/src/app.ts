import { createApp } from 'vue'
import './app.scss'
import "vant/lib/index.css";
import vant from 'vant'
import { Toast } from 'vant'
import Banner from './components/Banner/index.vue'
import './api/mock'
import Taro from '@tarojs/taro'
const App = createApp({
  onShow(options) { },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(vant).component('banner', Banner)
App.config.globalProperties = {
  "$toast": Toast,
  "$taro": Taro
}
export default App
