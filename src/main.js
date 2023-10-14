import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './routes'
import { setup as firebaseApp } from './firebase.config.js'

const app = createApp(App);
const pinia = createPinia();
firebaseApp();
app.use(router);
app.use(pinia);
// watch(
//   pinia.state, (state) => { 
//     localStorage.setItem("userStore", JSON.stringify(state.userStore)),
//     localStorage.setItem("cartStore", JSON.stringify(state.cartStore))
//   }, { deep: true }
// )
app.mount('#app');
