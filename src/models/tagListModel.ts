const localStorageKeyName = 'tagList';

type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: Tag) => boolean;
  save: () => void;
  update: (id: string, name: string) => 'success' | 'id not found' | 'duplicated';
  remove: (id: string) => 'success' | 'id not found';
}
const tagListModel: TagListModel = {
  data: [],
  // data: ['衣', '食', '住', '行'],
  // [{id:"衣",name:"衣"},{id:"食",name:"食"},{id:"住",name:"住"},{id:"行",name:"行"}]
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
  create(name) {
    if (this.data.indexOf(name) >= 0) {
      throw new Error('duplicated');
    } else {
      this.data.push(name);
      this.save();
      return true;
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
  remove(id: string) {
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
      console.log(this.data);
      return 'success';
    }

  }
};
export {tagListModel};

