import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './routes'
import { setup as firebaseApp } from './firebase.config.js'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';

const app = createApp(App);
const pinia = createPinia();
firebaseApp();
app.use(router);
app.use(pinia);
app.use(Vue3Toastify, {limit: 2})
app.mount('#app');
