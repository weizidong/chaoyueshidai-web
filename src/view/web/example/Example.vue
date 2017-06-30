<style lang="less" scoped>
  @import "example.less";
</style>

<template>
  <div class="example">
    <div class="title">{{active && active.name}}</div>
    <transition-group name="example-complete" tag="div" class="example-complete-box">
      <el-card :body-style="{ padding: '0px' }" v-for="(e,i) in data.list" :key="e" class="example-complete-item">
        <img :src="'http://localhost:8000'+e.pic" class="image">
        <div class="bottom">
          <div>{{e.topic}}</div>
          <time class="time">{{ dateFilter(e.created) }}</time>
        </div>
      </el-card>
    </transition-group>
  </div>
</template>

<script>
  import {findExample} from '../../../api/exampleApi'
  import {getConfig} from '../../../api/configApi'
  import {dateFilter} from '../../../constant/filter'
  export default {
    name: 'example',
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
      findList () {
        const {type, userid} = this.$route.params
        findExample(type, this.data, userid).then((data) => {
          this.data = data
        })
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
      this.findList()
    },
  }
</script>
