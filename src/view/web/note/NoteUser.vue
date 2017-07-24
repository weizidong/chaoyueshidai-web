<style lang="less" scoped>
  @import "note.less";
</style>

<template>
  <div class="note">
    <transition name="title" mode="out-in">
      <div class="title" v-if="user.id == $route.params.id">"{{user.name}}"的笔记分享</div>
    </transition>
    <transition-group name="noe-complete" tag="div">
      <el-card :body-style="{ padding: '0' }" v-for="(e,k) in data.list" :key="e" class="noe-complete-item">
        <div @click="$router.push({name: 'noteInfo', params: {id:e.id}})" class="title">
          <img :src="e.pic.indexOf('/userfiles/')>0?e.pic: '/static/img/none.png'">
          <div>{{e.title}}</div>
        </div>
        <div class="bottom">
          <time class="time">{{ dateFilter(e.created) }}</time>
          <div>{{noteType[e.type]}}</div>
        </div>
      </el-card>
    </transition-group>
  </div>
</template>

<script>
  import {findNoteApi} from '../../../api/noteApi'
  import {getUserApi} from '../../../api/userApi'
  import {dateFilter} from '../../../constant/filter'
  import {noteType} from '../../../constant'
  export default {
    name: 'note',
    data () {
      return {
        noteType,
        data: {page: 1, pageSize: 20, list: [], all: 0},
        titleCss: ['title'],
        user: {},
      }
    },
    methods: {
      dateFilter,
      findList () {
        const {id} = this.$route.params
        findNoteApi(0, this.data, id).then((data) => {
          this.data = data
        })
      },
    },
    created () {
      getUserApi(this.$route.params.id).then((user) => {
        this.user = user
      })
      this.findList()
    },
  }
</script>
