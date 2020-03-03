<template>
  <div>
    <div>
      <ul class="types">
        <li :class="{[classPrefix+'-item']:classPrefix, selected:value==='-'}" @click="selectType('-')">支出</li>
        <li :class="{[classPrefix+'-item']:classPrefix, selected:value==='+'}" @click="selectType('+')">收入</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Type extends Vue {
    // @Prop(Number) readonly propA: number | undefined;
    @Prop({default: '-'}) readonly value!: string;
    @Prop() classPrefix?: string;
    //这里用一个对象来驱动class，条件存在则添加此class

    selectType(type: string) {
      if (type !== '-' && type !== '+') {
        throw new Error('no type found');
      }
      this.$emit('update:value', type);
    }
  }

</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .types {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;

    > li {
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