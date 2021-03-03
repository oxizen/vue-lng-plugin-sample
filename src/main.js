import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import lng from './plugins/lng';


Vue.config.productionTip = false
Vue.use(lng);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
