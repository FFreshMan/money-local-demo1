<template>
  <div>
    <div class="tags">
      <div class="new">
        <button>新增标签</button>
      </div>
      <ul class="current">
        <li v-for="tag in dataSource" :key="tag"
            @click="toggle(tag)"
            :class="{selected:selectedTags.indexOf(tag)>=0}">{{tag}}
        </li>
      </ul>
      <!--surround emmet-->
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    @Prop(Array) dataSource: string[] | undefined;
    selectedTags: string[] = [];

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tags {
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;

    > .current {
      display: flex;
      flex-wrap: wrap;
      overflow: auto;

      > li {
        $bg: #d9d9d9;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 12px;
        margin-top: 4px;
        height: 24px;
        padding: 0 16px;
        border-radius: 10px;
        background: $bg;
        /*border-radius 50%默认是长度的一半*/
        &.selected {
          background: darken($bg, 50%);
          color: white;
        }
      }
    }

    > .new {
      padding-top: 16px;

      button {
        border: none;
        background: transparent;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 2px;
      }
    }
  }
</style>