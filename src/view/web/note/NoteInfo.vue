<style lang="less" scoped>
  @import "noteInfo.less";
</style>

<template>
  <div class="noteInfo">
    <div class="title">
      <img :src="note.pic">
      <div>
        <div>标题：<span>{{note.title}}</span></div>
        <div>发布时间：<span>{{dateFilter(note.created)}}</span></div>
        <div class="author">作者：<span><img :src="note.avatarUrl">{{note.userName}}</span></div>
      </div>
      <el-button type="text" icon="arrow-left" @click="$router.back()">返回</el-button>
    </div>
    <div class="content" v-html="note.content"></div>
  </div>
</template>

<script>
  import {getNoteApi} from '../../../api/noteApi'
  import {dateFilter} from '../../../constant/filter'
  import {noteType} from '../../../constant'
  export default {
    name: 'note',
    data () {
      return {
        noteType,
        note: {},
      }
    },
    methods: {
      dateFilter,
    },
    created () {
      getNoteApi(this.$route.params.id).then((note) => {
        this.note = note
      })
    },
  }
</script>
