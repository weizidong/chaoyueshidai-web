<style lang="less" scoped>
  @import "config.less";
</style>

<template>
  <el-tabs v-model="activeName" class="config_edit" type="card" @tab-click="tabClick">
    <el-tab-pane label="项目案例类型" name="example">
      <el-form ref="exampleForm" class="form" :inline="true" :model="data" label-width="120">
        <el-row>
          <el-form-item>
            <i class="el-icon-plus add" @click="$set(data.example,data.example.length,{name:'',show:false,icon:''})"></i>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
          </el-form-item>
        </el-row>
        <transition-group name="list-complete" tag="p" class="list">
          <div v-for="(example,i) in data.example" :key="example" class="list-complete-item">
            <el-form-item label="类型名称：" style="width: 40%;text-align: center">
              <el-input v-model="example.name"></el-input>
            </el-form-item>
            <el-form-item label="是否显示：" style="width: 20%;text-align: center">
              <el-switch on-text="" off-text="" v-model="example.show"></el-switch>
            </el-form-item>
            <el-form-item label="显示图标：" style="width: 30%;text-align: center">
              <!--<el-upload-->
              <!--class="avatar-uploader"-->
              <!--action="https://jsonplaceholder.typicode.com/posts/"-->
              <!--:show-file-list="false"-->
              <!--:on-success="handleAvatarSuccess"-->
              <!--:before-upload="beforeAvatarUpload">-->
              <!--<img v-if="imageUrl" :src="imageUrl" class="avatar">-->
              <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
              <!--</el-upload>-->
            </el-form-item>
            <el-form-item style="width: 5%;text-align: center">
              <i class="el-icon-delete2 delete" @click="$delete(data.example,i)"></i>
            </el-form-item>
          </div>
        </transition-group>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="我的笔记类型" name="2">
      我的笔记类型开发中。。。
    </el-tab-pane>
    <el-tab-pane label="关于我的介绍" name="3">
      关于我的介绍开发中。。。
    </el-tab-pane>
    <el-tab-pane label="微信关注设置" name="4">
      微信关注设置开发中。。。
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
        data: {example: []},
      }
    },
    methods: {
      tabClick ({name}) {
        this.$router.push({query: {tab: name}})
        console.log(name)
      },
      onSubmit () {

      },
    },
    created () {
      const {query: {tab}} = this.$route
      this.activeName = tab || '1'
      getConfig().then((data) => console.log(data))
    },
  }
</script>
