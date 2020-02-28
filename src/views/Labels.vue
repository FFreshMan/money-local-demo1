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
        <div class="newTag-wrapper">
          <Button class="newTag" @click="createTag">新建标签</Button>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import store from '@/store/index2';


  @Component({
    components: {Button}
  })
  export default class Labels extends Vue {
    tags = store.tagList();
    tag?: Tag = {id: ' ', name: ' '};


    createTag() {
      const name = window.prompt('请输入标签名') as string;
      if(name){
        const message=store.createTag(name);
        if (message === 'duplicated') {
          alert('标签名已存在');
        } else {
          return
        }
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