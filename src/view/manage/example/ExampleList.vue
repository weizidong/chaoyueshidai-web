<template>
  <div class="content_data">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/view/manage/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{active && active.name}}项目</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="info" icon="plus" @click="$router.push({name: 'exampleEdit', params: {id: 'create'}})">新增</el-button>
    <el-table :data="data.list" style="width: 100%">
      <el-table-column prop="topic" label="案例名称" min-width="180"/>
      <el-table-column prop="url" label="案例网址" min-width="180"/>
      <el-table-column prop="created" :formatter="({created})=>dateFilter(created)" label="创建时间"/>
      <el-table-column label="操作" width="100">
        <template scope="scope">
          <el-button type="text" size="small" @click="$router.push({name: 'exampleEdit', params: {id:scope.row.id}})">编辑</el-button>
          <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <MyPagination :page="data.page" :size="data.pageSize" :method="findList" :all="data.all"/>
  </div>
</template>

<script>
  import {getConfig} from '../../../api/configApi'
  import {findExample, delExample} from '../../../api/exampleApi'
  import {dateFilter} from '../../../constant/filter'
  import {success, error, confirm} from '../../../actions'
  import MyPagination from '../../../components/MyPagination.vue'
  export default {
    name: 'exampleList',
    components: {MyPagination},
    data () {
      return {
        config: {},
        data: {page: 1, pageSize: 10, list: [], all: 0},
      }
    },
    computed: {
      active () {
        return this.config && this.config.example && this.config.example.find(({key}) => this.$route.params.type === key)
      },
    },
    methods: {
      dateFilter,
      findList (page = {}) {
        findExample(this.$route.params.type, {...this.data, ...page}).then((data) => {
          this.data = data
        })
      },
      del ({id, topic}) {
        confirm(`确认删除项目案例"${topic}"?`, 'warning', '删除确认').then(() => delExample(id).then(() => {
          success(`删除项目案例"${topic}"成功！`)
          this.findList()
        }).catch(() => error(`删除项目案例"${topic}"失败！`))).catch((e) => e)
      },
    },
    beforeRouteUpdate (to, from, next) {
      next()
      this.data = {page: 1, pageSize: 10, list: [], all: 0}
      if (!to.query.page) {
        this.findList()
      }
    },
    created () {
      getConfig().then(({value}) => {
        this.config = value && JSON.parse(value)
      })
    },
  }
</script>
