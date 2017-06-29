<style lang="less">
  @import "manage.less";
</style>

<template>
  <div class="manage">
    <MyHeader/>
    <Sidebar/>
    <div class="content">
      <transition name="manage-data" mode="out-in">
        <router-view></router-view>
      </transition>
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
