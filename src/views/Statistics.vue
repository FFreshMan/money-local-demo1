<template>
  <div class="x">
    <Layout>
      <Tabs :data-source="arrType" :value.sync="type" :class-prefix="'type'"/>
      <Tabs :data-source="arrInterval" :value.sync="range" :class-prefix="'interval'"/>
      <div>
        {{recordList }}
      </div>
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
    get recordList(){
    return this.$store.state.recordList
    }
    get result(){
      return this.recordList
    }
    range = 'day';
    type = '-';
    arrInterval = arrInterval;
    arrType = arrType;
  }
</script>

<style lang="scss" scoped>
  ::v-deep {
    .type-tabs-item {
      &.selected {
        background: #c4c4c4;
      }
    }
    .interval-tabs-item{
      height: 50px;
    }
  }
</style>