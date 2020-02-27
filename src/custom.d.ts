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
  id: string ;
  name: string;
}