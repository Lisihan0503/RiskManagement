<template>
  <div class="ui_management_evaluation_plan">
    <!--    管理评估计划-->
    <div class="ui_search_result">
      <el-row style="background: #fafafa;margin-top: 50px;">
        <el-col :span="24">
          <span></span>管理评估计划
        </el-col>
      </el-row>
      <!--      <el-row>-->
      <!--        <el-col :span="24">-->
      <!--          <ul class="ui_search_right">-->
      <!--            <li>-->
      <!--              <el-button class="fn-right" size="mini">新建评估计划</el-button>-->
      <!--            </li>-->
      <!--          </ul>-->
      <!--        </el-col>-->
      <!--      </el-row>-->
    </div>
    <!--    表格-->
    <div class="ui_table_box">
      <el-table
        :data="tableData"
        :header-cell-style="{background:'#f5f6f8',height:'45px'}"
        stripe
        style="width: 100%">
        <el-table-column
          fixed
          prop="address"
          label="评估计划名称"
          :show-overflow-tooltip='true'
          width="350">
        </el-table-column>
        <el-table-column
          prop="creatTime"
          :show-overflow-tooltip='true'
          label="评估年份"
          width="200">
        </el-table-column>
        <el-table-column
          prop="date"
          label="状态"
          :show-overflow-tooltip='true'
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="详细操作"
          :show-overflow-tooltip='true'
          width="550">
          <template slot-scope="scope">
            <ul class="ui_li_list">
              <li><a>单元结构</a></li>
              <li><a>评级结构</a></li>
              <li><a>管理指标</a></li>
              <li><a>管理问题</a></li>
              <li><a>关联问题</a></li>
              <li><a>剩余风险</a></li>
              <li><a>汇总路线</a></li>
            </ul>
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="审批操作"
          :show-overflow-tooltip='true'
          width="140">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="业务操作"
          width="350">
          <template slot-scope="scope">
            <ul class="ui_li_list">
              <li><a>复制</a></li>
            </ul>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--    分页-->
    <div class="ui_pagination_box">
      <div class="fn-left ui_total_num">
        本页10条目，共计40条目
      </div>
      <el-pagination
        class="fn-left"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ManagementEvaluationPlan',
    data() {
      return {
        tableData: [{
          creatTime: '2019',
          status: '',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          status: '2016-04',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-02',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-02',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-02',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-02',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-03',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1516 弄'
        }]
      }
    },
    components: {},
    mounted() {
      document.getElementById('bg_color').style.display = 'none';
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import "../../common/style/commonSass/ManagerCommonSass";
  @import "../../common/style/common.scss";
  @import "../../common/style/resetElemtnUI.css";

  .ui_pagination_box {
    margin-top: 80px;
    float: right;

    .ui_total_num {
      font-size: 14px;
      font-weight: 600;
      color: $navHoverBg;
      margin-top: 6px;
    }
  }

  .ui_li_list {
    li {
      float: left;
      text-align: center;
      margin-left: 10px;
    }

    li:hover {
      color: $navHoverBg;
      cursor: pointer;

      a {
        border-bottom: 1px solid $navHoverBg;
      }
    }
  }
</style>
