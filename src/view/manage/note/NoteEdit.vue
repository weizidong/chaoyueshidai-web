<template>
  <div class="content_data">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ name: 'manage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ name: 'noteList' }">日志笔记</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.params.id === 'create'?'新增':'修改'}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="text" icon="d-arrow-left" @click="$router.push({name:'noteList'})"></el-button>
    <el-form :model="note" :rules="rules" ref="note" label-width="100px">
      <el-form-item label="封面：" prop="pic">
        <Avatar :url="note.pic.indexOf('/userfiles/')>0?note.pic: '/static/img/none.png'" :success="(v)=>note.pic = v"/>
      </el-form-item>
      <el-form-item label="标题：" prop="title">
        <el-input v-model="note.title"/>
      </el-form-item>
      <el-form-item label="类型：" prop="type">
        <el-select v-model="note.type" placeholder="请选择类型...">
          <el-option v-for="(v,k) in noteType" :key="k" :label="v" :value="k"/>
        </el-select>
      </el-form-item>
      <el-form-item label="公开：" prop="share">
        <el-switch v-model="note.share" on-color="#13ce66" off-color="#ff4949" :on-value="1" on-text="是" :off-value="0" off-text="否"/>
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
  import {noteType} from '../../../constant'
  export default {
    name: 'noteEdit',
    data () {
      return {
        noteType,
        note: {title: '', type: '', pic: '', content: '', share: 0},
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
