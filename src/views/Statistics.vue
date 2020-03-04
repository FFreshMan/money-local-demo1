<template>
  <div class="x">
    <Layout>
      <Tabs :data-source="arrType" :value.sync="type" :class-prefix="'type'"/>
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
  import dayjs from 'dayjs';
  import clone from '@/lib/clone';

  @Component({
    components: {
      Tabs
    }
  })
  export default class Statistics extends Vue {
    type = '-';
    arrType = arrType;

    get recordList() {
      return (this.$store.state as RootState).recordList;
    }

    get result() {
      const {recordList} = this;
      if (recordList.length === 0) {return [];}
      const newList = clone(recordList.sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()));
      const groupList = [{title: newList[0].createdAt, items: [newList[0]]}];
      for (let i = 1; i < newList.length; i++) {
        const current = newList[i];
        const last = groupList[groupList.length - 1];
        if (dayjs(current.createdAt).isSame(dayjs(last.title), 'day')) {
          last.items.push(current);
        } else {
          groupList.push({title: current.createdAt, items: [current]});
        }
      }
      console.log(groupList);
      return groupList;

    }

    beautify(title: string) {
      const day = dayjs(title);
      const now = dayjs();
      if (day.isSame(now, 'day')) {
        return '今天';
      } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
        return '昨天';
      } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
        return '前天';
      } else if (day.isSame(now, 'year')) {
        return day.format('M月D日');
      } else {
        return day.format('YYYY年M月D日');
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
        background: white;
        &::after {
          display: none;
        }
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