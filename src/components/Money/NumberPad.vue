<template>
  <div>
    <div class="numberPad">
      <div class="output">{{output}}</div>
      <div class="buttons">
        <button @click="setContent">1</button>
        <button @click="setContent">2</button>
        <button @click="setContent">3</button>
        <button @click="remove">删除</button>
        <button @click="setContent">4</button>
        <button @click="setContent">5</button>
        <button @click="setContent">6</button>
        <button @click="clear">清空</button>
        <button @click="setContent">7</button>
        <button @click="setContent">8</button>
        <button @click="setContent">9</button>
        <button class="ok" @click="ok">OK</button>
        <button class="zero" @click="setContent">0</button>
        <button @click="setContent">.</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component,Prop} from 'vue-property-decorator';

  @Component
  export default class Type extends Vue {
    @Prop()readonly  value!: number;
    output=this.value.toString();
    remove(){
      if(this.output.length>1){
        this.output=this.output.substring(0,this.output.length-1);
        console.log(this.value);
      }else{
        this.output='0'
      }
    }
    clear(){
      this.output='0'
    }
    ok(){
      this.$emit('update:value',this.output)
      //这里value有两个作用一个是传入一个只读数据
      //一个是监听value的变化，并将this.output和外部的amount绑定到一起
      //所以外部的onAmountChanged函数就可以省略了
    }
    setContent(event: MouseEvent) {
      const button = (event.target as HTMLButtonElement);
      const input = button.textContent as string;
      // const input=button.textContent!
      if (this.output.length > 16) {return;}
      if (this.output === '0') {
        if ('0123456789'.indexOf(input) >= 0) {
          this.output = input;
        } else {
          this.output += input;
        }
        return;
      }
      if (this.output.indexOf('.') >= 0 && input === '.') {return; }
      this.output += input;
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .numberPad {
    .output {
      @extend %clearFix ;
      font-size: 36px;
      font-family: Consolas, monospace;
      /*等宽字体*/
      padding: 9px 16px;
      text-align: right;
      min-height: 72px;
      @extend %innerShadow;
    }

    .buttons {
      @extend %clearFix !optional;

      > button {
        width: 25%;
        height: 64px;
        float: left;
        /*height: 7.9vh;*/
        /*直接使用屏占比，防止设备改版*/
        background: transparent;
        border: none;

        &.ok {
          height: 128px;
          float: right;
        }

        /*&表示当前元素的ok*/
        &.zero {
          width: 25%*2;
        }

        $bg: #f2f2f2;

        &:nth-child(1) {
          background: $bg;
        }

        &:nth-child(2), &:nth-child(5) {
          background: darken($bg, 4%);
        }

        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($bg, 4*2%);
        }

        &:nth-child(4), &:nth-child(7), &:nth-child(10) {
          background: darken($bg, 4*3%);
        }

        &:nth-child(8), &:nth-child(11), &:nth-child(13) {
          background: darken($bg, 4*4%);
        }

        &:nth-child(14) {
          background: darken($bg, 4*5%);
        }

        &:nth-child(12) {
          background: darken($bg, 4*6%);
        }
      }
    }
  }
</style>