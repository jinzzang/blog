import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import axios from "axios";

axios.defaults.baseURL = "http://localhost:20010"; //자기주소 빌드할떄 주석처리하기
const app = createApp(App);
app.config.globalProperties.axios = axios;

app.use(router).mount('#app')
