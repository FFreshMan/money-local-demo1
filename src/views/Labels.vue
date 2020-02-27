<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link
          class="tag"
          v-for="tag in tags" :key="tag.name"
          :to="`/labels/edit/${tag.id}`">
          <span>{{tag.name}}</span>
          <Icons name="arrow-right"/>
        </router-link>
      </div>
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
    tag: Tag = {id: ' ', name: ' '};

    createTag() {
      const name = window.prompt('请输入标签名');
      const tag = {id: name, name: name};
      if (name) {
        try { tagListModel.create(tag);} catch (e) {
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

    > .tag {
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
      text-align: center;
      margin-top: 30px;
    }
  }
</style>