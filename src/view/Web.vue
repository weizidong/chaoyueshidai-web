<style lang="less" scoped>
  @import "web.less";
</style>

<template>
  <div class="web">
    <div>页头</div>
    <router-view></router-view>
    <div>页脚</div>
  </div>
</template>

<script>
  export default {
    name: 'web',
  }
</script>
