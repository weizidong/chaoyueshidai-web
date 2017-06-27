<style lang="less" scoped>
  @import "config.less";
</style>

<template>
  <el-tabs v-model="activeName" class="config_edit" type="card" @tab-click="tabClick">
    <el-tab-pane label="网站菜单设置" name="1">
      网站菜单设置开发中。。。
    </el-tab-pane>
    <el-tab-pane label="功能模块设置" name="2">
      功能模块设置开发中。。。
    </el-tab-pane>
    <el-tab-pane label="微信关注设置" name="3">
      微信关注设置开发中。。。
    </el-tab-pane>
    <el-tab-pane label="联系方式设置" name="4">
      联系方式设置开发中。。。
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import {getConfig} from '../../../api/configApi'
  export default {
    name: 'configEdit',
    data () {
      return {
        activeName: '',
      }
    },
    methods: {
      tabClick ({name}) {
        this.$router.push({query: {tab: name}})
        console.log(name)
      },
    },
    created () {
      const {query: {tab}} = this.$route
      this.activeName = tab || '1'
      getConfig().then((data) => console.log(data))
    },
  }
</script>
