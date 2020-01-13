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
          <div class="fn-left ui_btn" @click="importQuestion">导入考题</div>
          <div class="fn-left ui_btn" @click="templateDownload">考试模板下载</div>
          <div class="fn-left ui_btn" @click="downLoad">下载</div>
          <div class="fn-left ui_btn" @click="del">批量删除</div>
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
          type="selection"
          width="60"
          hight="45px">
        </el-table-column>
        <el-table-column
          prop="trainingTheme"
          label="培训主题"
          sortable
          width="340">
        </el-table-column>
        <el-table-column
          prop="trainingStatus"
          label="培训状态"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="closingDate"
          label="截止日期"
          sortable
          show-overflow-tooltip
          width="220">
        </el-table-column>
        <el-table-column
          prop="finishTrainingPercentage"
          label="完成培训百分比"
          sortable
          show-overflow-tooltip
          width="200">
        </el-table-column>
        <el-table-column
          prop="percentagePassingTheExam"
          label="通过考试百分比"
          sortable
          show-overflow-tooltip
          width="220">
        </el-table-column>
        <el-table-column
          prop="detailed"
          label="详细"
          value="1"
          show-overflow-tooltip
          width="300">
          <span class="FinishStatus" @click="toSee('1')">查看完成情况</span>
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作"
          show-overflow-tooltip
          width="320">
          <template slot-scope="scope">
            <ul class="ui_li_list">
              <li @click="CheckThis"><a>查看</a></li>
              <li @click="EditThis"><a>修改</a></li>
              <li @click="DeleteThis"><a>删除</a></li>
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

      <!--        :current-page.sync="currentPage3" -->

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
    name: "ManagementTraining",
    data() {
      return {

        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData: [{
          trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
          trainingStatus: '进行中',
          closingDate: '2019-12-12',
          finishTrainingPercentage: '50%',
          percentagePassingTheExam: '50%'
        }, {
          trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
          trainingStatus: '进行中',
          closingDate: '2019-12-12',
          finishTrainingPercentage: '50%',
          percentagePassingTheExam: '50%'
        }, {
          trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
          trainingStatus: '进行中',
          closingDate: '2019-12-12',
          finishTrainingPercentage: '50%',
          percentagePassingTheExam: '50%'
        }, {
          trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
          trainingStatus: '进行中',
          closingDate: '2019-12-12',
          finishTrainingPercentage: '50%',
          percentagePassingTheExam: '50%'
        }, {
          trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
          trainingStatus: '进行中',
          closingDate: '2019-12-12',
          finishTrainingPercentage: '50%',
          percentagePassingTheExam: '50%'
        }, {
          trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
          trainingStatus: '进行中',
          closingDate: '2019-12-12',
          finishTrainingPercentage: '50%',
          percentagePassingTheExam: '50%'
        }, {
          trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
          trainingStatus: '进行中',
          closingDate: '2019-12-12',
          finishTrainingPercentage: '50%',
          percentagePassingTheExam: '50%'
        }, {
          trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
          trainingStatus: '进行中',
          closingDate: '2019-12-12',
          finishTrainingPercentage: '50%',
          percentagePassingTheExam: '50%'
        }, {
          trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
          trainingStatus: '进行中',
          closingDate: '2019-12-12',
          finishTrainingPercentage: '50%',
          percentagePassingTheExam: '50%'
        }, {
          trainingTheme: '培训主题名称xxxxxxxxxxxxxxxxxxxx',
          trainingStatus: '进行中',
          closingDate: '2019-12-12',
          finishTrainingPercentage: '50%',
          percentagePassingTheExam: '50%'
        }],
        PopupData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
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
        this.$goRoute('/QuestionsModify')
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
       *  导入考题
       * @param
       * @returns {Promise}
       * @Author 李思晗
       * */
      importQuestion() {

      },
      /**
       *  考试模板下载
       * @param
       * @returns {Promise}
       * @Author 李思晗
       * */
      templateDownload() {
        this.$confirm('是否确认下载考试模板？', '考试模板下载', {
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
       *  批量删除
       * @param
       * @returns {Promise}
       * @Author XXX
       * */
      del() {
        this.$confirm('是否删除选定的培训主题？', '删除', {
          cancelButtonText: '取消',
          confirmButtonText: '确定',
          showClose: false,
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      /**
       *  查看完成情况
       * @param
       * @returns {Promise}
       * @Author 李思晗
       * */
      toSee(val) {
        if (val == '1') {
          this.$goRoute('/SeeSituation', {id: 123})
        }
      },
      /**
       * 查看培训
       * @param val
       * @returns {Promise}
       * @Author 李思晗
       */
      CheckThis(val) {
        // if (val == '1') {
        this.$goRoute('/TrainingModify', {id: 123});
        // }
      },
      /**
       * 编辑培训
       * @param val
       * @returns {Promise}
       * @Author 李思晗
       */
      EditThis() {
        // if (val == '1') {
        this.$goRoute('/TrainingModify', {id: 123});
        // }
      },
      /**
       * 删除当前条
       * @param val
       * @returns {Promise}
       * @Author 李思晗
       */
      DeleteThis() {
        this.$confirm('是否删除选定的培训主题？', '删除', {
          cancelButtonText: '取消',
          confirmButtonText: '确定',
          showClose: false,
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      /**
       *  条件查询
       * @param
       * @returns {Promise}
       * @Author 李思晗
       * */
      selectTraining() {

      },
      /**
       *  导入考题弹窗
       * @param
       * @returns {Promise}
       * @Author 李思晗
       * */
      importQuestion() { //html代码没有渲染到弹窗内
        this.$alert(
          '<template>' +
          '<el-table :data="PopupData" style="width: 100%">' +
          '<el-table-column prop="date" label="日期" width="180">' +
          '</el-table-column>' +
          '<el-table-column prop="name" label="姓名"  width="180">' +
          '</el-table-column>' +
          '<el-table-column prop="address" label="地址">' +
          '</el-table-column>' +
          '</el-table>' +
          '</template>',
          '导入考题', {
            dangerouslyUseHTMLString: true,
            showClose: false,
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
      },

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
    margin-right: 40px;
  }

  .el-col-24 {
    width: 15%;
  }

  .ui_li_list {
    li {
      display: inline-block;
      text-align: center;
      margin: 0 20px;
    }

    li:hover {
      color: $navHoverBg;
      cursor: pointer;

      a {
        border-bottom: 1px solid $navHoverBg;
      }
    }
  }

  .FinishStatus:hover {
    color: $navHoverBg;
    cursor: pointer;
    border-bottom: 1px solid $navHoverBg;
  }

</style>
