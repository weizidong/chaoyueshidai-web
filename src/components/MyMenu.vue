<style lang="less" scoped>
  @import "myMenu.less";
</style>
<template>
  <el-menu :default-active="active" class="my-menu" mode="horizontal" router unique-opened>
    <el-menu-item :index="'/view/home/'+$route.params.userid">首页</el-menu-item>
    <el-submenu index="example">
      <template slot="title">案例展示</template>
      <el-menu-item v-for="(e,i) in config.example" :key="i" :index="'/view/example/'+$route.params.userid+'/'+e.key" v-if="e.show">{{e.name}}</el-menu-item>
    </el-submenu>
    <el-submenu index="note">
      <template slot="title">我的足迹</template>
      <el-menu-item v-for="(e,i) in config.note" :key="i" :index="'/view/note/'+$route.params.userid+'/'+e.key" v-if="e.show">{{e.name}}</el-menu-item>
    </el-submenu>
    <el-menu-item :index="'/view/me/'+$route.params.userid">关于我</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'my-menu',
    data () {
      return {
        activeIndex: '1',
        config: {},
      }
    },
    computed: {
      active () {
        return this.$route.path
      },
    },
    created () {
    },
  }
</script>
