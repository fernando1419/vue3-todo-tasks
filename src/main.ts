import { createApp } from 'vue';
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import App from './App.vue';
import './style.css';

const app = createApp(App);
app.use(Vue3Toastify, {
   autoClose: 3000,
   position: 'top-right',
   theme: 'light', // or 'dark'
},
).mount('#app');
