<style lang="less" scoped>
  @import "manage.less";
</style>

<template>
  <div class="manage">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  export default {
    name: 'manage',
    components: {Header},
  }
</script>
