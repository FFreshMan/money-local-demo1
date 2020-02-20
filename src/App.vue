<template>
  <div>
    <div>导航</div>
    <router-link to="/Money">记账</router-link>
    <router-link to="/labels">标签</router-link>
    <router-link to="/statistics">统计</router-link>
    <router-view/>
  </div>
</template>
//router-view就是用来表示一个路由对象所处的位置
//router-link是一个导航组件能跳转到相应的router
<style lang="scss">
  @import "~@/assets/1.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>

  export default {

  }
</script>