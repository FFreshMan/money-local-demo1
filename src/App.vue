<template>
  <div id="app">
    <router-view/>
  </div>
</template>
//router-view就是用来表示一个路由对象所处的位置
//router-link是一个导航组件能跳转到相应的router
<style lang="scss">
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";
  body{
    background: #f5f5f5;
  }
  #app {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    line-height: 1.5;
    font-family: $font-hei;
  }

</style>
<script lang="js">

  export default {

  }
</script>