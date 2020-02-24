### 整体思路介绍
#### 1. APP.vue中使用router-view
#### 2. router/index.ts中写好路由，根据访问路径显示相应的页面Labels、Money、NotFound、Statistics
#### 3. 每个页面分为Nav和主体部分，所以将nav组件分离，防止每个路由页面中重复书写nav，将页面布局抽离成Layout组件，用slot传入每个页面中变化的部分
#### 4.Nav组件中使用router-link来自动形成跳转a标签
#### 5. Nav中有图标部分，抽离成Icons组件，通过props传入文件名
