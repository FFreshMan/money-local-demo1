<template>
  <div>
    <Layout class-prefix="layout">
      <div class="numberPad">
        <div class="outPut">100</div>
        <div class="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="ok">OK</button>
          <button class="zero">0</button>
          <button>.</button>
        </div>
      </div>
      <div>
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text" placeholder="请在这里添加备注 ">
        </label>
      </div>
      <div class="tags">
        <div class="new">
          <button>新增标签</button>
        </div>
        <ul class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li><li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li><li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li><li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li><li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <!--surround emmet-->
       </div>
    </Layout>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'Money'
  };
</script>
<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
    /*flex逆向布局可以调整空白部分位置，元素同样倒置*/
  }
</style>
<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .numberPad {
    .outPut {
      @extend %clearFix ;
      font-size: 36px;
      font-family: Consolas, monospace;
      /*等宽字体*/
      padding: 9px 16px;
      text-align: right;
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

  .tags {
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    > .current {
      display: flex;
      flex-wrap: wrap;
      overflow: auto;
      > li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 12px;
        margin-top: 4px;
        height: 24px;
        padding: 0 16px;
        border-radius: 10px;
        background: #d9d9d9;
        /*border-radius 50%默认是长度的一半*/
      }
    }

    > .new {
      padding-top: 16px;

      button {
        border: none;
        background: transparent;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 2px;
      }
    }
  }
</style>