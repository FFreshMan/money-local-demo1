<template>
  <div>
    <div class="tags">
      <div class="new">
        <button>新增标签</button>
      </div>
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <!--surround emmet-->
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Tags'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
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