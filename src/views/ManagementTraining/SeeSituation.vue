<template>
  <div class="ui_management_evaluation_plan">
    <div class="ui_search_result">
      <el-row style="background: #fafafa;margin-top: 50px;">
        <el-col :span="24">
          <span></span>查看完成情况
        </el-col>
      </el-row>
    </div>
    <!--筛选方式 -->
    <el-form ref="form" :model="form" label-width="auto">
      <el-form-item label="筛选方式：">
        <el-select v-model="form.Country" placeholder="国家">
          <el-option label="中国" value="1"></el-option>
        </el-select>
        <el-select v-model="form.Institution" placeholder="机构">
          <el-option label="培训机构" value="1"></el-option>
        </el-select>
        <el-select v-model="form.CompleteTrai" placeholder="是否完成培训">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="2"></el-option>
        </el-select>
        <el-select v-model="form.PassExam" placeholder="是否通考试">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="搜索：" class="search">
        <el-input v-model="form.name" style="width:320px"></el-input>
        <div class="fn-left ui_btn selectTraining" @click="selectTraining" style="float: none;">查询</div>
      </el-form-item>
    </el-form>

    <div class="ui_search_result">
      <el-row style="background: #fafafa;">
        <el-col :span="24">
          <span></span>搜索结果
        </el-col>
        <div class="fn-right">
          <div class="fn-left ui_btn" @click="downLoad" style="margin-right: 15px;">下载</div>
        </div>
      </el-row>
    </div>
    <!-- 表格 -->
    <div class="ui_table_box">
      <el-table
        ref="multipleTable"
        :data="tableData"
        :header-cell-style="{background:'#f5f6f8',height:'45px'}"
        :default-sort="{prop: 'date', order: 'descending'}"
        tooltip-effect="dark"
        stripe
        style="width: 100%">
        <!--        @selection-change="handleSelectionChange"-->
        <el-table-column
          prop="Name"
          label="姓名"
          sortable
          width="130">
        </el-table-column>
        <el-table-column
          prop="Country"
          label="所在国家"
          sortable
          width="160">
        </el-table-column>
        <el-table-column
          prop="Mechanism"
          label="所在机构"
          sortable
          show-overflow-tooltip
          width="340">
        </el-table-column>
        <el-table-column
          prop="Department"
          label="部门"
          sortable
          show-overflow-tooltip
          width="280">
        </el-table-column>
        <el-table-column
          prop="FinishTrai"
          label="是否完成培训"
          show-overflow-tooltip
          width="180">
        </el-table-column>
        <el-table-column
          prop="TrainDate"
          label="培训时间"
          sortable
          show-overflow-tooltip
          width="180">
        </el-table-column>
        <el-table-column
          prop="NumOfTime"
          label="参加考试次数"
          sortable
          show-overflow-tooltip
          width="190">
        </el-table-column>
        <el-table-column
          prop="PasExample"
          label="是否通过考试"
          show-overflow-tooltip
          width="190">
        </el-table-column>
        <el-table-column
          prop="TestAchievement"
          label="考试成绩"
          sortable
          show-overflow-tooltip
          width="190">
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="ui_pagination_box">
      <div class="fn-left ui_total_num">
        本页10条目，共计40条目
      </div>
      <el-pagination
        class="fn-left"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SeeSituation",
    data() {
      return {
        form: {
          Name: '',
          Country: '',
          Institution: '',
          CompleteTrai: '',
          PassExam: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData: [{
          Name: '张三',
          Country: '中国',
          Mechanism: '机构xxxxxxxxxxxxxxxxxxxxxxxx',
          Department: '部门xxxxxxxxxxxxxxxxxxxxxxxx',
          FinishTrai: '否',
          PercentagePassingTheExam: '98%',
          TrainDate: '2019-12-12',
          NumOfTime: '10',
          PasExample: '是',
          TestAchievement: '95',
        }, {
          Name: '张三',
          Country: '中国',
          Mechanism: '机构xxxxxxxxxxxxxxxxxxxxxxxx',
          Department: '部门xxxxxxxxxxxxxxxxxxxxxxxx',
          FinishTrai: '否',
          PercentagePassingTheExam: '98%',
          TrainDate: '2019-12-12',
          NumOfTime: '10',
          PasExample: '是',
          TestAchievement: '95',
        }, {
          Name: '张三',
          Country: '中国',
          Mechanism: '机构xxxxxxxxxxxxxxxxxxxxxxxx',
          Department: '部门xxxxxxxxxxxxxxxxxxxxxxxx',
          FinishTrai: '否',
          PercentagePassingTheExam: '98%',
          TrainDate: '2019-12-12',
          NumOfTime: '10',
          PasExample: '是',
          TestAchievement: '95',
        }, {
          Name: '张三',
          Country: '中国',
          Mechanism: '机构xxxxxxxxxxxxxxxxxxxxxxxx',
          Department: '部门xxxxxxxxxxxxxxxxxxxxxxxx',
          FinishTrai: '否',
          PercentagePassingTheExam: '98%',
          TrainDate: '2019-12-12',
          NumOfTime: '10',
          PasExample: '是',
          TestAchievement: '95',
        }, {
          Name: '张三',
          Country: '中国',
          Mechanism: '机构xxxxxxxxxxxxxxxxxxxxxxxx',
          Department: '部门xxxxxxxxxxxxxxxxxxxxxxxx',
          FinishTrai: '否',
          PercentagePassingTheExam: '98%',
          TrainDate: '2019-12-12',
          NumOfTime: '10',
          PasExample: '是',
          TestAchievement: '95',
        }, {
          Name: '张三',
          Country: '中国',
          Mechanism: '机构xxxxxxxxxxxxxxxxxxxxxxxx',
          Department: '部门xxxxxxxxxxxxxxxxxxxxxxxx',
          FinishTrai: '否',
          PercentagePassingTheExam: '98%',
          TrainDate: '2019-12-12',
          NumOfTime: '10',
          PasExample: '是',
          TestAchievement: '95',
        }, {
          Name: '张三',
          Country: '中国',
          Mechanism: '机构xxxxxxxxxxxxxxxxxxxxxxxx',
          Department: '部门xxxxxxxxxxxxxxxxxxxxxxxx',
          FinishTrai: '否',
          PercentagePassingTheExam: '98%',
          TrainDate: '2019-12-12',
          NumOfTime: '10',
          PasExample: '是',
          TestAchievement: '95',
        }, {
          Name: '张三',
          Country: '中国',
          Mechanism: '机构xxxxxxxxxxxxxxxxxxxxxxxx',
          Department: '部门xxxxxxxxxxxxxxxxxxxxxxxx',
          FinishTrai: '否',
          PercentagePassingTheExam: '98%',
          TrainDate: '2019-12-12',
          NumOfTime: '10',
          PasExample: '是',
          TestAchievement: '95',
        }, {
          Name: '张三',
          Country: '中国',
          Mechanism: '机构xxxxxxxxxxxxxxxxxxxxxxxx',
          Department: '部门xxxxxxxxxxxxxxxxxxxxxxxx',
          FinishTrai: '否',
          PercentagePassingTheExam: '98%',
          TrainDate: '2019-12-12',
          NumOfTime: '10',
          PasExample: '是',
          TestAchievement: '95',
        }, {
          Name: '张三',
          Country: '中国',
          Mechanism: '机构xxxxxxxxxxxxxxxxxxxxxxxx',
          Department: '部门xxxxxxxxxxxxxxxxxxxxxxxx',
          FinishTrai: '否',
          PercentagePassingTheExam: '98%',
          TrainDate: '2019-12-12',
          NumOfTime: '10',
          PasExample: '是',
          TestAchievement: '95',
        }]
      }
    },
    mounted() {
      this.initPage()
    },
    methods: {
      /**
       *  初始化
       * @param
       * @returns {Promise}
       * @Author XXX
       * */
      initPage() {

      },
      /**
       *  查询
       * @param
       * @returns {Promise}
       * @Author 李思晗
       * */
      selectTraining() {

      },
      /**
       *  下载
       * @param
       * @returns {Promise}
       * @Author 李思晗
       * */
      downLoad() {
        this.$confirm('是否下载选定的培训主题？', '下载', {
          cancelButtonText: '取消',
          confirmButtonText: '确定',
          showClose: false,
        }).then(() => {
          this.$message({
            type: 'success',
            message: '下载成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消下载'
          });
        });
      },
      /**
       * 分页
       * @param val
       * @returns {Promise}
       * @Author 李思晗
       */
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

  .el-col-11,
  .el-select {
    margin-right: 10px;
    width: 160px;
  }

  .el-form {
    padding: 0 25px;
  }

  .el-form-item {
    display: inline-block;
    margin: 10px 0;
  }

  .fn-right {
    margin-right: 25px;
  }

  .el-col-24 {
    width: 15%;
  }

</style>
