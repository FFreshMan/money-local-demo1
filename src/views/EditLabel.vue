<template>
  <div>
    <Layout>
      <div class="navBar">
        <Icons name="arrow-left" class="leftIcon" @click="goBack"/>
        <span class="title">编辑标签</span>
        <span class="rightIcon"></span>
      </div>
      <div class="wrapper">
        <FormItem file-name="标签名"
                  place-holder="请输入标签名"
                  :value="tag.name"
                  @update:value="updateTag"
        />
      </div>
      <div class="buttonWrapper">
        <Button @click="remove">删除标签</Button>
      </div>

    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import FormItem from '@/components/Money/FormItem.vue';
  import Button from '@/components/Button.vue';


  @Component({
    components: {Button, FormItem},
  })
  export default class EditLabel extends Vue {
    get tag() {
      return this.$store.state.currentTag;
    }

    created() {
      this.$store.commit('fetchTags');
      const id = this.$route.params.id;
      this.$store.commit('setCurrentTag', id);
      if (this.tag) {
        return;
      } else {
        this.$router.replace('/404');
      }
    }

    updateTag(name: string) {
      if (this.tag) {
        this.$store.commit('updateTag', {id: this.tag.id, name: name});
      } else {
        return;
      }
    }

    remove() {
      if (this.tag) {
        this.$store.commit('removeTag', this.tag.id);
        this.$router.replace('/labels');
      } else {
        return;
      }
    }

    goBack() {
      this.$router.replace('/labels');
    }
  }
</script>

<style lang="scss" scoped>
  .navBar {
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .title {

    }

    > .leftIcon {
      width: 24px;
      height: 24px;
    }

    > .rightIcon {
      width: 24px;
      height: 24px;
    }
  }

  .wrapper {
    margin-top: 8px;
    background: #fff;
  }

  .buttonWrapper {
    text-align: center;
    margin-top: 30px;
  }
</style>