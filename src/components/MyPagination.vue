<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="page"
    :page-sizes="[10, 20, 50, 100]"
    :page-size="size"
    layout="total, sizes, prev, pager, next, jumper"
    :total="all">
  </el-pagination>
</template>
<script type="es6">
  export default{
    name: 'myPagination',
    props: {
      method: Function,
      size: {
        type: Number,
        default: 10
      },
      page: {
        type: Number,
        default: 1
      },
      all: {
        type: Number,
        default: 0
      }
    },
    methods: {
      handleSizeChange (pageSize) {
        this.$router.push({query: {...this.query, pageSize}});
        this.method && this.method({page: this.page, pageSize});
      },
      handleCurrentChange (page) {
        this.$router.push({query: {...this.query, page}});
        this.method && this.method({page, pageSize: this.pageSize});
      },
    },
    created () {
      const {page = 1, pageSize = 10} = this.query;
      this.method && this.method({page, pageSize});
    },
  }
</script>
