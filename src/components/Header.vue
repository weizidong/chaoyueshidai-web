<style lang="less" scoped>
  @import "header.less";
</style>
<template>
  <div class="header">
    <!--<div><img src="/static/img/logo02.png" alt="LOGO"></div>-->
    <el-dropdown class="user" @command="handleCommand">
      <span class="el-dropdown-link">
        <img src="/static/img/beian.png">
        <span>魏自东</span>
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">我的资料</el-dropdown-item>
        <el-dropdown-item command="b">修改密码</el-dropdown-item>
        <el-dropdown-item command="c">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    name: 'myHeader',
    methods: {
      handleCommand (command) {
        this.$message('click on item ' + command)
      },
    },
  }
</script>
