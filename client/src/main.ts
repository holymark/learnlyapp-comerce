import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { key, store } from './stores/vuex'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(store, key)
app.mount('#app')
