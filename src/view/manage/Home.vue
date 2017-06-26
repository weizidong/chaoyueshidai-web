<style lang="less" scoped>
  @import "home.less";
</style>

<template>
  <div class="manage">
    <MyHeader/>
    <Sidebar/>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../../components/Header.vue'
  import Sidebar from '../../components/Sidebar.vue'
  export default {
    name: 'manage',
    components: {MyHeader, Sidebar},
  }
</script>
