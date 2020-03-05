<template>
    <div class="layout-wrapper" >
      <Nav/>
      <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot/>
      </div>
    </div>
</template>
//Layout组件与slot插槽,见Labels组件中对应的slot部分
<script lang="ts">
  import Nav from '@/components/Nav.vue';
  export default {
    props:["classPrefix"],
    name: 'Layout',
    components: {Nav}
  };
</script>

<style lang="scss" scoped>
  .layout-wrapper {
    display: flex;
    flex-direction: column-reverse;
    min-height: 100vh;
  }
  .content{
    overflow: auto;
    flex-grow: 1;
  }
</style>