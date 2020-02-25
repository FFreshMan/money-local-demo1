<template>
  <div>
    <Layout class-prefix="layout">
      {{record}}
      <number-pad :value.sync="record.amount"/>
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
  import {Component} from 'vue-property-decorator';

  type Record = {
    tags?: string[];
    notes: string;
    type: string;
    amount: number;
  }
  //?表示可有可无
  @Component({
      components:
        {Tags, Notes, Types, NumberPad}
    }
  )
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行'];
    record: Record = {tags: [],notes: '', type: '', amount: 0};

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