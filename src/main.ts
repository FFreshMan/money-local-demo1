import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Layout from '@/components/Layout.vue';
import Icons from '@/components/Icons.vue';
import {tagListModel} from '@/models/tagListModel';
import {recordListModel} from '@/models/recordListModel';

Vue.config.productionTip = false;
Vue.component('Layout', Layout);
Vue.component('Icons', Icons);
//注册全局组件
window.tagList = tagListModel.fetch();
window.createTag = (name) => {
  const message = tagListModel.create(name);
  if (message === 'duplicated') {
    alert('标签名已存在');
  } else if (message === 'name void') {
    alert('标签名不能为空');
  } else {
    alert('标签创建成功');
  }
};
window.remove = (id) => {
  return tagListModel.remove(id);
};
window.updateTag = (id: string, name: string) => {
  return tagListModel.update(id, name);
};
window.findTag = (id: string) => {
  const tags = window.tagList;
  return tags.filter(t => t.id === id)[0];
};
window.recordList = recordListModel.fetch();
window.createRecord=(record: RecordItem)=>{
  return recordListModel.create(record);
};
window.saveRecord=()=>{
  return recordListModel.save();
};
new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app');
