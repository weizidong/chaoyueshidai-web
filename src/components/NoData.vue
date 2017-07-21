<style lang="less" scoped>
  .noData {
    div{font-size:24px;}
  }
</style>
<template>
  <div class="noData" v-if="show">
    <img src="/static/img/nodata.png">
    <div>暂无数据！</div>
  </div>
</template>

<script>
  export default {
    name: 'NoData',
    props: {
      show: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>
