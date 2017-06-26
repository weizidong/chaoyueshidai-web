<style lang="less" scoped>
  @import "sidebar.less";
</style>
<template>
  <el-menu :default-active="active" class="sidebar" theme="dark" unique-opened router>
    <SidebarItem :index="idx+''" :item="item" v-for="(item,idx) in menu" :key="idx"/>
  </el-menu>
</template>
<script type="es6">
  import menu from '../router/menu'
  import SidebarItem from './SidebarItem.vue'
  export default {
    components: {SidebarItem},
    data(){
      return {
        menu
      }
    },
    computed: {
      active () {
        return this.$route.path;
      },
    },
  }
</script>
