<template>
  <div>
    <div>
      <ul class="types">
        <li :class="type==='-'&&'selected'" @click="selectType('-')">支出</li>
        <li :class="type==='+'&&'selected'" @click="selectType('+')">收入</li>
      </ul>
    </div>
  </div>
</template>

<script lang="Js">
  export default {
    name: 'Types',
    data(){
      return {
        type:'-'
      }
    },
    methods:{
      selectType(type){
        if(type!=='-'&&type!=='+'){
          throw new Error('no type found')
        }else{
          this.type=type;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .types {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;

    > li {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 64px;
      position: relative;

      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 200px;
        height: 4px;
        background: #333;
        /*这里用伪元素是因为border改变会让页面变动*/
      }
    }

  }
</style>