function clone<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}

export default clone;
//声明一个T类型，继承参数类型