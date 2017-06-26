<style lang="less" scoped>
  @import "web.less";
</style>

<template>
  <div class="web">
    <MyMenu/>
    <router-view></router-view>
    <MyFooter/>
  </div>
</template>

<script>
  import MyMenu from '../components/MyMenu.vue'
  import MyFooter from '../components/Footer.vue'
  export default {
    name: 'web',
    components: {MyMenu, MyFooter},
  }
</script>
