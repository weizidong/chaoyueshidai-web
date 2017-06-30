<style lang="less" scoped>
  @import "myMenu.less";
</style>
<template>
  <el-menu :default-active="activeIndex" class="my-menu" mode="horizontal" @select="handleSelect" router unique-opened>
    <el-menu-item :index="base+'home'">首页</el-menu-item>
    <el-submenu index="example">
      <template slot="title">案例展示</template>
      <el-menu-item v-for="(e,i) in config.example" :key="i" :index="base+'example/'+e.key" v-if="e.show">{{e.name}}</el-menu-item>
    </el-submenu>
    <el-submenu index="note">
      <template slot="title">我的足迹</template>
      <el-menu-item v-for="(e,i) in config.note" :key="i" :index="base+'note/'+e.key" v-if="e.show">{{e.name}}</el-menu-item>
    </el-submenu>
    <el-menu-item :index="base+'me'">关于我</el-menu-item>
  </el-menu>
</template>

<script>
  import {getConfig} from '../api/configApi'
  export default {
    name: 'my-menu',
    data () {
      return {
        activeIndex: '1',
        base: '/view',
        config: {},
      }
    },
    methods: {
      handleSelect () {
      },
    },
    created () {
      this.base = `/view/${this.$route.params.userid}/`
      this.activeIndex = `${this.base}home`
      getConfig(this.$route.params.userid).then(({value}) => {
        this.config = JSON.parse(value)
      })
    },
  }
</script>
