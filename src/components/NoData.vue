<style lang="less" scoped>
  .noData {
    text-align:center;
    img{width:256px;height:256px;}
    div{font-size:24px;}
  }
</style>
<template>
  <div class="noData">
    <img src="/static/img/nodata.png">
    <div>暂无数据！</div>
  </div>
</template>

<script>
  export default {
    name: 'NoData',
  }
</script>
