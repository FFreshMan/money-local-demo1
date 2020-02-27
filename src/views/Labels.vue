<template>
  <div>
    <Layout>
      <ol class="tags">
        <li v-for="tag in tags" :key="tag"><span>{{tag}}</span>
          <Icons name="arrow-right"/>
        </li>
      </ol>
      <div class="newTag-wrapper">
        <button class="newTag" @click="createTag">新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import {tagListModel} from '@/models/tagListModel';

  const tagList = tagListModel.fetch();
  @Component
  export default class Labels extends Vue {
    tags = tagList;

    createTag() {
      const name = window.prompt('请输入标签名');
      if (name) {
        try { tagListModel.create(name);} catch (e) {
          console.log(e);
          alert('标签名已存在');
        }
      } else {
        alert('标签名不能为空');
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/style/helper.scss";

  .tags {
    padding-left: 16px;
    background: #fff;

    > li {
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;

      svg {
        width: 30px;
        height: 30px;
        color: #666;
        margin-right: 16px;
      }
    }
  }

  .newTag {
    background: #767676;
    color: white;
    border-radius: 4px;
    border: none;
    padding: 5px 16px;

    &-wrapper {
      background: red;
      text-align: center;
      margin-top: 30px;
    }
  }
</style>