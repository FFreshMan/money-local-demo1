<template>
    <button class="button" @click="$emit('click',$event)"><slot/></button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {


  }
</script>

<style lang="scss" scoped>

    .button {
        background: #767676;
        color: white;
        border-radius: 4px;
        border: none;
        padding: 5px 16px;

        &-wrapper {
            text-align: center;
            margin-top: 30px;
        }
    }
</style>