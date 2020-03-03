import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/idCreater';

Vue.use(Vuex);//Vue.prototype.$store=store
const localStorageKeyName = 'recordList';
const localStorageKeyTag = 'tagList';
const init: Tag[] = [{'id': '0', 'name': '衣'}, {'id': '1', 'name': '食'}, {'id': '2', 'name': '住'}, {
  'id': '3',
  'name': '行'
}];
type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}
const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
    currentTag: undefined
  } as RootState,
  mutations: {
    setCurrentTag(state, id) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0];
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    },
    createRecord(state, record: RecordItem) {
      const record2 = clone(record);
      //这里要讲原对象深拷贝一下然后还原成相同的却不同地址的对象，防止引用同一个地址
      record2.createdDate = new Date();
      state.recordList && state.recordList.push(record2);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem(localStorageKeyName, JSON.stringify(state.recordList));
    },
    fetchTags(state) {
      const myTags: string = JSON.stringify(init);
      state.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyTag) || myTags);
    },
    saveTags(state) {
      window.localStorage.setItem(localStorageKeyTag, JSON.stringify(state.tagList));
    },
    createTag(state, name: string) {
      const nameList = state.tagList.map(t => t.name);
      if (nameList.indexOf(name) >= 0) {
        window.alert('标签名重复');
      } else {
        const id: string = createId().toString();
        const tag = {id: id, name: name};
        state.tagList.push(tag);
        store.commit('saveTags');
      }
    },
    removeTag(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        window.alert('标签不存在');
      } else {
        state.tagList.splice(index, 1);
        store.commit('saveTags');
      }
    },
    updateTag(state, payload: { id: string; name: string }) {
      const {id, name} = payload;
      const idList = state.tagList.map(t => t.id);
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(t => t.name);
        if (names.indexOf(name) >= 0) {
          window.alert('标签已存在');
        } else {
          const tag = state.tagList.filter(t => t.id === id)[0];
          tag.id = id;
          tag.name = name;
          store.commit('saveTags');
        }
      } else {
        return;
      }
    },
  },
  actions: {},
  modules: {}
});
export default store;