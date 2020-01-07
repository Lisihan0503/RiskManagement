<template>
  <!--    管理问卷-->
  <div class="SeeVolume">
    <div class="ui_management_evaluation_plan">
      <div class="ui_search_result ui_rating">
        <el-row style="background: #fafafa;">
          <el-col :span="24">
            <span></span>查看子问卷
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="SeeVolume_cont">
      <!--    表格-->
      <div class="ui_table_box">
        <el-table
          :data="tableData"
          :header-cell-style="{background:'#f5f6f8',height:'45px'}"
          stripe
          @sort-change="tableSort"
          style="width: 100%">
          <el-table-column
            fixed
            prop="name"
            label="子问卷ID"
            sortable="custom"
            :show-overflow-tooltip='true'>
          </el-table-column>
          <el-table-column
            prop="unit"
            label="经办人"
            width="300">
          </el-table-column>
          <el-table-column
            prop="country"
            label="审核人"
            width="180">
          </el-table-column>
          <el-table-column
            prop="date"
            label="经办截至时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="date"
            label="审核截至时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态"
            width="180">
          </el-table-column>
        </el-table>
      </div>
      <!--    分页-->
      <div class="ui_pagination_box">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SeeVolume",
    data() {
      return {
        tableData: [{
          name: '单元名称010101',
          unit: '张一二',
          country: '张一二',
          date: '2019-12-12',
          status: '已提交'
        }, {
          name: '单元名称010101',
          unit: '张一二',
          country: '张一二',
          date: '2019-12-12',
          status: '已提交'
        }, {
          name: '单元名称010101',
          unit: '张一二',
          country: '张一二',
          date: '2019-12-12',
          status: '已提交'
        }, {
          name: '单元名称010101',
          unit: '张一二',
          country: '张一二',
          date: '2019-12-12',
          status: '已提交'
        }, {
          name: '单元名称010101',
          unit: '张一二',
          country: '张一二',
          date: '2019-12-12',
          status: '已提交'
        }],
        currentPage3: ''
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

<style scoped>

</style>
