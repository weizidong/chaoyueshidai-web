<template>
  <div class="content_data">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ name: 'manage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{noteType[active]}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-select v-model="active" placeholder="请选择" @input="findList">
      <el-option label="全部笔记" value="0"/>
      <el-option v-for="(v,k) in noteType" :key="k" :label="v" :value="k"/>
    </el-select>
    <el-button type="info" icon="plus" @click="$router.push({name: 'noteEdit', params: {id: 'create'}})">新增</el-button>
    <el-table :data="data.list" style="width: 100%" v-loading="data.loading" element-loading-text="拼命加载中...">
      <el-table-column prop="title" label="标题" min-width="180"/>
      <el-table-column prop="type" label="类型" :formatter="({type})=>noteType[type]||'无'" min-width="180"/>
      <el-table-column prop="created" :formatter="({created})=>dateFilter(created)" label="创建时间" min-width="180"/>
      <el-table-column prop="share" :formatter="({share})=>['否','是'][share]" label="公开" min-width="80"/>
      <el-table-column label="操作" width="100">
        <template scope="scope">
          <el-button type="text" size="small" @click="$router.push({name: 'noteEdit', params: {id:scope.row.id}})">编辑</el-button>
          <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <MyPagination :page="data.page" :size="data.pageSize" :method="findList" :all="data.all"/>
  </div>
</template>

<script>
  import {findNoteApi, delNoteApi} from '../../../api/noteApi'
  import {dateFilter} from '../../../constant/filter'
  import {success, error, confirm} from '../../../actions'
  import MyPagination from '../../../components/MyPagination.vue'
  import {noteType} from '../../../constant'
  export default {
    name: 'noteList',
    components: {MyPagination},
    data () {
      return {
        noteType,
        active: '0',
        data: {page: 1, pageSize: 10, list: [], all: 0, loading: false},
      }
    },
    methods: {
      dateFilter,
      findList (page = {}) {
        this.data.loading = true
        findNoteApi(this.active, {...this.data, ...page}).then((data) => {
          this.data = {...data, loading: false}
        })
      },
      del ({id, title}) {
        confirm(`确认删除笔记"${title}"?`, 'warning', '删除确认').then(() => delNoteApi(id).then(() => {
          success(`删除笔记"${title}"成功！`)
          this.findList()
        }).catch(({msg}) => error(msg || '删除失败！请稍后重试...')))
      },
    },
    created () {
    },
  }
</script>
