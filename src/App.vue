<style lang="less" scoped>
  @import "main.less";
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import {login} from './api/userApi'
  export default {
    name: 'app',
    created () {
      login({username: 'laowei', pwd: 'woqu'})
    },
  }
</script>
