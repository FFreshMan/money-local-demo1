<template>
  <div class="x">
    <Layout>
      <Tabs :data-source="arrType" :value.sync="type" :class-prefix="'type'"/>
      <Tabs :data-source="arrInterval" :value.sync="range" :class-prefix="'interval'"/>
      <div>
        <ol>
          <li v-for="(group,index) in result" :key="index">
          <h3>{{group.title}}</h3>
            <ol>
              <li v-for="item in group.items" :key="item.id">
                {{item.amount}}
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



  @Component({
    components: {
      Tabs
    }
  })
  export default class Statistics extends Vue {
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

    // beforeCreated() {
    //   this.$store.commit('fetchRecords');
    //   console.log(this.recordList);
    // }
    created() {
      this.$store.commit('fetchRecords');
    }

    range = 'day';
    type = '-';
    arrInterval = arrInterval;
    arrType = arrType;
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
  }
</style>