<template>
  <ul class="tabs" :class="this.classPrefix">
    <li v-for="item in dataSource" :key="item.value"
        :class="liClass(item)"
        class="tabs-item"
        @click="selectTab(item)"
    >{{item.text}}
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  type  DataSourceItem = {
    text: string;
    value: string;
  }
  @Component
  export default class Tabs extends Vue {
    @Prop({required: true, type: Array})
    dataSource!: DataSourceItem[];
    @Prop({default: '-'}) readonly value!: string;
    @Prop() classPrefix?: string;
    liClass = (item: DataSourceItem) => {
      return {
        selected: item.value === this.value,
        [this.classPrefix + '-tabs-item']: this.classPrefix
      };
    };

    //这里用一个对象来驱动class，条件存在则添加此class
    selectTab(item: DataSourceItem) {
      this.$emit('update:value', item.value);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tabs {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;

    &-item {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 64px;
      position: relative;
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
        /*这里用伪元素是因为border改变会让页面变动*/
      }
    }
  }
</style>