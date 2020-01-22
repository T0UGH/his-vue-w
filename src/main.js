import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import VeeValidate from "vee-validate"
import Vuex from 'vuex'
import store from './store'
import moment from 'moment'

Vue.prototype.$moment = moment;

Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(Vuex);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
});
