<template>
  <div class="nav">
    <router-link to="/Money">
      <Icons name="money"/>
      记账
    </router-link>
    <router-link to="/labels">
      <Icons name="label"/>
      标签
    </router-link>
    <router-link to="/statistics">
      <Icons name="chart"/>
      统计
    </router-link>
  </div>
</template>

<script lang="ts">

  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  .nav {
    border: 1px solid red;
  }
</style>