
<template>
  <div class="ui_management_evaluation_plan">
    <!-- 管理培训 -->
    <div class="ui_search_result">
      <el-row style="background: #fafafa;margin-top: 50px;">
        <el-col :span="24">
          <span></span>管理培训
        </el-col>
      </el-row>
    </div>
    <!--筛选方式 -->
    <el-form ref="form" :model="form" label-width="auto">
      <el-form-item label="筛选方式：">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="截止日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-select v-model="form.region" placeholder="培训状态">
          <el-option label="培训状态1" value="1"></el-option>
          <el-option label="培训状态2" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="搜索：" class="search">
        <el-input v-model="form.name" style="width:320px"></el-input>
        <div class="fn-left ui_btn selectTraining" @click="selectTraining" style="float: none;">查询</div>
      </el-form-item>
    </el-form>
    <!-- 操作按钮 -->
    <div class="ui_search_result">
      <el-row style="background: #fafafa;">
        <el-col :span="24">
          <span></span>搜索结果
        </el-col>
        <div class="fn-right">
          <div class="fn-left ui_btn" @click="uploadResources">上传资源</div>
          <div class="fn-left ui_btn" @click="addQuestions">创建考题</div>
          <div class="fn-left ui_btn" @click="addTraining">创建培训</div>
          <div class="fn-left ui_btn" @click="downLoad">下载</div>
          <div class="fn-left ui_btn" @click="del">删除</div>
        </div>
      </el-row>
    </div>
    <!-- 表格 -->
    <div class="ui_table_box">
      <el-table
        ref="multipleTable"
        :data="tableData"
        :header-cell-style="{background:'#f5f6f8',height:'45px'}"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="60"
        hight="45px">
        </el-table-column>
        <el-table-column
          prop="trainingTheme"
          label="培训主题"
          width="340">
        </el-table-column>
        <el-table-column
          prop="trainingStatus"
          label="培训状态"
          width="180">
        </el-table-column>
        <el-table-column
          prop="closingDate"
          label="截止日期"
          show-overflow-tooltip
          width="220">
        </el-table-column>
        <el-table-column
          prop="finishTrainingPercentage"
          label="完成培训百分比"
          show-overflow-tooltip
          width="200">
        </el-table-column>
        <el-table-column
          prop="percentagePassingTheExam"
          label="通过考试百分比"
          show-overflow-tooltip
          width="200">
        </el-table-column>
        <el-table-column
          prop="detailed"
          label="详细"
          show-overflow-tooltip
          width="340">
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作"
          show-overflow-tooltip
          width="300">
          <template slot-scope="scope">
            <ul class="ui_li_list">
              <li><a>查看</a></li>
              <li><a>修改</a></li>
              <li><a>删除</a></li>
            </ul>
          </template>
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
    name: "ManagementTraining",
    data() {
      return {
        tableData: [{
          trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
          trainingStatus: '进行中',
          closingDate: '2019-12-12',
          finishTrainingPercentage: '50%',
          percentagePassingTheExam: '50%',
          detailed: '查看完成情况'
        },
        {
          trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
          trainingStatus: '进行中',
          closingDate: '2019-12-12',
          finishTrainingPercentage: '50%',
          percentagePassingTheExam: '50%',
          detailed: '查看完成情况'
        },
        {
          trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
          trainingStatus: '进行中',
          closingDate: '2019-12-12',
          finishTrainingPercentage: '50%',
          percentagePassingTheExam: '50%',
          detailed: '查看完成情况'
        },
          {
            trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
            trainingStatus: '进行中',
            closingDate: '2019-12-12',
            finishTrainingPercentage: '50%',
            percentagePassingTheExam: '50%',
            detailed: '查看完成情况'
          },
          {
            trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
            trainingStatus: '进行中',
            closingDate: '2019-12-12',
            finishTrainingPercentage: '50%',
            percentagePassingTheExam: '50%',
            detailed: '查看完成情况'
          },{
            trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
            trainingStatus: '进行中',
            closingDate: '2019-12-12',
            finishTrainingPercentage: '50%',
            percentagePassingTheExam: '50%',
            detailed: '查看完成情况'
          },
          {
            trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
            trainingStatus: '进行中',
            closingDate: '2019-12-12',
            finishTrainingPercentage: '50%',
            percentagePassingTheExam: '50%',
            detailed: '查看完成情况'
          },
          {
            trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
            trainingStatus: '进行中',
            closingDate: '2019-12-12',
            finishTrainingPercentage: '50%',
            percentagePassingTheExam: '50%',
            detailed: '查看完成情况'
          },
          {
            trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
            trainingStatus: '进行中',
            closingDate: '2019-12-12',
            finishTrainingPercentage: '50%',
            percentagePassingTheExam: '50%',
            detailed: '查看完成情况'
          },
          {
            trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
            trainingStatus: '进行中',
            closingDate: '2019-12-12',
            finishTrainingPercentage: '50%',
            percentagePassingTheExam: '50%',
            detailed: '查看完成情况'
          }],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
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
       *  上传资源
       * @param
       * @returns {Promise}
       * @Author XXX
       * */
      uploadResources() {
        this.$goRoute('/UploadResources')
      },
      /**
       *  创建考题
       * @param
       * @returns {Promise}
       * @Author XXX
       * */
      addQuestions() {
        this.$goRoute('/addQuestions')
      },
      /**
       *  创建培训
       * @param
       * @returns {Promise}
       * @Author XXX
       * */
      addTraining() {
        this.$goRoute('/TrainingModify', {Modify: 0})
      },
      /**
       *  下载
       * @param
       * @returns {Promise}
       * @Author XXX
       * */
      downLoad() {

      },
      /**
       *  删除
       * @param
       * @returns {Promise}
       * @Author XXX
       * */
      del() {

      },
      /**
       *  查看完成情况
       * @param
       * @returns {Promise}
       * @Author XXX
       * */
      toSee(val) {
        if (val == 'val') {
          this.$goRoute('/SeeSituation', {id: 123})
        }
      },
      /**
       *  条件查询
       * @param
       * @returns {Promise}
       * @Author 李思晗
       * */
      selectTraining(){

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

  .ui_table_box {

    .el-table td {
      padding: 11px 0 !important;
    }

  }

  .ui_li_list {
    li {
      display: inline-block;
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

  .el-col-11,
  .el-select {
    margin-right: 10px;
    width: 150px;
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

  .selectTraining {
    display: inline-block;
    margin: 0 0 0 30px;
    padding: 0;
    width: 72px;
    height: 30px;
    line-height: 30px;
  }

</style>
