import { createApp } from 'vue';

import App from './App.vue';
import store from './store';
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import 'vue3-carousel/dist/carousel.css';

import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";


const app = createApp(App);
app.use(store).use(router).mount('#app')
