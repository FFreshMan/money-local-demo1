import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Layout from '@/components/Layout.vue';
import Icons from '@/components/Icons.vue';


Vue.config.productionTip = false;
Vue.component('Layout', Layout);
Vue.component('Icons', Icons);
//注册全局组件
new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app');
