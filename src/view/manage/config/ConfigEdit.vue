<style lang="less" scoped>
  @import "config.less";
</style>

<template>
  <el-tabs v-model="activeName" class="config_edit" type="card" @tab-click="tabClick">
    <!--<el-tab-pane label="项目案例类型" name="example">-->
    <!--<el-form ref="exampleForm" class="form" inline :model="data">-->
    <!--<el-row>-->
    <!--<i class="el-icon-plus add" @click="$set(data.example,data.example.length,{name:'',show:false,icon:''})"></i>-->
    <!--<el-button type="primary" @click="onSubmit">保存</el-button>-->
    <!--</el-row>-->
    <!--<transition-group name="list-complete" tag="p" class="list">-->
    <!--<div v-for="(example,i) in data.example" :key="example" class="list-complete-item">-->
    <!--<el-form-item :label="(i+1)+'、类型名称：'" style="width: 35%;text-align: center">-->
    <!--<el-input v-model="example.name"></el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="是否显示：" style="width: 15%;text-align: center">-->
    <!--<el-switch on-text="" off-text="" v-model="example.show"></el-switch>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="显示图标：" style="width: 15%;text-align: center">-->
    <!--<Avatar width="32" height="32"/>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="路径设置：" style="width: 25%;text-align: center">-->
    <!--<el-input v-model="example.key" style="width: 130px">-->
    <!--<template slot="prepend">./example/</template>-->
    <!--</el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item style="width: 5%;text-align: center">-->
    <!--<i class="el-icon-delete2 delete" @click="$delete(data.example,i)"></i>-->
    <!--</el-form-item>-->
    <!--</div>-->
    <!--</transition-group>-->
    <!--</el-form>-->
    <!--</el-tab-pane>-->
    <!--<el-tab-pane label="我的笔记类型" name="note">-->
    <!--<el-form ref="noteForm" class="form" inline :model="data">-->
    <!--<el-row>-->
    <!--<i class="el-icon-plus add" @click="$set(data.note,data.note.length,{name:'',show:false,icon:''})"></i>-->
    <!--<el-button type="primary" @click="onSubmit">保存</el-button>-->
    <!--</el-row>-->
    <!--<transition-group name="list-complete" tag="p" class="list">-->
    <!--<div v-for="(note,i) in data.note" :key="note" class="list-complete-item">-->
    <!--<el-form-item :label="(i+1)+'、类型名称：'" style="width: 35%;text-align: center">-->
    <!--<el-input v-model="note.name"></el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="是否显示：" style="width: 15%;text-align: center">-->
    <!--<el-switch on-text="" off-text="" v-model="note.show"></el-switch>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="显示图标：" style="width: 15%;text-align: center">-->
    <!--<Avatar width="32" height="32"/>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="路径匹配：" style="width: 25%;text-align: center">-->
    <!--<el-input v-model="note.key" style="width: 130px">-->
    <!--<template slot="prepend">./note/</template>-->
    <!--</el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item style="width:5%;text-align: center">-->
    <!--<i class="el-icon-delete2 delete" @click="$delete(data.note,i)"></i>-->
    <!--</el-form-item>-->
    <!--</div>-->
    <!--</transition-group>-->
    <!--</el-form>-->
    <!--</el-tab-pane>-->
    <el-tab-pane label="我的资料" name="me">
      <el-form ref="mineForm" class="form" :model="data" label-width="100px" style="width: 80%;margin: auto">
        <div class="el-form-item" style="text-align: center">
          <Avatar :url="data.avatarUrl" :success="(v)=>data.avatarUrl = v"/>
        </div>
        <el-form-item label="昵称：" prop="nickName">
          <el-input v-model="data.nickName"/>
        </el-form-item>
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="data.name"/>
        </el-form-item>
        <el-form-item label="性别：" prop="gender">
          <el-radio-group v-model="data.gender">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="籍贯：" prop="province">
          <el-input v-model="data.city"/>
        </el-form-item>
        <el-form-item label="电话：" prop="tel">
          <el-input v-model="data.tel" readonly>
            <el-button slot="append" class="change" @click="changeTel">更换</el-button>
          </el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit('mineForm')" style="margin: auto;display: block">保存</el-button>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import Avatar from '../../../components/Avatar.vue'
  import {mineApi, updateUserApi} from '../../../api/userApi'
  import {alert, success} from '../../../actions'
  export default {
    name: 'configEdit',
    data () {
      return {
        activeName: '',
        data: {},
      }
    },
    components: {Avatar},
    methods: {
      tabClick ({name}) {
        this.$router.push({query: {tab: name}})
      },
      onSubmit (form) {
        this.$refs[form].validate((valid) => {
          if (valid && form === 'mineForm') {
            updateUserApi(this.data).then(({msg}) => success(msg))
          } else {
            return false
          }
        })
      },
      changeTel () {
        alert('更换手机正在开发中。。。')
      },
    },
    created () {
      const {query: {tab}} = this.$route
      this.activeName = tab || 'me'
      if (this.activeName === 'me') {
        mineApi().then((user) => {
          this.data = user
        })
      }
    }
    ,
  }
</script>
