<style lang="less" scoped>
  @import "sidebar.less";
</style>
<template>
  <div class="sidebar">
    <el-menu :default-active="active" v-show="!hide" theme="dark" unique-opened router>
      <SidebarItem :index="idx+''" :item="item" v-for="(item,idx) in menu" :key="idx"/>
    </el-menu>
    <div class="hide"><i class="el-icon-d-arrow-left"></i></div>
  </div>
</template>
<script type="es6">
  import menu from '../router/menu'
  import SidebarItem from './SidebarItem.vue'
  export default {
    components: {SidebarItem},
    data(){
      return {
        menu,
        hide: false
      }
    },
    computed: {
      active () {
        return this.$route.path;
      },
    },
  }
</script>
