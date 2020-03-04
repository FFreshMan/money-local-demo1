<template>
  <div class="x">
    <Layout>
      <Tabs :data-source="arrType" :value.sync="type" :class-prefix="'type'"/>
      <Tabs :data-source="arrInterval" :value.sync="range" :class-prefix="'interval'"/>
      <div>
        <ol>
          <li v-for="(group,key) in result" :key="key">
            <h3 class="title">{{beautify(group.title)}}</h3>
            <ol>
              <li v-for="item in group.items" :key="item.id" class="record">
                <span> {{tagString(item.tags)}}</span>
                <span class="notes">{{item.notes}}</span>
                <span>￥{{item.amount}}</span>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import arrType from '@/constants/arrType';
  import arrInterval from '@/constants/arrInterval';
  import dayjs from 'dayjs';

  @Component({
    components: {
      Tabs
    }
  })
  export default class Statistics extends Vue {
    range = 'day';
    type = '-';
    arrInterval = arrInterval;
    arrType = arrType;

    get recordList() {
      return (this.$store.state as RootState).recordList;
    }

    get result() {
      type Item = RecordItem[];
      type HashTableItem = { title: string; items: Item }
      const {recordList} = this;
      const hashTable: { [key: string]: HashTableItem } = {};
      for (let i = 0; i < recordList.length; i++) {
        const [date, time] = recordList[i].createdAt!.split('T');
        hashTable.date = hashTable.date || {title: date, items: []};
        hashTable.date.items.push(recordList[i]);
      }
      return hashTable;
    }

    beautify(title: string) {
      const day = dayjs(title);
      const now = dayjs();
      if(day.isSame(now,'day')){
        return '今天'
      }else if (day.isSame(now.subtract(1, 'day'), 'day')){
        return '昨天'
      }else if(day.isSame(now.subtract(2, 'day'), 'day')){
        return '前天'
      }else if(day.isSame(now,'year')){
        return day.format('M月D日')
      }else{
        return day.format('YYYY年M月D日')
      }
        }

    tagString(tags: Tag[]) {
      const arrName = [];
      for (let i = 0; i < tags.length; i++) {
        arrName.push(tags[i].name);
      }
      return arrName.length === 0 ? '无' : arrName.toString();
    }

    created() {
      this.$store.commit('fetchRecords');
    }

  }
</script>

<style lang="scss" scoped>
  ::v-deep {
    .type-tabs-item {
      &.selected {
        background: #c4c4c4;
      }
    }

    .interval-tabs-item {
      height: 50px;
    }

    %item {
      padding: 8px 16px;
      line-height: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .title {
      @extend %item;
    }

    .record {
      @extend %item;
      background: white;

      > .notes {
        margin-right: auto;
        margin-left: 16px;
        color: #999;
      }
    }
  }
</style>