<template>
  <div>
    <div class="tags">
      <div class="new">
        <button @click="newTag">新增标签</button>
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
    @Prop(Array)readonly   dataSource: string[] | undefined;
    selectedTags: string[] = [];

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
      this.$emit('update:value',this.selectedTags)
    }

    newTag() {
      const name = window.prompt('请输入标签名');
      if(name===''){
        window.alert('标签名不能为空')
      }else if(this.dataSource){
        this.$emit('update:dataSource',[...this.dataSource,name])
        //这里不能直接修改标签数组，而是触发一个事件然后让外部监听这个事件
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