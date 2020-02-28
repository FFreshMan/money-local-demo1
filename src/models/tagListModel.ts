import createId from '@/lib/idCreater';

const localStorageKeyName = 'tagList';
const tagListModel: TagListModel = {
  init: [{'id': '衣', 'name': '衣'}, {'id': '食', 'name': '食'}, {'id': '住', 'name': '住'}, {'id': '行', 'name': '行'}],
  data: [],
  // data: ['衣', '食', '住', '行'],
  // [{"id":"衣","name":"衣"},{"id":"食","name"":"食"},{"id":"住","name":"住"},{"id":"行","name":"行"}]
  fetch() {
    const init = JSON.stringify(this.init);
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || init);
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
  create(name: string) {
    const nameList = this.data.map(t => t.name);
    if (name) {
      if (nameList.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const id: string = createId().toString();
        const tag = {id: id, name: name};
        this.data.push(tag);
        this.save();
        return 'success';
      }
    } else {
      return 'name void';
    }
  },
  update(id, name) {
    const idList = this.data.map(t => t.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map(t => t.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.data.filter(t => t.id === id)[0];
        tag.id = id;
        tag.name = name;
        this.save();
        return 'success';
      }
    } else {
      return 'id not found';
    }
  },
  removeTag(id: string) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    if (index === -1) {
      return 'id not found';
    } else {
      this.data.splice(index, 1);
      this.save();
      return 'success';
    }

  }
};
export {tagListModel};

