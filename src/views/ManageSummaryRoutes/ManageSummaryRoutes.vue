<template>
  <div class="ui_management_evaluation_plan">
    <!--    管理汇总路线-->
    <div class="ui_search_result">
      <el-row style="background: #fafafa;">
        <el-col :span="24">
          <span></span>管理汇总路线-XXXXXXXXXX评估计划名称
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18" :offset="3">
          <el-steps :active="5" align-center class="ui_step_box">
            <el-step title="步骤1" description="评级结构"></el-step>
            <el-step title="步骤2" description="管理指标"></el-step>
            <el-step title="步骤3" description="管理问卷"></el-step>
            <el-step title="步骤4" description="关联问题"></el-step>
            <el-step title="步骤5" description="剩余风险"></el-step>
            <el-step title="步骤6" description="管理汇路线"></el-step>
          </el-steps>
        </el-col>
      </el-row>
      <el-row style="position: relative;top: -30px;z-index: 999;">
        <el-col :span="24">
          <ul class="ui_search_right">
            <li>
              <el-button class="fn-right" size="mini">删除</el-button>
            </li>
            <li>
              <el-button class="fn-right" size="mini">新增汇总路线</el-button>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <!--    表格-->
    <div class="ui_table_box manager_routes_box">
      <el-table
        :data="tableData"
        :header-cell-style="{background:'#f5f6f8',height:'45px'}"
        stripe
        style="width: 100%">
        <el-table-column
          type="selection"
          fixed
          width="55">
        </el-table-column>
        <el-table-column
          fixed
          prop="date"
          label="汇总路线名称"
          :show-overflow-tooltip='true'
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          :show-overflow-tooltip='true'
          label="创建时间"
          width="600">
        </el-table-column>
        <el-table-column
          prop="date"
          label="权限类型"
          :show-overflow-tooltip='true'
          width="360">
        </el-table-column>
        <el-table-column
          prop="date"
          label="权重设置"
          :show-overflow-tooltip='true'
          width="210">
          <template slot-scope="scope">
            <ul class="ui_li_list">
              <li><a>自定义权重</a></li>
              <li><a>汇总因子权重</a></li>
            </ul>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="350">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" icon="el-icon-search"></el-button>
            <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
            <el-button type="primary" size="mini" icon="el-icon-delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--    提交返回-->
    <div class="ui_tj">
      <el-row>
        <el-col :span="24">
          <ul class="ui_search_right">
            <li>
              <span>提交</span>
            </li>
            <li>
              <span>返回</span>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>


  export default {
    name: 'ManageSummaryRoutes',
    data() {
      return {
        active:0,
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
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1517 弄'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1519 弄'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1518 弄'
        }, {
          date: '汇总路线名称01',
          name: '王小虎',
          address: '上海上海市普陀区金沙江路上海市普陀区金沙江路市普陀区金沙江路 1516 弄'
        }]
      }
    },
    components: {},
    mounted() {
      document.getElementById('bg_color').style.display = 'none'
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
    li{
      span{
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
    li:nth-child(2){
      margin-right: 40px;
    }

  }
  .ui_tj{
    margin-top: 10px;
  }

  .ui_step_box{
    margin-top: 16px;
  }
  .manager_routes_box{
    position: relative;
    top: -25px;
  }
</style>

