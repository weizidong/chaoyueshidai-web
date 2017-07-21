<style lang="less" scoped>
  @import "note.less";
</style>

<template>
  <div class="note">
    <transition name="title" mode="out-in">
      <div class="title" v-for="(v,i) in noteType" :key="i" v-if="$route.params.type == i">{{v}}</div>
    </transition>
    <transition-group name="noe-complete" tag="div">
      <el-card :body-style="{ padding: '0' }" v-for="(e,k) in data.list" :key="e" class="noe-complete-item">
        <div @click="$router.push({name: 'noteInfo', params: {id:e.id}})" class="title">
          <img :src="e.pic.indexOf('/userfiles/')>0?e.pic: '/static/img/none.png'">
          <div>{{e.title}}</div>
        </div>
        <div class="bottom">
          <time class="time">{{ dateFilter(e.created) }}</time>
          <div>作者：<span @click="$router.push({name: 'noteUser', params: {id:e.userid}})"><img :src="e.avatarUrl">{{e.userName}}</span></div>
        </div>
      </el-card>
    </transition-group>
  </div>
</template>

<script>
  import {findNoteApi} from '../../../api/noteApi'
  import {dateFilter} from '../../../constant/filter'
  import {noteType} from '../../../constant'
  export default {
    name: 'note',
    data () {
      return {
        noteType,
        data: {page: 1, pageSize: 20, list: [], all: 0},
        titleCss: ['title'],
      }
    },
    methods: {
      dateFilter,
      findList () {
        const {id} = this.$route.params
        findNoteApi(0, this.data, id).then((data) => {
          [0, 0, 0, 0].forEach(() => {
            data.list = [...data.list, ...data.list]
          })
          this.data = data
        })
      },
    },
    created () {
      this.findList()
    },
  }
</script>
