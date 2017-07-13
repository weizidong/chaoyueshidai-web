<style lang="less" scoped>
  @import "example.less";
</style>

<template>
  <div class="example">
    <transition name="title" mode="out-in">
      <div class="title" v-for="(c,i) in config.example" :key="c" v-if="c.show && c.key == $route.params.type">{{c.name}}</div>
    </transition>
    <el-row>
      <el-col :span="6" v-for="i in 4" :key="i">
        <transition-group name="example-complete" tag="div">
          <el-card v-if="k%4 == i-1" :body-style="{ padding: '0' }" v-for="(e,k) in data.list" :key="e" class="example-complete-item">
            <div @click="go(e.url)">
              <img :src="'http://localhost:8000'+e.pic" class="image">
              <div class="bottom">
                <div>{{e.topic}}</div>
                <time class="time">{{ dateFilter(e.created) }}</time>
              </div>
            </div>
          </el-card>
        </transition-group>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {findExample} from '../../../api/exampleApi'
  import {dateFilter} from '../../../constant/filter'
  export default {
    name: 'example',
    data () {
      return {
        config: {},
        data: {page: 1, pageSize: 10, list: [], all: 0},
        titleCss: ['title'],
      }
    },
    methods: {
      dateFilter,
      findList () {
        const {type, userid} = this.$route.params
        findExample(type, this.data, userid).then((data) => {
          [0, 0, 0, 0].forEach(() => {
            data.list = [...data.list, ...data.list]
          })
          this.data = data
        })
      },
      go (url) {
        window.open(url.indexOf('http') === -1 ? `http://${url}` : url)
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
      this.findList()
    },
  }
</script>
