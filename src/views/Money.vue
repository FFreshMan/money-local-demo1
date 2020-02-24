<template>
  <div>
    <Layout class-prefix="layout">
      <number-pad/>
      <Types :propA="222"/>
      <Notes/>
      <Tags :data-source.sync="tags"/>
    </Layout>
  </div>
</template>
<script lang="ts">
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';

  export default {
    name: 'Money',
    components: {
      Tags, Notes, Types, NumberPad
    },
    data() {
      return {
        tags: ['衣', '食', '住', '行']
      };
    }
  };
</script>
<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
    /*flex逆向布局可以调整空白部分位置，元素同样倒置*/
  }
</style>
<style lang="scss" scoped>

</style>