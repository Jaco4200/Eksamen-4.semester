import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import App from './App.vue'
import { markRaw } from 'vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core';
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import { dom } from '@fortawesome/fontawesome-svg-core';
import icons from './assets/js/fontawesome';
import axios from 'axios';
import VueAxios from 'vue-axios';
import PrimeVue from 'primevue/config'
import { useMainStore } from './stores/main';
import CustomInput from './Components/CustomInput.vue'
import ButtonComp from './Components/ButtonComp.vue'
import { ref } from 'vue'
library.add(icons);
dom.watch();

const app = createApp(App)
const pinia = createPinia();
pinia.use(({ store }) => {
    store.$router = markRaw(router);
  });
app.use(pinia);
const store = useMainStore();
app.component('CustomInput', CustomInput)
app.component('ButtonComp', ButtonComp)
app.use(router);
app.use(PrimeVue);

app.config.globalProperties.aktivitetShow = ref("");

app.use(VueAxios, axios);
axios.defaults.baseURL = 'http://localhost:6969'
app.mount('#app');
axios.interceptors.request.use(function (config) {
  if (!config.url.includes('login')) {
    // Set bearer token on all requests
    config.headers['Authorization'] = 'Bearer ' + store.token;
  }
  return config;
});
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status == 401) {
      // if Unauthorized === no token or no valid token in request headers. go to login screen
      store.logout();
    } else return Promise.reject(error);
  }
);
//router


