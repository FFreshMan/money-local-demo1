<template>
  <div class="x">
    <Layout>
      <Tabs :data-source="arrTab1" :value.sync="type" :class-prefix="'type'"/>
      <Tabs :data-source="arrTab2" :value.sync="range" :class-prefix="'range'"/>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Types from '@/components/Money/Types.vue';
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';

  @Component({
    components: {
      Tabs,
      Types
    }
  })
  export default class Statistics extends Vue {
    range = 'day';
    type = '-';
    arrTab2 = [
      {text: '按天', value: 'day'},
      {text: '按周', value: 'week'},
      {text: '按月', value: 'month'}
    ];
    arrTab1 = [
      {text: '支出', value: '-'},
      {text: '收入', value: '+'}
    ];
  }
</script>

<style lang="scss" scoped>
  ::v-deep .type-tabs-item , ::v-deep .range-tabs-item{
    background: #fff;
    &.selected {
      background: #c4c4c4;
    }
  }
</style>