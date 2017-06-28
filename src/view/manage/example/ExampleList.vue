<style lang="less" scoped>
  @import "example.less";
</style>

<template>
  <div class="example_list">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/view/manage/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>项目案例</el-breadcrumb-item>
      <el-breadcrumb-item>{{active && active.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="data.list"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <div>
      <MyPagination :page="data.page" :size="data.pageSize" :all="data.all"/>
    </div>
  </div>
</template>

<script>
  import {getConfig} from '../../../api/configApi'
  import {findExample} from '../../../api/exampleApi'
  import MyPagination from '../../../components/MyPagination.vue'
  export default {
    name: 'exampleList',
    components: {MyPagination},
    data () {
      return {
        config: {},
        data: {page: 1, pageSize: 10, list: []},
      }
    },
    computed: {
      active () {
        return this.config && this.config.example && this.config.example.find(({key}) => this.$route.params.type === key)
      },
    },
    methods: {
      findList (page = {}) {
        findExample(this.$route.params.type, {...this.data, ...page}).then((data) => {
          this.data = data
        })
      },
    },
    created () {
      getConfig().then(({value}) => {
        this.config = value && JSON.parse(value)
        this.findList()
      })
    },
  }
</script>
