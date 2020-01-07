<template>
  <div class="ui_management_evaluation_plan">
    <!--    管理问题-->
    <div class="ui_search_result" v-show="false">
      <el-row style="background: #fafafa;">
        <el-col :span="24">
          <span></span>管理问题-XXXXXXX评估计划名
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18" :offset="3">
          <el-steps :active="3" align-center class="ui_step_box">
            <el-step title="步骤1" description="评级结构"></el-step>
            <el-step title="步骤2" description="管理指标"></el-step>
            <el-step title="步骤3" description="管理问卷"></el-step>
            <el-step title="步骤4" description="关联问题"></el-step>
            <el-step title="步骤5" description="剩余风险"></el-step>
            <el-step title="步骤6" description="管理汇路线"></el-step>
          </el-steps>
        </el-col>
      </el-row>
      <!--    tab切换-->
      <el-row style="position: relative;top: -20px;z-index: 999;margin:0 45px;">
        <el-col :span="24">
          <div class="fn-left">风险类型</div>
          <ul class="ui_ul_t">
            <li v-for="(item,index) in tabArr" :key="index" :class="{'active_color':item.class}"
                @click="ToClick(index)">{{item.name}}
            </li>
          </ul>
          <div class="fn-right">
            <div class="fn-left ui_btn">批量导入</div>
            <div class="fn-left ui_btn">模板下载</div>
            <div class="fn-left ui_btn">下载</div>
            <div class="fn-left ui_btn">导入历史问题</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div v-if="current == 0">
      <!--    表格-->
      <div class="ui_table_box relev_box">
        <!--<el-table
                :data="tableData"
                :header-cell-style="{background:'#f5f6f8',height:'45px'}"
                stripe
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="date"
                    label="指标名称"
                    :show-overflow-tooltip='true'
            >
            </el-table-column>
        </el-table>-->
        <el-row class="ui_header">
          <el-col :span="24">
            <span>指标名称</span>
          </el-col>
        </el-row>
        <div class="ui_cont">
          <el-row>
            <el-col :span="24">
              <div>指标名称</div>
            </el-col>
          </el-row>
          <el-row v-for="(item, index) in treeList" :key="index">
            <el-col :span="24">
              <!--<div>
                <i class="el-icon-caret-right" v-if="!item.show" @click="treeDomeOpen(item)"></i>
                <i class="el-icon-caret-bottom" v-if="item.show" @click="treeDomeClose(item)"></i>
                <span>{{item.name}}</span>
              </div>-->
              <tree-list :leave="item"></tree-list>
            </el-col>
          </el-row>
        </div>
      </div>
      <!--    提交返回-->
      <div class="ui_tj">
        <el-row>
          <el-col :span="24">
            <ul class="ui_search_right">
              <li>
                <span>上一步</span>
              </li>
              <li>
                <span>草稿</span>
              </li>
              <li>
                <span>下一步</span>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </div>
    <div v-if="current != 0">

    </div>
  </div>
</template>


<script>
  import treeList from '@/views/ManagementEvaluationPlan/treeList'

  export default {
    name: 'ManagementProblem',
    data() {
      return {
        current: 0,
        tabArr: [{
          name: '固有风险指标',
          class: 'active_color'
        }, {
          name: '控制有效性指标',
          class: ''
        }],
        active: 0,
        currentPage3: 1,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        input: '',
        tableData: [{
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '数据提取'
        }],
        treeData: [{
          id: 1,
          lable: '固有风险',
          show: false
        }],
        data123: [],
        treeList: []
      }
    },
    components: {
      'tree-list': treeList
    },
    mounted() {
      document.getElementById('bg_color').style.display = 'none'
      this.data()
    },
    methods: {
      data() {
        let all = [{
          id: 1,
          name: '固有风险1',
          show: false,
          level: 1,
          children: [{
            id: 3,
            name: '固有风险3',
            show: false,
            level: 2,
            children: [{
              id: 4,
              name: '固有风险4',
              show: false,
              level: 3,
            }]
          }]
        }, {
          id: 2,
          name: '固有风险2',
          show: false,
          level: 1,
        }]

        this.treeList = all
      },
      ToClick(item) {
        this.tabArr[0].class = '';
        this.tabArr[1].class = '';
        this.current = item;
        this.tabArr[item].class = 'active_color';
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import "../../common/style/commonSass/ManagerCommonSass";

  .ui_li_list {
    li {
      float: left;
      text-align: center;
      margin-left: 15px;
    }

    li:hover {
      color: $navHoverBg;
      cursor: pointer;

      a {
        border-bottom: 1px solid $navHoverBg;
      }
    }
  }

  .ui_search_right {
    margin: 10px 0;

    li {
      span {
        cursor: pointer;
        width: 106px;
        height: 37px;
        line-height: 37px;
        text-align: center;
        border-radius: 4px;
        background: $navHoverBg;
        color: $white;
        display: inline-block;
        font-size: $fontsize16;
      }
    }

    li:nth-child(3) {
      margin-right: 40px;
    }

  }

  .ui_tj {
    margin-top: 10px;
    margin-bottom: 40px;
  }

  .ui_step_box {
    margin-top: 16px;
  }

  .ui_table_box {
    position: relative;
    top: -25px;
  }

  .ui_ul_t {
    float: left;
    margin-left: 30px;
    li {
      float: left;
      font-size: 14px;
      color: #a2a2a2;

      cursor: pointer;
      line-height: 22px;
      margin-top: 12px;
    }
    li:nth-child(2) {
      margin-left: 38px;
    }
  }

  .active_color {
    border-bottom: 2px solid $navHoverBg;
    color: $navHoverBg !important;
  }

  .ui_btn {
    cursor: pointer;
    height: 37px;
    line-height: 37px;
    text-align: center;
    border-radius: 4px;
    background: #bf7709;
    color: #fff;
    display: inline-block;
    font-size: 16px;
    padding: 0 30px;
    margin-top: 5px;
    margin-left: 20px;
  }
</style>
