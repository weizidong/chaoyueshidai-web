<style lang="less" scoped>
  @import "myMenu.less";
</style>
<template>
  <el-menu :default-active="activeIndex" class="my-menu" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">案例展示</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">我的足迹</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="5">关于我</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'my-menu',
    data () {
      return {
        activeIndex: '1',
      }
    },
    methods: {
      handleSelect () {
      },
    },
  }
</script>
