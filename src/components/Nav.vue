<template>
  <nav>
    <router-link to="/Money" class="item" active-class="selected">
      <Icons name="money"/>
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icons name="label"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icons name="chart"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">

  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    justify-content: space-around;

    > .item {
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33.33333333%;
      padding: 2px 0;
      color: #333333;
    }
    > .item.selected{
      color: red;
    }

  }

</style>