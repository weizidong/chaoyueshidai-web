<template>
  <div class="content_data">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/view/manage/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ name: 'exampleList' }">项目案例</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.params.id === 'create'?'新增':'编辑'}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="text" icon="d-arrow-left" @click="$router.push({name:'exampleList'})"></el-button>
    <el-form :model="example" :rules="rules" ref="example" label-width="100px">
      <el-form-item label="案例主题：" prop="topic">
        <el-input v-model="example.topic"/>
      </el-form-item>
      <el-form-item label="案例网址：" prop="url">
        <el-input v-model="example.url"/>
      </el-form-item>
      <el-form-item label="案例配图：" prop="pic">
        <Avatar :success="(v)=>example.pic = v"/>
      </el-form-item>
      <el-form-item label="案例说明：" prop="legend">
        <el-input type="textarea" v-model="example.legend" :rows="10"/>
      </el-form-item>
      <el-button type="primary" @click="submit">{{$route.params.id === 'create'?'新增':'保存'}}</el-button>
    </el-form>
  </div>
</template>

<script>
  import {getExample, addExample, updateExample} from '../../../api/exampleApi'
  import {success, error} from '../../../actions'
  import Avatar from '../../../components/Avatar.vue'
  export default {
    name: 'exampleEdit',
    data () {
      return {
        example: {},
        rules: {},
      }
    },
    components: {Avatar},
    methods: {
      submit () {
        this.$refs.example.validate((valid) => {
          if (valid) {
            const fn = this.$route.params.id === 'create' ? addExample(this.$route.params.type, this.example) : updateExample(this.example)
            fn.then(() => {
              success(`${this.$route.params.id === 'create' ? '新增' : '修改'}项目案例“${this.example.topic}”成功！`)
              this.$router.push({name: 'exampleList'})
            }).catch(() => error(`${this.$route.params.id === 'create' ? '新增' : '修改'}项目案例“${this.example.topic}”失败！`))
          } else {
            return false
          }
        })
      },
    },
    created () {
      if (this.$route.params.id !== 'create') {
        getExample(this.$route.params.id).then((data) => {
          this.example = data
        })
      } else {
        this.example = {topic: '', url: '', pic: '', legend: ''}
      }
    },
  }
</script>
