<style lang="less" scoped>
  @import "login.less";
</style>

<template>
  <transition name="fade" mode="out-in">
    <el-card v-if="!show" class="login" key="login">
      <div class="title">登录</div>
      <el-form :model="data" :rules="rules1" ref="ruleForm1" label-width="100px">
        <el-form-item label="电话号码：" prop="tel">
          <el-input v-model="data.tel"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="pwd">
          <el-input type="password" v-model="data.pwd"></el-input>
        </el-form-item>
        <el-button type="primary" @click="submit">登录</el-button>
        <el-button class="register" type="text" size="small" @click="show = true">没有账号怎么办？ 去注册！</el-button>
      </el-form>
    </el-card>
    <el-card v-if="show" class="login" key="register">
      <div class="title">注册</div>
      <el-form :model="data" :rules="rules2" ref="ruleForm2" label-width="100px">
        <el-form-item label="昵称：" prop="nickName">
          <el-input v-model="data.nickName"></el-input>
        </el-form-item>
        <el-form-item label="电话号码：" prop="tel">
          <el-input v-model="data.tel"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="pwd">
          <el-input type="password" v-model="data.pwd"></el-input>
        </el-form-item>
        <el-button type="primary" @click="register">注册</el-button>
        <el-button class="register" type="text" size="small" @click="show = false">已经有账号了！ 去登录！</el-button>
      </el-form>
    </el-card>
  </transition>
</template>

<script>
  import {loginApi, registApi} from '../../../api/userApi'
  import {success} from '../../../actions'
  export default {
    name: 'login',
    data () {
      return {
        show: false,
        data: {tel: '', pwd: ''},
        rules1: {
          tel: [{required: true, message: '请输入电话号码...', trigger: 'blur'}, {pattern: /^\d{11}$/, message: '电话号码为11位数字...', trigger: 'blur'}],
          pwd: [{required: true, message: '请输入密码...', trigger: 'blur'}, {min: 6, message: '密码长度最少为6位...', trigger: 'blur'}],
        },
        rules2: {
          nickName: [{required: true, message: '请输入昵称...', trigger: 'blur'}],
          tel: [{required: true, message: '请输入电话号码...', trigger: 'blur'}, {pattern: /^\d{11}$/, message: '电话号码为11位数字...', trigger: 'blur'}],
          pwd: [{required: true, message: '请输入密码...', trigger: 'blur'}, {min: 6, message: '密码长度最少为6位...', trigger: 'blur'}],
        },
      }
    },
    methods: {
      submit () {
        this.$refs.ruleForm1.validate((valid) => {
          if (valid) {
            loginApi(this.data).then((user) => {
              success('登录成功！')
              this.$router.push({name: 'manage'})
            })
          } else {
            return false
          }
        })
      },
      register () {
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            registApi(this.data).then(() => {
              success('注册成功！请登录...')
              this.show = false
            })
          } else {
            return false
          }
        })
      },
    },
    created () {
    },
  }
</script>
