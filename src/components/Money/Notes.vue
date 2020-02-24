<template>
  <div>
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" :value="value" @input="oninput" placeholder="请在这里添加备注 ">
      </label>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    value = '';
    oninput(event: KeyboardEvent){
      const input =event.target as HTMLInputElement;
      this.value=input.value
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .notes {
    padding: 0 16px;
    font-size: 14px;
    display: flex;
    align-items: center;

    background: #f5f5f5;

    > .name {
      padding-right: 16px;
    }

    input {
      padding: 16px 0;
      flex-grow: 1;
      background: transparent;
      border: none;
    }
  }
</style>