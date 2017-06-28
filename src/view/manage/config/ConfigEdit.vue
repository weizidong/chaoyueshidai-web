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
            <el-form-item :label="(i+1)+'、类型名称：'" style="width: 30%;text-align: center">
              <el-input v-model="example.name"></el-input>
            </el-form-item>
            <el-form-item label="是否显示：" style="width: 15%;text-align: center">
              <el-switch on-text="" off-text="" v-model="example.show"></el-switch>
            </el-form-item>
            <el-form-item label="显示图标：" style="width: 15%;text-align: center">
              <Avatar width="32" height="32"/>
            </el-form-item>
            <el-form-item label="路径设置：" style="width: 30%;text-align: center">
              <el-input v-model="example.key" style="width: 230px">
                <template slot="prepend">/view/manage/example/</template>
              </el-input>
            </el-form-item>
            <el-form-item style="width: 5%;text-align: center">
              <i class="el-icon-delete2 delete" @click="$delete(data.example,i)"></i>
            </el-form-item>
          </div>
        </transition-group>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="我的笔记类型" name="note">
      <el-form ref="noteForm" class="form" :inline="true" :model="data" label-width="120">
        <el-row>
          <el-form-item>
            <i class="el-icon-plus add" @click="$set(data.note,data.note.length,{name:'',show:false,icon:''})"></i>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
          </el-form-item>
        </el-row>
        <transition-group name="list-complete" tag="p" class="list">
          <div v-for="(note,i) in data.note" :key="note" class="list-complete-item">
            <el-form-item :label="(i+1)+'、类型名称：'" style="width: 30%;text-align: center">
              <el-input v-model="note.name"></el-input>
            </el-form-item>
            <el-form-item label="是否显示：" style="width: 15%;text-align: center">
              <el-switch on-text="" off-text="" v-model="note.show"></el-switch>
            </el-form-item>
            <el-form-item label="显示图标：" style="width: 15%;text-align: center">
              <Avatar width="32" height="32"/>
            </el-form-item>
            <el-form-item label="路径匹配：" style="width: 30%;text-align: center">
              <el-input v-model="note.key" style="width: 230px">
                <template slot="prepend">/view/manage/note/</template>
              </el-input>
            </el-form-item>
            <el-form-item style="width: 5%;text-align: center">
              <i class="el-icon-delete2 delete" @click="$delete(data.note,i)"></i>
            </el-form-item>
          </div>
        </transition-group>
      </el-form>
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
  import {getConfig, saveConfig} from '../../../api/configApi'
  import Avatar from '../../../components/Avatar.vue'
  export default {
    name: 'configEdit',
    data () {
      return {
        activeName: '',
        data: {example: [], note: [], wechat: {}},
      }
    },
    components: {Avatar},
    methods: {
      tabClick ({name}) {
        this.$router.push({query: {tab: name}})
      },
      onSubmit () {
        saveConfig(JSON.stringify(this.data))
      },
    },
    created () {
      const {query: {tab}} = this.$route
      this.activeName = tab || 'example'
      getConfig().then(({value} = {}) => {
        this.data = value && {...this.data, ...JSON.parse(value)}
      })
    },
  }
</script>
