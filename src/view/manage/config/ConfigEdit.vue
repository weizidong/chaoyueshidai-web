<style lang="less" scoped>
  @import "config.less";
</style>

<template>
  <el-tabs v-model="activeName" class="config_edit" type="card" @tab-click="tabClick">
    <!--<el-tab-pane label="项目案例类型" name="example">-->
      <!--<el-form ref="exampleForm" class="form" inline :model="data">-->
        <!--<el-row>-->
          <!--<i class="el-icon-plus add" @click="$set(data.example,data.example.length,{name:'',show:false,icon:''})"></i>-->
          <!--<el-button type="primary" @click="onSubmit">保存</el-button>-->
        <!--</el-row>-->
        <!--<transition-group name="list-complete" tag="p" class="list">-->
          <!--<div v-for="(example,i) in data.example" :key="example" class="list-complete-item">-->
            <!--<el-form-item :label="(i+1)+'、类型名称：'" style="width: 35%;text-align: center">-->
              <!--<el-input v-model="example.name"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="是否显示：" style="width: 15%;text-align: center">-->
              <!--<el-switch on-text="" off-text="" v-model="example.show"></el-switch>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="显示图标：" style="width: 15%;text-align: center">-->
              <!--<Avatar width="32" height="32"/>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="路径设置：" style="width: 25%;text-align: center">-->
              <!--<el-input v-model="example.key" style="width: 130px">-->
                <!--<template slot="prepend">./example/</template>-->
              <!--</el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item style="width: 5%;text-align: center">-->
              <!--<i class="el-icon-delete2 delete" @click="$delete(data.example,i)"></i>-->
            <!--</el-form-item>-->
          <!--</div>-->
        <!--</transition-group>-->
      <!--</el-form>-->
    <!--</el-tab-pane>-->
    <!--<el-tab-pane label="我的笔记类型" name="note">-->
      <!--<el-form ref="noteForm" class="form" inline :model="data">-->
        <!--<el-row>-->
          <!--<i class="el-icon-plus add" @click="$set(data.note,data.note.length,{name:'',show:false,icon:''})"></i>-->
          <!--<el-button type="primary" @click="onSubmit">保存</el-button>-->
        <!--</el-row>-->
        <!--<transition-group name="list-complete" tag="p" class="list">-->
          <!--<div v-for="(note,i) in data.note" :key="note" class="list-complete-item">-->
            <!--<el-form-item :label="(i+1)+'、类型名称：'" style="width: 35%;text-align: center">-->
              <!--<el-input v-model="note.name"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="是否显示：" style="width: 15%;text-align: center">-->
              <!--<el-switch on-text="" off-text="" v-model="note.show"></el-switch>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="显示图标：" style="width: 15%;text-align: center">-->
              <!--<Avatar width="32" height="32"/>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="路径匹配：" style="width: 25%;text-align: center">-->
              <!--<el-input v-model="note.key" style="width: 130px">-->
                <!--<template slot="prepend">./note/</template>-->
              <!--</el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item style="width:5%;text-align: center">-->
              <!--<i class="el-icon-delete2 delete" @click="$delete(data.note,i)"></i>-->
            <!--</el-form-item>-->
          <!--</div>-->
        <!--</transition-group>-->
      <!--</el-form>-->
    <!--</el-tab-pane>-->
    <el-tab-pane label="我的资料" name="me">
      <el-form ref="mineForm" class="form" :model="data">
        <el-row>
          <i class="el-icon-plus add" @click="$set(data.mine,data.mine.length,{type:'',list:[],show:true})"></i>
          <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-row>
        <transition-group name="list-complete" tag="p" class="list">
          <el-form-item v-for="(mine,i) in data.mine" :key="mine" class="list-complete-item">
            <el-row>
              <el-col :span="3" style="width: 10%">
                <el-input v-model="mine.type" placeholder="类别" style="width: 100px">
                  <template slot="append">：</template>
                </el-input>
              </el-col>
              <el-col :span="18" style="width: 80%;position: relative">
                <div v-if="!mine.list.length" style="border: 1px solid #bfcbd9;padding: 5px;border-radius: 5px;">请添加内容！</div>
                <div v-if="mine.list.length && !mine.show" style="border: 1px solid #bfcbd9;padding: 5px;border-radius: 5px;">内容已隐藏！</div>
                <transition-group name="list-complete" v-if="mine.show" tag="p" class="list" style="margin: 0">
                  <el-row v-for="(list,i) in mine.list" :key="list" class="list-complete-item">
                    <el-form-item label="标题：" style="">
                      <el-input v-model="list.title"></el-input>
                    </el-form-item>
                    <el-form-item label="内容：" style="">
                      <el-input v-model="list.content"></el-input>
                    </el-form-item>
                    <i class="el-icon-delete2 delete" style="position: absolute;top: 15px;left: 50px" @click="$delete(mine.list,i)"></i>
                  </el-row>
                </transition-group>
                <i class="add" v-if="mine.list.length" :class="{'el-icon-caret-left':!mine.show,'el-icon-caret-bottom':mine.show}" style="position: absolute;top: 15px;right: 15px" @click="mine.show = !mine.show"></i>
              </el-col>
              <el-col :span="3" style="width: 10%">
                <i class="el-icon-plus add" @click="$set(mine.list,mine.list.length,{title:'',content:''})"></i>
                <i class="el-icon-delete2 delete" @click="$delete(data.mine,i)"></i>
              </el-col>
            </el-row>
          </el-form-item>
        </transition-group>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import Avatar from '../../../components/Avatar.vue'
  export default {
    name: 'configEdit',
    data () {
      return {
        activeName: '',
        data: {example: [], note: [], wechat: {}, mine: []},
      }
    },
    components: {Avatar},
    methods: {
      tabClick ({name}) {
        this.$router.push({query: {tab: name}})
      },
      onSubmit () {
      },
    },
    created () {
      const {query: {tab}} = this.$route
      this.activeName = tab || 'me'
    },
  }
</script>
