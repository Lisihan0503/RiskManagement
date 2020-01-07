<template>
  <el-row>
    <el-col :span="24">
      <div :style="{ 'padding-left': (leave.level - 1) * 10 + 'px' }">
        <i class="el-icon-caret-right" v-if="!leave.show" @click="treeDomeOpen(leave)"></i>
        <i class="el-icon-caret-bottom" v-if="leave.show" @click="treeDomeClose(leave)"></i>
        <span @click="treeDomeOpen(leave)">{{leave.name}}</span>
      </div>
      <el-row>
        <el-col :span="24">
          <tree-list v-if="item.name" v-for="(item, index) in leave.children" :leave="item" :key="index" v-show="leave.show"></tree-list>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  import treeList from '@/views/ManagementEvaluationPlan/treeList'

  export default {
    name: 'tree-list',
    props: ['leave'],
    data() {
      return {}
    },
    components: {
      'tree-list': treeList
    },
    mounted() {
    },
    methods: {
      treeDomeOpen(val) {
        val.show = true
        if(!val.children || val.children.length < 0){

        }
      },
      treeDomeClose(val) {
        val.show = false
      }
    }
  }
</script>

<style scoped>

</style>
