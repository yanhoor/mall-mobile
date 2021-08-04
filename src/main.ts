import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Lazyload } from 'vant'
import urls from './http/urls'
import '@/assets/style/common.less'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Lazyload, {
  // loading: require('@/assets/img/loading.gif'),
  preLoad: 1.5,
  // error: require('@/assets/img/loading.gif'),
  attempt: 2,
  filter: {
    prefixUrl(listener: any, options: any) {
      listener.src = urls.picUrl + listener.src;
    },
  }
})
app.mount('#app')
