<style lang="less" scoped>
  @import "sidebar.less";
</style>
<template>
  <div class="sidebar" :class="{hidden:hide}">
    <el-menu :default-active="active" theme="dark" unique-opened router @open="hide = false" @close="hide = true">
      <SidebarItem :index="idx+''" :hide="hide" :item="item" v-for="(item,idx) in menus" :key="idx"/>
    </el-menu>
    <div class="hide" @click="hide = !hide"><i :class="{'el-icon-d-arrow-left':!hide,'el-icon-d-arrow-right':hide}"></i></div>
  </div>
</template>
<script type="es6">
  import menu from '../router/menu'
  import SidebarItem from './SidebarItem.vue'
  import {getConfig} from '../api/configApi'
  export default {
    components: {SidebarItem},
    data(){
      return {
        menus: [],
        hide: false,
        config: {}
      }
    },
    computed: {
      active () {
        return this.$route.path;
      },
    },
    created () {
      getConfig().then(({value}) => {
        this.config = value && JSON.parse(value)
        menu.forEach((m) => {
          if (m.type) {
            m.children = this.config[m.type].map(({name, icon, key}) => ({title: name, icon, path: `/view/manage/${m.type}/${key}`}))
          }
          this.menus.push(m)
        })
      })
    }
  }
</script>
