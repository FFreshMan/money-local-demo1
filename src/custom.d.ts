//全局声明类型
type RecordItem = {
  tags?: Tag[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: string;
  //除了数据类型还可以写类/构造函数
}
//?表示可有可无
type Tag = {
  id: string;
  name: string;
}
type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}
// type TagListModel = {
//   init: Tag[];
//   data: Tag[];
//   fetch: () => Tag[];
//   create: (name: string) => 'success' | 'duplicated' | 'name void';
//   save: () => void;
//   update: (id: string, name: string) => 'success' | 'id not found' | 'duplicated';
//   removeTag: (id: string) => 'success' | 'id not found';
// }

