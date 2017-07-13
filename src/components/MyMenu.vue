<style lang="less" scoped>
  @import "myMenu.less";
</style>
<template>
  <el-menu :default-active="active" class="my-menu" mode="horizontal" router unique-opened>
    <el-menu-item index="/">首页</el-menu-item>
    <!--<el-submenu index="example">-->
    <!--<template slot="title">案例展示</template>-->
    <!--<el-menu-item v-for="(e,i) in config.example" :key="i" :index="'/view/example/'+$route.params.userid+'/'+e.key" v-if="e.show">{{e.name}}</el-menu-item>-->
    <!--</el-submenu>-->
    <el-submenu index="note">
      <template slot="title">笔记分享</template>
      <el-menu-item v-for="(v,i) in noteType" :key="i" :index="'/view/note/'+i">{{v}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  import {noteType} from '../constant'
  export default {
    name: 'my-menu',
    data () {
      return {
        noteType,
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
