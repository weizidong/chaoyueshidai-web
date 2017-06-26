<style lang="less" scoped>
  @import "manage.less";
</style>

<template>
  <div class="manage">
    <MyHeader/>
    <Sidebar/>
    <router-view></router-view>
  </div>
</template>

<script>
  import MyHeader from '../components/Header.vue'
  import Sidebar from '../components/Sidebar.vue'
  export default {
    name: 'manage',
    components: {MyHeader, Sidebar},
  }
</script>
