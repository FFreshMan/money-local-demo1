import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  create(record: RecordItem) {
    const record2 = clone(record);
    //这里要讲原对象深拷贝一下然后还原成相同的却不同地址的对象，防止引用同一个地址
    record2.createdDate = new Date();
    this.data.push(record2);
  },
  fetch() {
    const data1 = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data = data1;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};
export {recordListModel};