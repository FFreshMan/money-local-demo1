<template>
  <div>
    <Layout class-prefix="layout">
      <number-pad :value.sync="record.amount" @submit="saveRecord"/>
      <Tabs :value.sync="record.type" :data-source.sync="arrType"/>
      <FormItem file-name="备注" place-holder="请在这里输入备注" :value.sync="record.notes"/>
      <Tags :data-source.sync="tags" :value.sync="record.tags"/>
    </Layout>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Tags from '@/components/Money/Tags.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import arrType from '@/constants/arrType';


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
        {Tabs, Tags, FormItem, NumberPad},
    }
  )
  export default class Money extends Vue {
    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

    //record所有属性都被监听了，直接就改这些属性
    get tags() {
      return this.$store.state.tagList;
    }

    get recordList() {
      return this.$store.state.recordList;
    }

    arrType = arrType;

    // onUpdateType(value: string) {
    //   this.record.type = value;
    // }由于上面<Types :value="record.type" @update:value="onUpdateType"/>被改写成sync
    //所以直接就改了record中的type这样就可以省略这个函数

    onUpdateTags(value: Tag[]) {
      this.record.tags = value;
      //这里的value是传入的tags数组，上面的：value是触发的事件监听
    }

    saveRecord() {
      if (this.record.tags!.length > 0) {
        this.$store.commit('createRecord', this.record);
      } else {
        window.alert('请选择一个标签');
      }
      this.record.notes=''
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