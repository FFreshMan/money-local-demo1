declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare  module  '*.svg'{
  const content: string;
  export  default  content;
}
//想要引入svg得先申明一个模块，并将它的string格式导出