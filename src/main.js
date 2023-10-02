import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './routes'

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
watch(pinia.state, (state) => { localStorage.setItem("cartStore", JSON.stringify(state.cartStore)) }, { deep: true })
app.mount('#app');
