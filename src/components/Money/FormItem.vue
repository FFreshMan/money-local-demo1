<template>
  <div>
    <div>
      <label class="notes">
        <span class="name">{{this.fileName}}</span>
        <input type="text"
               :value="value"
               @input="onValueChanged($event.target.value)"
               :placeholder=placeHolder>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  @Component
  export default class FormItem extends Vue {
    @Prop({required: true}) fileName!: string;
    @Prop() placeHolder!: string;
    @Prop({default: ''}) value!: string;


    //v-model就是为这个value添加动态监听 相当于第6行改写
    // @Watch('value')可以删除
    onValueChanged(val: string) {
      this.$emit('update:value', val);
    }

    oninput(event: KeyboardEvent) {
      const input = event.target as HTMLInputElement;
      this.value = input.value;
    }

    //监听键盘输入事件
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .notes {
    padding: 0 16px;
    font-size: 14px;
    display: flex;
    align-items: center;


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