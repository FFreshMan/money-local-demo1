import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Layout from '@/components/Layout.vue';

Vue.config.productionTip = false;
Vue.component('Layout', Layout);
//注册全局组件
new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app');
