import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8081";
const app = createApp(App);
app.config.globalProperties.axios = axios;

app.use(router).mount('#app')
