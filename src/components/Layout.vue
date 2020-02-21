<template>
    <div class="nav-wrapper">
      <div class="content">
      <slot/>
      </div>
      <Nav/>
    </div>
</template>
//Layout组件与slot插槽,见Labels组件中对应的slot部分
<script lang="ts">
  import Nav from '@/components/Nav.vue';
  export default {
    name: 'Layout',
    components: {Nav}
  };
</script>

<style lang="scss" scoped>
  .nav-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .content{
    overflow: auto;
    flex-grow: 1;
  }
</style>