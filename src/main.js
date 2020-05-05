import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import { BootstrapVueIcons } from 'bootstrap-vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
