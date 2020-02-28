//全局声明类型
type RecordItem = {
  tags?: Tag[];
  notes: string;
  type: string;
  amount: number;
  createdDate?: Date;
  //除了数据类型还可以写类/构造函数
}
//?表示可有可无
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  init: Tag[];
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated' | 'name void';
  save: () => void;
  update: (id: string, name: string) => 'success' | 'id not found' | 'duplicated';
  remove: (id: string) => 'success' | 'id not found';
}

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
  remove: (id: string) => 'success' | 'id not found';
  updateTag: TagListModel['update'];//表示我的类型和TagListModel的update类型一样
  findTag: (id: string) => Tag;
  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void;
  saveRecord: () => void;
}