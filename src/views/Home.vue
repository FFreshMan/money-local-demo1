<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import y from '@/components/2.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  }
}
</script>
<style lang="scss">

</style>
