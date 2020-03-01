<template>
  <div>
    <Layout class-prefix="layout">
      {{record}}
      <number-pad :value.sync="record.amount" @submit="saveRecord"/>
      <Types :value.sync="record.type"/>
      <FormItem file-name="备注" place-holder="请在这里输入备注" @update:value="onUpdateNotes"/>
      <Tags :data-source.sync="tags" :value.sync="record.tags"/>
    </Layout>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Tags from '@/components/Money/Tags.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import {Component} from 'vue-property-decorator';


  // const version: string = store.localStorage.getItem('version') || '0';
  // const recordList: Record[] = JSON.parse(store.localStorage.getItem('recordList') || '[]');
  // if (version === '1.0.0') {
  //   //数据迁移
  //   recordList.forEach(record => {
  //     record.createdDate = new Date(2020, 1, 0);
  //   });
  //   //保存数据

  //   store.localStorage.setItem('recordList', JSON.stringify(recordList));
  // }
  window.localStorage.setItem('version', '1.0.1');

  @Component({
      components:
        {Tags, FormItem, Types, NumberPad},
      computed: {
        recordList() {
          return this.$store.state.recordList;
          //recordList是用来记录所有信息的
        },
        tags: {
          get() {
            return this.$store.state.tagList;
          },
        }
      }
    }
  )
  export default class Money extends Vue {
    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};
    //record所有属性都被监听了，直接就改这些属性

    // onUpdateType(value: string) {
    //   this.record.type = value;
    // }由于上面<Types :value="record.type" @update:value="onUpdateType"/>被改写成sync
    //所以直接就改了record中的type这样就可以省略这个函数

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateTags(value: Tag[]) {
      this.record.tags = value;
      //这里的value是传入的tags数组，上面的：value是触发的事件监听
    }

    saveRecord() {
      this.$store.commit('createRecord', this.record);
    }
  }

</script>
<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
    /*flex逆向布局可以调整空白部分位置，元素同样倒置*/
  }
</style>
<style lang="scss" scoped>

</style>