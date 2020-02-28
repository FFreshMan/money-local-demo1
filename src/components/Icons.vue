<template>
  <div>
    <svg class="icon" @click="$emit('click',$event)">
      <use :xlink:href="'#'+name"/>
    </svg>
  </div>
</template>

<script lang="ts">
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
  //深拷贝，svg后缀可改
  export default {
    props: ['name'],
    name: 'Ions'
  };
</script>

<style lang="scss" scoped>
  .icon{
    width: 32px; height: 32px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>