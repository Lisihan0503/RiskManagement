<template>
  <div class="ui_management_evaluation_plan">
    <!-- 管理培训 -->
    <div class="ui_search_result">
      <el-row style="background: #fafafa;margin-top: 50px;">
        <el-col :span="24">
          <span></span>选择考题
        </el-col>
      </el-row>
      <div class="fn-right">
        <div class="fn-left ui_btn selectTraining" @click="selectTraining" style="float: none;">选择</div>
      </div>
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
<!--                @selection-change="handleSelectionChange"-->
        <el-table-column
          type="selection"
          width="60"
          hight="45px">
        </el-table-column>
        <el-table-column
          prop="QuestionContent"
          label="考题题干"
          sortable
          width="1575">
        </el-table-column>
        <el-table-column
          prop="QuestionType"
          label="考题类型"
          sortable
          width="200">
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
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
        <!--        @size-change="handleSizeChange"-->
        <!--        @current-change="handleCurrentChange"-->

      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SelectQuestions",
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
          QuestionContent: '考题内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          QuestionType: '单选',
        }, {
          QuestionContent: '考题内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          QuestionType: '多选',
        },{
          QuestionContent: '考题内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          QuestionType: '单选',
        }, {
          QuestionContent: '考题内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          QuestionType: '多选',
        },{
          QuestionContent: '考题内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          QuestionType: '单选',
        }, {
          QuestionContent: '考题内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          QuestionType: '多选',
        },{
          QuestionContent: '考题内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          QuestionType: '单选',
        }, {
          QuestionContent: '考题内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          QuestionType: '多选',
        },{
          QuestionContent: '考题内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          QuestionType: '单选',
        }, {
          QuestionContent: '考题内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          QuestionType: '多选',
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
      selectTraining(){

      }
    }
  }
</script>


<style lang="scss" scoped type="text/scss">
  @import "../../common/style/commonSass/ManagerCommonSass";
  @import "../../common/style/common.scss";
  @import "../../common/style/resetElemtnUI.css";

  .fn-right{
    margin: 10px 45px;
  }

</style>
