<style lang="less" scoped>
  @import "sidebarItem.less";
</style>
<template>
  <div class="sidebar-item">
    <el-menu-item :index="item.path" v-if="!item.children">
      <i :class="'el-icon-'+(item.icon||'date')"></i><span v-if="!hide">{{item.title}}</span>
    </el-menu-item>
    <el-submenu :index="index" v-if="item.children">
      <template slot="title"><i class="icon-font" :class="'el-icon-'+(item.icon||'menu')"></i><span v-if="!hide">{{item.title}}</span></template>
      <SidebarItem v-for="(i,idx) in item.children" :hide="hide" :key="index+'-'+idx" :index="index+'-'+idx" :item="i"/>
    </el-submenu>
  </div>
</template>
<script type="es6">
  export default {
    name: 'SidebarItem',
    props: {
      index: String,
      item: Object,
      hide: Boolean
    },
  }
</script>
