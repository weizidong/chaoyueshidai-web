<style lang="less" scoped>
  @import "header.less";
</style>
<template>
  <div class="header">
    <div class="logo"><img src="/static/img/logo01.png" alt="LOGO"></div>
    <el-dropdown class="user" @command="handleCommand">
      <span class="el-dropdown-link">
        <img :src="mine.avatarUrl || '/static/img/user.png'">
        <span>{{mine.name || mine.nickName || '管理员'}}</span>
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="info">我的资料</el-dropdown-item>
        <el-dropdown-item command="password">修改密码</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dialog v-if="dialog.data.id" :modal-append-to-body="false" :show-close="false" :visible.sync="dialog.show">
      <div slot="title" class="title">
        <img :src="dialog.data.avatarUrl || '/static/img/admin.png'">
        <i class="el-icon-close" @click="dialog.show = false"/>
      </div>
      <el-form :model="dialog.data" label-width="160px">
        <el-form-item label="昵称：">
          <el-input v-model="dialog.data.nickName" readonly/>
        </el-form-item>
        <el-form-item label="姓名：">
          <el-input v-model="dialog.data.name" readonly/>
        </el-form-item>
        <el-form-item label="手机号码：" prop="tel">
          <el-input v-model="dialog.data.tel" readonly>
            <el-button slot="append" class="change" @click="changeTel">更换</el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="账户类型：" style="text-align: left">
          <el-select :value="dialog.data.type" disabled>
            <el-option label="普通用户" :value="0"/>
            <el-option label="管理员" :value="1"/>
            <el-option label="超级管理员" :value="2"/>
          </el-select>
        </el-form-item>
        <el-form-item label="是否关注公众号：" style="text-align: left">
          <el-switch :value="dialog.data.subscribe" on-text="是" off-text="否"/>
        </el-form-item>
        <el-form-item label="关注时间：" style="text-align: left">
          <el-date-picker v-model="dialog.data.subscribeTime" align="left" type="date" placeholder="关注公众号的时间..." format="yyyy-MM-dd HH:mm" readonly/>
        </el-form-item>
        <el-form-item label="最后一次登录时间：" style="text-align: left">
          <el-date-picker v-model="dialog.data.loginTime" align="left" type="date" placeholder="最后一次登录时间..." format="yyyy-MM-dd HH:mm" readonly/>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog v-if="!dialog.data.id" :modal-append-to-body="false" :title="dialog.title" :visible.sync="dialog.show">
      <el-form :model="dialog.data" :rules="rule2" ref="form2" label-width="120px">
        <el-form-item label="原密码：" prop="old">
          <el-input type="password" v-model="dialog.data.old"/>
        </el-form-item>
        <el-form-item label="新密码：" prop="pwd">
          <el-input type="password" v-model="dialog.data.pwd"/>
        </el-form-item>
        <el-form-item label="确认密码：" prop="pwd1">
          <el-input type="password" v-model="dialog.data.pwd1"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialog.show = false">取 消</el-button>
        <el-button type="primary" @click="submit(dialog.data)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {mineApi, logoutApi, changePwdApi} from '../api/userApi'
  import {alert} from '../actions'
  export default {
    name: 'myHeader',
    data () {
      return {
        mine: {},
        dialog: {title: '', show: false, data: {}},
        rule1: {},
        rule2: {
          old: [
            {type: 'string', required: true, message: '请输入原密码！', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码长度不少于6位！', trigger: 'blur'},
          ],
          pwd: [{
            type: 'string',
            required: true,
            validator: (rule, value, callback) => {
              if (!value) {
                callback(new Error('请输入新密码！'))
              } else if (value.length < 6) {
                callback(new Error('密码长度不能少于6位！'))
              } else if (!/[0-9]/.test(value) || !/[a-z]/.test(value) || !/[A-Z]/.test(value) || !/[_]/.test(value)) {
                callback(new Error('密码必须更包含数字、大写字母、小写字母以及下划线_'))
              } else {
                if (this.dialog.data.pwd1) {
                  this.$refs.form2.validateField('pwd1')
                }
                callback()
              }
            },
            trigger: 'blur',
          }],
          pwd1: [{
            type: 'string',
            required: true,
            validator: (rule, value, callback) => {
              if (!value) {
                callback(new Error('请再次输入密码！'))
              } else if (value !== this.dialog.data.pwd) {
                callback(new Error('两次输入密码不一致!'))
              } else {
                callback()
              }
            },
            trigger: 'blur',
          }],
        },
      }
    },
    methods: {
      handleCommand (command) {
        if (command === 'info') {
          this.dialog = {title: '我的资料', show: true, data: this.mine}
        } else if (command === 'password') {
          this.dialog = {title: '修改密码', show: true, data: {pwd: '', old: ''}}
        } else if (command === 'logout') {
          logoutApi().then(() => this.$router.push({name: 'login'}))
        }
      },
      submit ({old, pwd}) {
        this.$refs.form2.validate((valid) => {
          if (valid) {
            changePwdApi(old, pwd).then(({msg}) => alert(msg).then(() => this.$router.push({name: 'login'})))
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
      mineApi().then((user) => {
        this.mine = user
        window.localStorage.setItem('user', JSON.stringify(user))
      }).catch(() => this.$router.push({name: 'login'}))
    },
  }
</script>
