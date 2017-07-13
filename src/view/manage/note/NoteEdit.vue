<template>
  <div class="content_data">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ name: 'manage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ name: 'noteList' }">日志笔记</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.params.id === 'create'?'新增':'修改'}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="text" icon="d-arrow-left" @click="$router.push({name:'noteList'})"></el-button>
    <el-form :model="note" :rules="rules" ref="note" label-width="100px">
      <el-form-item label="封面配图：" prop="pic">
        <Avatar :success="(v)=>note.pic = v"/>
      </el-form-item>
      <el-form-item label="标题：" prop="title">
        <el-input v-model="note.title"/>
      </el-form-item>
      <el-form-item label="类型：" prop="type">
        <el-input v-model="note.type"/>
      </el-form-item>
      <el-form-item label="内容：" prop="content">
        <el-input type="textarea" v-model="note.content" :rows="10"/>
      </el-form-item>
      <el-button type="primary" @click="submit">{{$route.params.id === 'create'?'新增':'保存'}}</el-button>
    </el-form>
  </div>
</template>

<script>
  import {getNoteApi, addNoteApi, updateNoteApi} from '../../../api/noteApi'
  import {success, error} from '../../../actions'
  import Avatar from '../../../components/Avatar.vue'
  export default {
    name: 'noteEdit',
    data () {
      return {
        note: {title: '', type: '', pic: '', content: ''},
        rules: {},
      }
    },
    components: {Avatar},
    methods: {
      submit () {
        this.$refs.note.validate((valid) => {
          if (valid) {
            const {id} = this.$route.params
            const fn = id === 'create' ? addNoteApi(this.note) : updateNoteApi(this.note)
            fn.then(() => {
              success(`${id === 'create' ? '新增' : '修改'}笔记“${this.note.title}”成功！`)
              this.$router.push({name: 'noteList'})
            }).catch(() => error(`${id === 'create' ? '新增' : '修改'}笔记“${this.note.title}”失败！`))
          } else {
            return false
          }
        })
      },
    },
    created () {
      const {id} = this.$route.params
      if (id !== 'create') {
        getNoteApi(id).then((note) => {
          this.note = note
        })
      }
    },
  }
</script>
