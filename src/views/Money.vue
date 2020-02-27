<template>
  <div>
    <Layout class-prefix="layout">
      {{record}}
      <number-pad :value.sync="record.amount" @submit="saveRecord"/>
      <Types :value.sync="record.type"/>
      <Notes :value="onUpdateNotes"/>
      <Tags :data-source.sync="tags" :value.sync="record.tags"/>
    </Layout>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';
  import {Component, Watch} from 'vue-property-decorator';
  import {model} from '@/model.ts';

  // const version: string = window.localStorage.getItem('version') || '0';
  // const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
  // if (version === '1.0.0') {
  //   //数据迁移
  //   recordList.forEach(record => {
  //     record.createdDate = new Date(2020, 1, 0);
  //   });
  //   //保存数据
  //   window.localStorage.setItem('recordList', JSON.stringify(recordList));
  // }
  window.localStorage.setItem('version', '1.0.1');

  @Component({
      components:
        {Tags, Notes, Types, NumberPad}
    }
  )
  export default class Money extends Vue {

    tags = ['衣', '食', '住', '行'];
    record: RecordItem = {tags: [], notes: '', type: '', amount: 0};
    recordList = model.fetch();
    //由于这里是吧record给push进去，所以他是以Record类型为元素的数组
    // onUpdateType(value: string) {
    //   this.record.type = value;
    // }由于上面<Types :value="record.type" @update:value="onUpdateType"/>被改写成sync
    //所以直接就改了record中的type这样就可以省略这个函数

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateTags(value: string[]) {
      this.record.tags = value;
      //这里的value是传入的tags数组，上面的：value是触发的事件监听
    }

    saveRecord() {
      const record2= model.clone(this.record);
      //这里要讲原对象深拷贝一下然后还原成相同的却不同地址的对象，防止引用同一个地址
      record2.createdDate = new Date();
      this.recordList.push(record2);
    }

    @Watch('recordList')
    onRecordListChange() {
      model.save(this.recordList);
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