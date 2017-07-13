<style lang="less" scoped>
  @import "sidebar.less";
</style>
<template>
  <div class="sidebar" :class="{hidden:hide}">
    <el-menu :default-active="active" theme="dark" unique-opened router @open="hide = false" @close="hide = true">
      <SidebarItem :index="idx+''" :hide="hide" :item="item" v-for="(item,idx) in menus" :key="idx"/>
    </el-menu>
    <div class="hide" @click="hide = !hide"><i :class="{'el-icon-d-arrow-left':!hide,'el-icon-d-arrow-right':hide}"></i></div>
  </div>
</template>
<script type="es6">
  import menus from '../router/menu'
  import SidebarItem from './SidebarItem.vue'
  export default {
    components: {SidebarItem},
    data(){
      return {
        menus,
        hide: false,
        config: {}
      }
    },
    computed: {
      active () {
        return this.$route.path;
      },
    },
    created () {
    }
  }
</script>
