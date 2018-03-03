// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'
import VInputmask from 'v-inputmask'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import '@/assets/css/main.sass'

Vue.use(VueAnalytics, {
	id: 'UA-112511961-5',
	router
})
Vue.use(VeeValidate)
Vue.use(VInputmask)
Vue.use(VueAxios, axios)
Vue.component('q-icon', Icon)
Vue.config.productionTip = false

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
