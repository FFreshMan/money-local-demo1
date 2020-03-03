<template>
  <div class="x">
    <Layout>
      <Tabs :data-source="arrType" :value.sync="type" :class-prefix="'type'"/>
      <Tabs :data-source="arrInterval" :value.sync="range" :class-prefix="'interval'"/>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import arrType from '@/constants/arrType';
  import arrInterval from '@/constants/arrInterval';

  @Component({
    components: {
      Tabs
    }
  })
  export default class Statistics extends Vue {
    range = 'day';
    type = '-';
    arrInterval = arrInterval;
    arrType = arrType;
  }
</script>

<style lang="scss" scoped>
  ::v-deep .type-tabs-item, ::v-deep .interval-tabs-item {
    &.selected {
      background: #c4c4c4;
    }
  }
</style>