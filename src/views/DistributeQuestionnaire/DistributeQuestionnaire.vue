<template>
  <div class="DistributeQuestionnaire">
    <div class="ui_management_evaluation_plan">
      <!--    分发问卷-->
      <div class="ui_search_result ui_rating">
        <el-row style="background: #fafafa;">
          <el-col :span="24">
            <span></span>分发问卷
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="DistributeQuestionnaire_cont">
      <!--    表格-->
      <div class="ui_table_box">
        <el-table
          :data="tableData"
          :header-cell-style="{background:'#f5f6f8',height:'45px'}"
          stripe
          style="width: 100%">
          <el-table-column
            fixed
            prop="col1"
            label="单元ID"
            :show-overflow-tooltip='true'>
          </el-table-column>
          <el-table-column
            prop="col2"
            label="单元名称"
            width="200">
          </el-table-column>
          <el-table-column
            prop="col3"
            label="单元属性"
            width="100">
          </el-table-column>
          <el-table-column
            prop="col4"
            label="所属机构"
            width="100">
          </el-table-column>
          <el-table-column
            prop="col5"
            label="所在国家"
            width="100">
          </el-table-column>
          <el-table-column
            prop="col6"
            label="所在城市"
            width="100">
          </el-table-column>
          <el-table-column
            prop="col7"
            label="业务映射"
            width="100">
          </el-table-column>
          <el-table-column
            prop="col8"
            label="直属上级单元"
            width="150">
          </el-table-column>
          <el-table-column
            prop="col9"
            label="操作"
            width="300">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-search"></el-button>
              <el-button type="primary" icon="el-icon-edit"></el-button>
              <el-button type="primary" icon="el-icon-delete"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-row>
      <el-col :span="11">
        <div class="ui_management_evaluation_plan">
          <!--    分发子问卷-->
          <div class="ui_search_result ui_rating">
            <el-row style="background: #fafafa;">
              <el-col :span="24">
                <span></span>分发子问卷
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="ui_management_evaluation_plan">
          <!--    实时发布状态-->
          <div class="ui_search_result ui_rating">
            <el-row style="background: #fafafa;">
              <el-col :span="24">
                <span></span>实时发布状态
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "DistributeQuestionnaire",
    data() {
      return {
        tableData:[{
          name: '单元名称010101',
          unit: '张一二',
          country: '张一二',
          date: '2019-12-12',
          status: '已提交'
          }]
      }
    },
    mounted() {
      this.initPage()
    },
    methods: {
      initPage() {

      },
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

</style>
