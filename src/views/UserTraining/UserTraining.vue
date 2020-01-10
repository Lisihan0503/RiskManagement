<template>
  <div class="ui_management_evaluation_plan">
    <div class="ui_search_result">
      <el-row style="background: #fafafa;margin-top: 50px;">
        <el-col :span="24">
          <span></span>培训汇总
        </el-col>
      </el-row>
    </div>
    <!-- 表格 -->
    <div class="ui_table_box" style="margin-top: 45px;">
      <el-table
        :data="tableData"
        :header-cell-style="{background:'#f5f6f8',height:'45px'}"
        :default-sort = "{prop: 'date', order: 'descending'}"
        stripe
        style="width: 100%">
        <el-table-column
          fixed
          sortable
          prop="theme"
          :show-overflow-tooltip='true'
          label="培训主题"
          width="430">
        </el-table-column>
        <el-table-column
          sortable
          prop="stopTime"
          :show-overflow-tooltip='true'
          label="截至时间"
          width="210">
        </el-table-column>
        <el-table-column
          prop="compelTraining"
          :show-overflow-tooltip='true'
          label="是否强制培训"
          width="210">
        </el-table-column>
        <el-table-column
          prop="compelPass"
          :show-overflow-tooltip='true'
          label="是否强制通过考试"
          width="210">
        </el-table-column>
        <el-table-column
          prop="compelCpltTraining"
          :show-overflow-tooltip='true'
          label="是否完成培训"
          width="210">
        </el-table-column>
        <el-table-column
          prop="compelPass"
          :show-overflow-tooltip='true'
          label="是否通过考试"
          width="210">
        </el-table-column>
        <el-table-column
          prop="operate"
          label="操作"
          :show-overflow-tooltip='true'
          width="360">
          <template slot-scope="scope">
            <ul class="ui_li_list">
              <li><a @click="ParticipateTrainingClick">参加培训</a></li>
              <li><a>参加考试</a></li>
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
    name: "UserTraining",
    data() {
      return {
        tableData: [{
          theme: '培训主题XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          stopTime: '2019-12-12',
          compelTraining: '是',
          compelPass: '是',
          compelCpltTraining: '否',
          compelPass: '否'
        }, {
          theme: '培训主题XXXXXXX',
          stopTime: '2019-12-12',
          compelTraining: '是',
          compelPass: '是',
          compelCpltTraining: '否',
          compelPass: '否'
        }, {
          theme: '培训主题XXXXXXX',
          stopTime: '2019-12-12',
          compelTraining: '是',
          compelPass: '是',
          compelCpltTraining: '否',
          compelPass: '否'
        }, {
          theme: '培训主题XXXXXXX',
          stopTime: '2019-12-12',
          compelTraining: '是',
          compelPass: '是',
          compelCpltTraining: '否',
          compelPass: '否'
        }, {
          theme: '培训主题XXXXXXX',
          stopTime: '2019-12-12',
          compelTraining: '是',
          compelPass: '是',
          compelCpltTraining: '否',
          compelPass: '否'
        }, {
          theme: '培训主题XXXXXXX',
          stopTime: '2019-12-12',
          compelTraining: '是',
          compelPass: '是',
          compelCpltTraining: '否',
          compelPass: '否'
        }, {
          theme: '培训主题XXXXXXX',
          stopTime: '2019-12-12',
          compelTraining: '是',
          compelPass: '是',
          compelCpltTraining: '否',
          compelPass: '否'
        }, {
          theme: '培训主题XXXXXXX',
          stopTime: '2019-12-12',
          compelTraining: '是',
          compelPass: '是',
          compelCpltTraining: '否',
          compelPass: '否'
        }, {
          theme: '培训主题XXXXXXX',
          stopTime: '2019-12-12',
          compelTraining: '是',
          compelPass: '是',
          compelCpltTraining: '否',
          compelPass: '否'
        }, {
          theme: '培训主题XXXXXXX',
          stopTime: '2019-12-12',
          compelTraining: '是',
          compelPass: '是',
          compelCpltTraining: '否',
          compelPass: '否'
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
       *  培训主题名称
       * @param
       * @returns {Promise}
       * @Author XXX
       * */
      TrainingName() {
        this.$goRoute('/TrainingName')
      },
      /**
       *  分页
       * @param
       * @returns {Promise}
       * @Author XXX
       * */
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      ParticipateTrainingClick(){

      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import "../../common/style/commonSass/ManagerCommonSass";
  @import "../../common/style/common.scss";
  @import "../../common/style/resetElemtnUI.css";

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

</style>
