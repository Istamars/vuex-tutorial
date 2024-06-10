import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)

/** 
  register store ke komponen paling atas (parent dari semua parent)
  agar komponen children bisa mengakses store nya
*/
app.use(store)

app.mount('#app')
