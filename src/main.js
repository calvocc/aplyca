import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUserFriends, faPlus, faCheckCircle, faCircle, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store'

library.add(faUserSecret, faCheckCircle, faUserFriends, faPlus, faCircle, faTimes, faBars)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
